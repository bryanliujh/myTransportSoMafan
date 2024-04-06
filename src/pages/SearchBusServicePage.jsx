import React, { useState } from "react";
import AppBar from "../appBar";
import busServiceBg from "../assets/busServiceAll.png";
import busService200 from "../assets/busService200.png";
import useWindowDimensions from "../hooks/useWindowDimensions";
import NavigateButton from "../components/NavigateButton";

const SearchBusStopPage = () => {
  const { width } = useWindowDimensions();
  const [isHidden, setHidden] = useState(false);
  const [isResultHidden, setResultHidden] = useState(true);
  const onKeyPress = (e) => {
    if (String(e.target.value).toLowerCase().includes("200")) {
      setResultHidden(false);
    } else {
      if (!isResultHidden) {
        setResultHidden(true);
      }
    }
  };
  const onKeyDown = (e) => {
    onKeyPress(e);
  };
  const onKeyUp = (e) => {
    onKeyPress(e);
  };

  return (
    <div>
      <AppBar
        pageTitle={"Bus Services"}
        showHomeIcon={true}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onFocus={() => setHidden(true)}
      />
      {isHidden ? (
        isResultHidden ? null : (
          <div>
            <img
              src={busService200}
              alt=""
              style={{
                width: "100%",
                position: "absolute",
                top: 100,
              }}
            />
            <NavigateButton
              style={{
                position: "absolute",
                width,
                top: 160,
                height: 80,
              }}
              pathname={"/bus-time-map"}
            />
          </div>
        )
      ) : (
        <img
          src={busServiceBg}
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </div>
  );
};

export default SearchBusStopPage;
