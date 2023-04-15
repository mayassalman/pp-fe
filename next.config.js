const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["styled-components"]);

// next.config.js
module.exports = withPlugins([[withTM]], {
  // ...
  webpack(config) {
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
            // Output path for the PDF file
            outputPath: "static/media",
            // Public URL for the PDF file
            publicPath: "/_next/static/media",
            // Use the file name as the URL hash to avoid caching issues
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });
    return config;
  },
});
