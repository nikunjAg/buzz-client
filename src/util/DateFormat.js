const formatDate = (dateStr) => {
	const date = new Date(dateStr || null);
	console.log(dateStr);
	return date.toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
};

export default formatDate;
