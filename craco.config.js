const CracoLessPlugin = require("craco-less");
const TerserPlugin = require("terser-webpack-plugin");
const SentryWebpackPlugin = require("@sentry/webpack-plugin");

module.exports = {
  webpack: {
    devtool: "source-map",
    configure: {
      mode: process.env.NODE_ENV,
      optimization: {
        minimizer: [new TerserPlugin()],
      },
    },
    plugins: [
      // new SentryWebpackPlugin({
      //   org: "nnsaycc",
      //   project: "javascript-react",
      //   // Specify the directory containing build artifacts
      //   include: "./build",
      //   // Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
      //   // and needs the `project:releases` and `org:read` scopes
      //   authToken: process.env.SENTRY_AUTH_TOKEN,
      //   // Optionally uncomment the line below to override automatic release name detection
      //   release: "demo",
      // }),
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
