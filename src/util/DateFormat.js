const formatDate = (dateStr) => {
	const date = new Date(dateStr || null);
	return date.toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
};

export default formatDate;
