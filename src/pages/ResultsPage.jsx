import React from "react";
import NavigateButton from "../components/NavigateButton";
import resultspagebg from "../assets/resultspage.png";

const ResultsPage = () => {
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
