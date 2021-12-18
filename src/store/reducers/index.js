import { combineReducers } from "redux";

import authReducer from "./auth.reducer";
import userReducer from "./user.reducer";
import notificationsReducer from "./notifications.reducer";

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	notifications: notificationsReducer,
});

export default rootReducer;
