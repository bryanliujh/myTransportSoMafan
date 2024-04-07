import React from "react";
import NavigateButton from "../components/NavigateButton";
import resultspagebg_few from "../assets/resultspage_few.png";
import resultspagebg_some from "../assets/resultspage_some.png";
import resultspagebg_many from "../assets/resultspage_many.png";
import { useLocation } from "react-router-dom";

import { DataAmount, getABtest } from "../utils";

const ResultsPage = () => {
  const pageName = "BusArrivalResultPage";
  const { dataAmount } = getABtest();
  const { state } = useLocation();

  const imgSource = () => {
    if (state?.backgroundImg) {
      return state.backgroundImg;
    } else if (dataAmount === DataAmount.Few) {
      return resultspagebg_few;
    } else if (dataAmount === DataAmount.Some) {
      return resultspagebg_some;
    }
    return resultspagebg_many;
  };

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
        targetType={"x_button"}
      />
      <img style={{ width: "100%", height: "100%" }} src={imgSource()} alt="" />
    </div>
  );
};

export default ResultsPage;
