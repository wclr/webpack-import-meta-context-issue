import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config = {
  mode: "production",
  entry: "./app.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "template.js",
    }),
  ],
};

webpack(config, (err, stats) => {
  if (err) {
    console.error(err.toString());
  } else {
    console.log(stats.toString({ colors: true }));
  }
});
