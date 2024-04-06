import React from "react";
import NavigateButton from "../components/NavigateButton";
import resultspagebg from "../assets/resultspage.png";

const ResultsPage = () => {
  const pageName = "BusArrivalResultPage";
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
      <img
        style={{ width: "100%", height: "100%" }}
        src={resultspagebg}
        alt=""
      />
    </div>
  );
};

export default ResultsPage;
