import "../styles/globals.scss";
import DrawerLayout from "../Layout/DrawerLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const path = require("path");
function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <DrawerLayout>
      <Component {...pageProps} />
      <ToastContainer />
    </DrawerLayout>
  );
}

export default MyApp;
