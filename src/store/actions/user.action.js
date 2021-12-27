export const USER_UPDATE = "USER_UPDATE";

export const updateUser = (user) => {
	return { type: USER_UPDATE, user };
};
