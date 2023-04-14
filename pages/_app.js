import "../styles/globals.scss";
import DrawerLayout from "../Layout/DrawerLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "../store/store";
import { Provider } from "react-redux";

const path = require("path");
function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Provider store={store}>
        <DrawerLayout>
          <Component {...pageProps} />
          <ToastContainer />
        </DrawerLayout>
      </Provider>
    </>
  );
}

export default MyApp;
