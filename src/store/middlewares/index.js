import { applyMiddleware } from "redux";

import asyncMdw from "./async.middleware";
import loggerMdw from "./logger.middleware";

const mdw = applyMiddleware(asyncMdw, loggerMdw);
export default mdw;
