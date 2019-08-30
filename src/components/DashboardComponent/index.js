import React, { Fragment } from "react";
import "./style.css";
const DashboardComponent = ({
  handleDropdown,
  currentSlide,
  handleFinish,
  showOptions,
  handleLogout,
  carousel,
  dots
}) => {
  return (
    <Fragment>
      <div>
        <div>
          <select onChange={handleDropdown}>
            <option selected="selected">Select</option>
            {showOptions()}
          </select>
        </div>
        <button onClick={handleLogout} className="logout">
          Logout
        </button>
        {currentSlide > 0 && (
          <div className="carousel">
            {
              <div>
                {carousel()}
                {currentSlide}
              </div>
            }
            <div className="dotsWrappper">{dots()}</div>
          </div>
        )}

        <button onClick={handleFinish}>Finish</button>
      </div>
    </Fragment>
  );
};
export default DashboardComponent;
