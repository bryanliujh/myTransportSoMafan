import React from "react";
import NavigateButton from "../components/NavigateButton";
import mainMenuBg from "../assets/mainMenu.png";
import useWindowDimensions from "../hooks/useWindowDimensions";

const MainMenuPage = () => {
  const { width, height } = useWindowDimensions();
  const pageName = "MainMenuPage";
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
        pageName={pageName}
        targetType={"back_button"}
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
        pageName={pageName}
        targetType={"bus_arrival_button"}
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
        pageName={pageName}
        targetType={"bus_service_button"}
      />
      <img style={{ width: "100%", height: "100%" }} src={mainMenuBg} alt="" />
    </div>
  );
};

export default MainMenuPage;
