const initialState = {
	userId: "",
	name: "",
	email: "",
	profilePic: "",
	coverImage: "",
	postsCount: undefined,
	isModerator: false,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default userReducer;
