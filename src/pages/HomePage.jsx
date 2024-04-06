import React, { useState } from "react";
import homepagbg from "../assets/home.jpeg";
import NavigateButton from "../components/NavigateButton";
import Drawer from "@mui/material/Drawer";
import menuDrawerBg from "../assets/menudrawer.jpeg";
import useWindowDimensions from "../hooks/useWindowDimensions";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const { width, height } = useWindowDimensions();
  return (
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
        />
      </Drawer>
    </div>
  );
};

export default HomePage;
