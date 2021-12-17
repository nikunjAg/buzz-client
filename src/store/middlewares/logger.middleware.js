const logger = (store) => (next) => (action) => {
	console.log(`ACTION DISPATCHED: ${action.type}`);
	next(action);
};

export default logger;
