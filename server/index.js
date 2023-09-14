//server entry point
require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: ["@babel/preset-react"],
});

require("./server");
