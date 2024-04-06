import React, { useState } from "react";
import AppBar from "../appBar";
import halfmapBg from "../assets/halfmap.png";
import resultsbusesbg from "../assets/resultbuses.png";
import expandedResultBusesbg from "../assets/expanded_resultbus.jpeg";
import NavigateButton from "../components/NavigateButton";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { getABtest } from "../utils";

const SearchBusArrivalPage = () => {
  const { width, height } = useWindowDimensions();
  const [isHidden, setHidden] = useState(false);
  const [isResultHidden, setResultHidden] = useState(true);
  const { expanded } = getABtest();

  const onKeyPress = (e) => {
    if (String(e.target.value).toLowerCase().includes("kent ridge")) {
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
        pageTitle={"Bus Arrival Time"}
        onFocus={() => setHidden(true)}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
      />
      {isHidden ? (
        isResultHidden ? null : (
          <div>
            <img
              src={expanded ? expandedResultBusesbg : resultsbusesbg}
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
                ...(expanded
                  ? { top: height * 0.22, height: 60 }
                  : { top: height * 0.27, height: 80 }),
              }}
              pathname={"/results-page"}
            />
          </div>
        )
      ) : (
        <img src={halfmapBg} alt="" style={{ width: "100%", height: "100%" }} />
      )}
    </div>
  );
};

export default SearchBusArrivalPage;
