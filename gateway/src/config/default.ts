require("dotenv").config();

const config = {
  development: {
    appname: "Gateway [development]",
  },
  test: {
    appname: "Gateway [test]",
  },
  production: {
    appname: "Gateway",
  },
};

export default config;
