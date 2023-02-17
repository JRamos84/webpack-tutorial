const path = require("path");
const rulesForjavascript = {
  test: /\.js$/,
  loader: "babel-loader",
  options: {
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
    ],
  },
};

const rules = [rulesForjavascript];
module.exports = {
  output: {
    path: path.resolve(__dirname, "build"),
  },
  module: {rules},
};
