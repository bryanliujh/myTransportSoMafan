import React, { useState } from "react";
import homepagbg from "../assets/home.jpeg";
import NavigateButton from "../components/NavigateButton";
import Drawer from "@mui/material/Drawer";
import menuDrawerBg from "../assets/menudrawer.jpeg";
import homeMainMenu from "../assets/homeMainMenu.png";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { getABtest } from "../utils";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const { width, height } = useWindowDimensions();
  const { hamburger } = getABtest();
  const pageName = "HomePage";
  return hamburger ? (
    <div>
      <img style={{ width: "100%", height: "100%" }} src={homepagbg} alt="" />
      <NavigateButton
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 60,
          height: 60,
        }}
        pathname={"/"}
        onClick={toggleDrawer(true)}
        pageName={pageName}
        targetType={"hamburger_button"}
      />

      <Drawer
        open={open}
        style={{ position: "relative" }}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { width: "75%" },
        }}
      >
        <img
          style={{ width: "100%", height: "100%", position: "relative" }}
          src={menuDrawerBg}
          alt=""
        />
        <NavigateButton
          style={{
            position: "absolute",
            top: 0,
            left: width * 0.6,
            width: 60,
            height: 60,
          }}
          pathname={"/"}
          onClick={toggleDrawer(false)}
          pageName={pageName}
          targetType={"close_drawer"}
        />
        {/* // bus service */}
        <NavigateButton
          style={{
            position: "absolute",
            top: height * 0.13,
            left: width * 0.5,
            width: 60,
            height: 60,
          }}
          pathname={"/search-bus-service"}
          pageName={pageName}
          targetType={"bus_service_button"}
        />
        <NavigateButton
          style={{
            position: "absolute",
            top: height * 0.13,
            left: width * 0.13,
            width: 60,
            height: 60,
          }}
          pathname={"/search-arrival"}
          pageName={pageName}
          targetType={"bus_arrival_button"}
        />
      </Drawer>
    </div>
  ) : (
    <div style={{ position: "relative" }}>
      <NavigateButton
        style={{
          position: "absolute",
          top: height * 0.15,
          left: width * 0.3,
          width: 60,
          height: 60,
        }}
        pathname={"/search-bus-service"}
        pageName={pageName}
        targetType={"bus_service_button"}
      />
      <NavigateButton
        style={{
          position: "absolute",
          top: height * 0.15,
          left: width * 0.55,
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
          top: height * 0.15,
          left: width * 0.8,
          width: 60,
          height: 60,
        }}
        pathname={"/main-menu-page"}
        pageName={pageName}
        targetType={"see_all_menu_button"}
      />
      <img
        style={{ width: "100%", height: "100%" }}
        src={homeMainMenu}
        alt=""
      />
    </div>
  );
};

export default HomePage;
