import React, { Fragment } from "react";
import "./style.css";
const DashboardComponent = ({
  handleDropdown,
  selectedNumber,
  handleFinish,
  showOptions,
  handleLogout,
  carousel
}) => {
  return (
    <Fragment>
      <div>
        <div>
          <select onChange={handleDropdown}>{showOptions()}</select>
        </div>
        <div className="carousel">{carousel()}</div>
        <button onClick={handleFinish}>Finish</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </Fragment>
  );
};
export default DashboardComponent;
