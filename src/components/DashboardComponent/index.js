import React from "react";
const DashboardComponent = ({
  handleDropdown,
  selectedNumber,
  handleFinish,
  showOptions,
  handleLogout
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
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
export default DashboardComponent;
