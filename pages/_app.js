import "../styles/globals.scss";
import DrawerLayout from "../Layout/DrawerLayout";

const path = require("path");
function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <DrawerLayout>
      <Component {...pageProps} />
    </DrawerLayout>
  );
}

export default MyApp;
