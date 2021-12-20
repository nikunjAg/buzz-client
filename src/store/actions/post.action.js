import axios from "../../axios";
import { addToast, errorHandler } from "./toast.action";

export const SAVE_POST_STARTED = "SAVE_POST_STARTED";
export const SAVE_POST_SUCCESS = "SAVE_POST_SUCCESS";
export const SAVE_POST_FAILED = "SAVE_POST_FAILED";

const savePostStarted = () => {
	return { type: SAVE_POST_STARTED };
};

const savePostSuccess = (post) => {
	return { type: SAVE_POST_SUCCESS, post };
};

/* const savePostFailed = (errMessage) => {
	return { type: SAVE_POST_FAILED, error_message: errMessage };
}; */

export const savePost = (postData) => {
	return async (dispatch) => {
		try {
			dispatch(savePostStarted());
			const post = {
				content: postData.caption,
				images: postData.images,
			};

			const { data } = await axios.post("/posts", post, {
				withCredentials: true,
			});

			dispatch(savePostSuccess(data.post));
			dispatch(addToast({ type: "success", error: data.message }));
		} catch (err) {
			dispatch(errorHandler(err));
		}
	};
};
