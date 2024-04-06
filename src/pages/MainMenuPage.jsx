import React from "react";
import NavigateButton from "../components/NavigateButton";
import mainMenuBg from "../assets/mainMenu.png";
import useWindowDimensions from "../hooks/useWindowDimensions";

const MainMenuPage = () => {
  const { width, height } = useWindowDimensions();
  return (
    <div>
      <NavigateButton
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 60,
          height: 60,
        }}
        pathname={"/"}
      />
      <NavigateButton
        style={{
          position: "absolute",
          top: height * 0.2,
          left: width * 0.13,
          width: 60,
          height: 60,
        }}
        pathname={"/search-arrival"}
      />
      <NavigateButton
        style={{
          position: "absolute",
          top: height * 0.2,
          left: width * 0.73,
          width: 60,
          height: 60,
        }}
        pathname={"/search-bus-service"}
      />
      <img style={{ width: "100%", height: "100%" }} src={mainMenuBg} alt="" />
    </div>
  );
};

export default MainMenuPage;
