import React, { useState } from "react";
import AppBar from "../appBar";
import halfmapBg from "../assets/halfmap.png";
// import resultsbusesbg from "../assets/resultbuses.png";
// import expandedResultBusesbg from "../assets/expanded_resultbus.jpeg";

import resultbusesfew from "../assets/resultbuses_few.png";
import resultbusessome from "../assets/resultbuses_some.png";
import resultbusesmany from "../assets/resultbuses_many.png";

import expandedresultbusesfew from "../assets/resultbuses_expanded_few.jpeg";
import expandedresultbusessome from "../assets/resultbuses_expanded_some.jpeg";
import expandedresultbusesmany from "../assets/resultbuses_expanded_many.jpeg";

import NavigateButton from "../components/NavigateButton";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { DataAmount, getABtest } from "../utils";

const SearchBusArrivalPage = () => {
  const { width, height } = useWindowDimensions();
  const [isHidden, setHidden] = useState(false);
  const [isResultHidden, setResultHidden] = useState(true);
  const { expanded, dataAmount } = getABtest();
  const pageName = "SearchBusArrivalPage";

  const imgSource = () => {
    if (dataAmount === DataAmount.Few) {
      return expanded ? expandedresultbusesfew : resultbusesfew;
    } else if (dataAmount === DataAmount.Some) {
      return expanded ? expandedresultbusessome : resultbusessome;
    }
    return expanded ? expandedresultbusesmany : resultbusesmany;
  };

  const hitBoxStyle = () => {
    if (dataAmount === DataAmount.Few) {
      return expanded
        ? { top: height * 0.15, height: 67 }
        : { top: height * 0.15, height: 100 };
    } else if (dataAmount === DataAmount.Some) {
      return expanded
        ? { top: height * 0.15, height: 60 }
        : { top: height * 0.15, height: 80 };
    }
    return expanded
      ? { top: height * 0.69, height: 60 }
      : { top: height * 0.27, height: 140 };
  };

  const keyWordTarget = () => {
    if (dataAmount === DataAmount.Few) {
      return "buangkok crescent 986";
    } else if (dataAmount === DataAmount.Some) {
      return "68031";
    }
    return "bullion park";
  };

  const onKeyPress = (e) => {
    if (String(e.target.value).toLowerCase().includes(keyWordTarget())) {
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
        pageName={pageName}
      />
      {isHidden ? (
        isResultHidden ? null : (
          <div>
            <img
              src={imgSource()}
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
                ...hitBoxStyle(),
              }}
              pathname={"/results-page"}
              pageName={pageName}
              targetType={"bus_arrival_result"}
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
