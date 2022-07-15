/**
 * Author: Udit Gandhi
 */
import "dotenv/config";
import "module-alias/register";
import validateEnv from "./utils/validateEnv";
import App from "./app";
import OrderController from "./resources/order/order.controller";
import DashboardController from "./resources/dashboard/dashboard.controller";
import UsersController from "./resources/profile/users.controller";
import CommentController from "./resources/forum/comment.controller";
import RegisterController from "./resources/register/register.controller";
import YearlyAnalyticsController from "./resources/yearlyanalytics/analytics.controller";
import HalfYearlyAnalyticsController from "./resources/halfyearlyanalytics/analytics.controller";
import StockFinancialsController from "./resources/stockfinancials/analytics.controller";
const { PORT, MONGODB_URL } = require("./config/config");

validateEnv();
const app = new App(
  [
    new DashboardController(),
    new UsersController(),
    new OrderController(),
    new CommentController(),
    new RegisterController(),
    new YearlyAnalyticsController(),
    new HalfYearlyAnalyticsController(),
    new StockFinancialsController(),
  ],
  Number(PORT),
  MONGODB_URL
);
app.listen();
