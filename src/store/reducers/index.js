import { combineReducers } from "redux";

import authReducer from "./auth.reducer";
import userReducer from "./user.reducer";
import notificationsReducer from "./notifications.reducer";
import postReducer from "./post.reducer";
import feedReducer from "./feed.reducer";

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	notifications: notificationsReducer,
	post: postReducer,
	feed: feedReducer,
});

export default rootReducer;
