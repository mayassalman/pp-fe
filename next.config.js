const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["styled-components"]);

// next.config.js
module.exports = withPlugins([[withTM]], {
  compiler: {
    styledComponents: true,
  },
  // ...
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/videos/",
          outputPath: "static/videos/",
          name: "[name].[hash].[ext]",
          esModule: false,
        },
      },
    });
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/files",
            outputPath: `${isServer ? "../" : ""}static/files`,
            name: "[name].[ext]",
          },
        },
      ],
    });
    return config;
  },
});
