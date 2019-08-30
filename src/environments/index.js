const environments = {
  development: {
    USER_ID: "shaadi",
    PASSWORD: "123"
  }
};
export default environments[process.env.REACT_APP_ENV] ||
  environments[Object.keys(environments)[0]];
