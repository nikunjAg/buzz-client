const formatDate = (dateVal) => {
	const date = new Date(dateVal.toString() || null);
	return date.toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
};

export default formatDate;
