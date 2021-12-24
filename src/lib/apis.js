import axios from "../axios";

export const fetchUsers = async () => {
	const { data } = await axios.get(`/users`);
	return data.users;
};

export const fetchUserDetails = async (userId) => {
	const { data } = await axios.get(`/users/${userId}`);
	return data.user;
};

export const fetchFriends = async (userId) => {
	const { data } = await axios.get(`/users/${userId}/suggestions`);

	return data.suggestions;
};

export const fetchSuggestions = async (userId) => {
	const { data } = await axios.get(`/users/${userId}/suggestions`);

	return data.suggestions;
};
