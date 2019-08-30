import React from "react";
const DashboardComponent = ({
  handleDropdown,
  selectedNumber,
  handleFinish,
  showOptions
}) => {
  return (
    <div>
      <div>
        <select onChange={handleDropdown}>{showOptions()}</select>
      </div>
      <div>
        <h1>{selectedNumber}</h1>
      </div>
      <button onClick={handleFinish}>Finish</button>
    </div>
  );
};
export default DashboardComponent;
