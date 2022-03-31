import "../styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { UserProvider } from "@auth0/nextjs-auth0";

// @refresh reset
function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
