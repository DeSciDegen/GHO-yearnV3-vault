import React from "react";
import FeesData from "./Fees-Data";

const AprDescriptionData = () => {
  return (
    <div>
      <h6 className="font-bold mb-3 text-lg">APR</h6>

      <div className="grid grid-cols-3">
        <div>
          <p>Last 7 days:</p>
          <p className="font-bold">Value </p>
        </div>
        <div>
          {" "}
          <p>Last 30 days:</p>
          <p className="font-bold">Value </p>
        </div>
        <div>
          {" "}
          <p>Inception</p>
          <p className="font-bold">Value </p>
        </div>
      </div>
      <FeesData />
    </div>
  );
};

export default AprDescriptionData;
