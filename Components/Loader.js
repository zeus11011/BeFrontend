import React, { useEffect } from "react";
import lottie from "lottie-web";
import animationData from "../styles/blackloader.json";

const LoadingComponent = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById("loadingAnimation"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh", // Adjust this value to control the loader's height
      }}
    >
      <div id="loadingAnimation"></div>
    </div>
  );
};

export default LoadingComponent;
