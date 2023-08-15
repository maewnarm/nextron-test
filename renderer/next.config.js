const path = require("path");

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = "electron-renderer";
    }

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname), "styles"],
  },
};
