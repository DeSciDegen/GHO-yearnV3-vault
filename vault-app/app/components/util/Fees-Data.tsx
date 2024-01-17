import React from "react";

const FeesData = () => {
  return (
    <div>
      <h6 className="font-bold mt-10 mb-2 text-lg">Fees</h6>

      <div className="grid grid-cols-2">
        <div>
          <p>Management:</p>
          <p className="font-bold">0%</p>
        </div>
        <div>
          <p>Performance:</p>
          <p className="font-bold">10%</p>
        </div>
      </div>
    </div>
  );
};

export default FeesData;
