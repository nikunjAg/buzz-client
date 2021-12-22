import { compose, createStore } from "redux";

import reducer from "./reducers";
import middlewares from "./middlewares";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(middlewares));

export default store;
