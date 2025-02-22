module.exports = {
  resolve: {
    fallback: {
      querystring: false,
    },
  },
  reactScriptsVersion: "react-scripts",
  style: {
    css: {
      loaderOptions: () => {
        return {
          url: false,
        };
      },
    },
  },
};