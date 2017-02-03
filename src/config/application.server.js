import addApiEndpoints from "../lib/addApiEndpoints";

export default {
  protocol: "http",
  host: "0.0.0.0",
  port: 8888,
  assetPort: 8880,
  expressConfigurator: addApiEndpoints
};

