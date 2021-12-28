export const getRequestErrorMessage = (error) => {
	if (error.response) {
		return error.response.data.message;
	} else if (error.request) {
		return "Unable to get response";
	} else {
		return "Unable to send request, Please check your connection";
	}
};
