import { combineReducers } from "redux";

import authReducer from "./auth.reducer";
import userReducer from "./user.reducer";
import notificationsReducer from "./notifications.reducer";
import postReducer from "./post.reducer";
import feedReducer from "./feed.reducer";
import toastsReducer from "./toast.reducer";
import profileReducer from "./profile.reducers";

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	notifications: notificationsReducer,
	post: postReducer,
	feed: feedReducer,
	toasts: toastsReducer,
	profile: profileReducer,
});

export default rootReducer;
