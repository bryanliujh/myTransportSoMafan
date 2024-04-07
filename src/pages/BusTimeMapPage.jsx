import React, { useEffect, useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import mapBackground from "../assets/googlemap.jpeg";
import bottomSheetBg from "../assets/bottomsheet.png";
import useWindowDimensions from "../hooks/useWindowDimensions";
import NavigateButton from "../components/NavigateButton";
import expandedBottomSheet from "../assets/expanded_bottomsheet.jpeg";
import resultspagebg from "../assets/resultbus_new_service.jpg";
import { DataAmount, getABtest } from "../utils";

const BusTimeMapPage = () => {
  const pageName = "BusTimeMapPage";
  const [open, setOpen] = useState(false);
  const { expanded, dataAmount } = getABtest();
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    setOpen(true);
  }, []);

  const drawerMinHeight = () => {
    if (dataAmount === DataAmount.Few) {
      return height * 0.4;
    } else if (dataAmount === DataAmount.Some) {
      return height * 0.6;
    }
    return height * 0.8;
  };

  return (
    <div>
      <NavigateButton
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 50,
          height: 50,
        }}
        pathname={"/search-bus-service"}
        pageName={pageName}
        targetType={"bus_service_button"}
      />
      <NavigateButton
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 50,
          height: 50,
        }}
        pathname={"/"}
        pageName={pageName}
        targetType={"home_button"}
      />
      <img
        style={{ width: "100%", height: "100%" }}
        alt=""
        src={mapBackground}
      />
      <BottomSheet
        snapPoints={({ minHeight, maxHeight }) => [
          drawerMinHeight(),
          height * 0.8,
        ]}
        open={open}
        blocking={false}
      >
        <div style={{ position: "relative" }}>
          <img
            style={{ width: "100%", height: "100%", position: "relative" }}
            alt=""
            src={expanded ? expandedBottomSheet : bottomSheetBg}
          />
          <NavigateButton
            style={{
              position: "absolute",
              top: expanded ? 380 : 480,
              right: 10,
              width,
              height: 120,
            }}
            pathname={"/results-page"}
            pageName={pageName}
            pageParam={{
              backgroundImg: resultspagebg,
            }}
          />
        </div>
      </BottomSheet>
    </div>
  );
};

export default BusTimeMapPage;
