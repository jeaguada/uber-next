import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../../data/carList";

function RideSelector({ pickupCoordinates, dropoffCoordinates }) {
  let [rideDuration, setRideDuration] = useState(0);

  // get ride duration from MAPBOX API
  useEffect(() => {
    rideDuration = fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiZGV2YWtsZSIsImEiOiJjbDFjb3Rrb2EwMG9iM2RudTFsMWF4MjloIn0.PeKhSbywDXwDVW-jHOvD7A`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.code === "Ok") {
          setRideDuration(data.routes[0].duration / 100);
        }
      });
  }, [pickupCoordinates, dropoffCoordinates]);

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((e, i) => (
          <Car key={i}>
            <CarImage src={e.imgUrl} />
            <CarDetails>
              <Service>{e.service}</Service>
              <Time>5 min away</Time>
            </CarDetails>
            <Price>{"$" + (rideDuration * e.multiplier).toFixed(2)}</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
}

export default RideSelector;

const Wrapper = tw.div`
    flex-1 flex flex-col overflow-y-hidden
`;

const Title = tw.div`
    tex-gray-500 text-center text-xs py-2 border-b
`;

const CarList = tw.div`
    overflow-y-scroll
`;

const Car = tw.div`
    flex p-4 items-center
`;

const CarImage = tw.img`
    h-14 mr-4
`;

const CarDetails = tw.div`
    flex-1
`;

const Price = tw.div`

`;

const Service = tw.div`
    font-medium
`;

const Time = tw.div`
    text-xs text-blue-500
`;
