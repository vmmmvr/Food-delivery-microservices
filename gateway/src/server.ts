import app from "./app/app";
import log from "./utils/logger";
const config =
  require("./config/default")["default"][process.env.NODE_ENV || "development"];

app.listen("8000", () => {
  log.info(`${config.appname} is running on PORT 8000`);
});
