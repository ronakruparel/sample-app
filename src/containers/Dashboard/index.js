import React from "react";
import { withRouter } from "react-router-dom";
import { DashboardComponent } from "../../components";
class Dashboard extends React.Component {
  state = {
    selectedNumber: null,
    currentSlide: 0
  };

  componentDidMount() {
    let token = localStorage.getItem("isAuthenticated");
    if (!token) {
      this.props.history.push(`${process.env.PUBLIC_URL}/login`);
    }
  }

  showOptions = () => {
    let options = [];
    for (let i = 1; i <= 20; i++) {
      options.push(<option key={i}>{i}</option>);
    }
    return options;
  };

  handleDropdown = e => {
    let data = localStorage.getItem("selected");
    if (!data) {
      localStorage.setItem("selected", [e.target.value]);
    } else {
      localStorage.setItem("selected", [data, e.target.value]);
    }
    this.setState({
      selectedNumber: Number(e.target.value),
      currentSlide: 1
    });
  };

  handleFinish = () => {
    let data = localStorage.getItem("selected");
    alert(`You clicked ${data ? data : "no number"}`);
  };

  handleLogout = () => {
    this.props.history.push(`${process.env.PUBLIC_URL}/login`);
  };

  carousel = () => {
    let slides = [];
    for (let i = 1; i <= this.state.selectedNumber; i++) {
      slides.push(<div key={i}></div>);
    }
    return slides;
  };

  handleDotClick = slide => {
    this.setState({
      currentSlide: slide
    });
  };

  dots = () => {
    let dots = [];
    for (let i = 1; i <= this.state.selectedNumber; i++) {
      dots.push(
        <span
          onClick={() => this.handleDotClick(i)}
          className="dots"
          key={i}
        ></span>
      );
    }
    return dots;
  };
  render() {
    return (
      <DashboardComponent
        handleDropdown={this.handleDropdown}
        handleFinish={this.handleFinish}
        currentSlide={this.state.currentSlide}
        showOptions={this.showOptions}
        handleLogout={this.handleLogout}
        carousel={this.carousel}
        dots={this.dots}
      />
    );
  }
}
export default withRouter(Dashboard);
