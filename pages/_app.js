import "../styles/globals.scss";
import DrawerLayout from "../Layout/DrawerLayout";

const path = require("path");
function MyApp({ Component, pageProps }) {
  return (
    // <DrawerLayout>
    <Component {...pageProps} />
    // </DrawerLayout>
  );
}

export default MyApp;
