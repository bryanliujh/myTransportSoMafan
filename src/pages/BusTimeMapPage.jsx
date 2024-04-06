import React, { useEffect, useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import mapBackground from "../assets/googlemap.jpeg";
import bottomSheetBg from "../assets/bottomsheet.png";
import useWindowDimensions from "../hooks/useWindowDimensions";
import NavigateButton from "../components/NavigateButton";
import expandedBottomSheet from "../assets/expanded_bottomsheet.jpeg";
import { getABtest } from "../utils";

const BusTimeMapPage = () => {
  const [open, setOpen] = useState(false);
  const { expanded } = getABtest();
  const [sheetHeight, setSheetHeight] = useState(undefined);
  const { width, height } = useWindowDimensions();
  const onDismiss = () => {
    setSheetHeight(100);
  };

  useEffect(() => {
    setOpen(true);
  }, []);

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
      />
      <img
        style={{ width: "100%", height: "100%" }}
        alt=""
        src={mapBackground}
      />
      <BottomSheet
        snapPoints={({ minHeight, maxHeight }) => [
          sheetHeight ?? height * 0.3,
          height * 0.8,
        ]}
        onDismiss={onDismiss}
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
              top: expanded ? 400 : 480,
              right: 10,
              width,
              height: 80,
            }}
            pathname={"/results-page"}
          />
        </div>
      </BottomSheet>
    </div>
  );
};

export default BusTimeMapPage;
