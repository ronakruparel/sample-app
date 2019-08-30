import React from "react";
import { withRouter } from "react-router-dom";
class Dashboard extends React.Component {
  state = {
    selectedNumber: 1
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
      selectedNumber: Number(e.target.value)
    });
  };

  handleFinish = () => {
    let data = localStorage.getItem("selected");
    alert(`You clicked ${data}`);
  };
  render() {
    return (
      <div>
        <div>
          <select onChange={this.handleDropdown}>{this.showOptions()}</select>
        </div>
        <div>
          <h1>{this.state.selectedNumber}</h1>
        </div>
        <button onClick={this.handleFinish}>Finish</button>
      </div>
    );
  }
}
export default withRouter(Dashboard);
