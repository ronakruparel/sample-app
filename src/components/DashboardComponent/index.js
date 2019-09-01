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
      <div className="header">
        <button onClick={handleLogout} className="logout">
          Logout
        </button>
      </div>
      <div>
        <select onChange={handleDropdown}>
          <option>Select</option>
          {showOptions()}
        </select>
      </div>
      {currentSlide > 0 && (
        <div className="carousel">
          {
            <div>
              {carousel()}
              <h1> Slide {currentSlide}</h1>
            </div>
          }
          <div className="dotsWrappper">{dots()}</div>
        </div>
      )}

      {currentSlide > 0 && (
        <button className="finishButton" onClick={handleFinish}>
          Finish
        </button>
      )}
      <div className="footer">Copyright @2019</div>
    </Fragment>
  );
};
export default DashboardComponent;
