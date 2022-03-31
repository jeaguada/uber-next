import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

function Login() {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, []);

  return (
    <Wrapper>
      <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png" />
      <Title>Log in to access your account</Title>
      <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
      <SignInButton
        onClick={() => {
          signInWithPopup(auth, provider);
        }}
      >
        Sign in with Google
      </SignInButton>
    </Wrapper>
  );
}

export default Login;

const Wrapper = tw.div`
    flex flex-col h-screen bg-gray-100 p-4
`;

const SignInButton = tw.button`
    bg-black text-white text-center py-4 mt-8 self-center w-full cursor-pointer
`;

const UberLogo = tw.img`
    h-10 w-auto self-start
`;

const Title = tw.div`
    text-5xl pt-4 text-gray-500
`;

const HeadImage = tw.img`
  object-contain w-full
`;
