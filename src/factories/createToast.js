import { v4 as uuid } from "uuid";

const defaultOptions = {
	type: "error",
	message: "Something went wrong",
};

export default function createToast(options) {
	return {
		...defaultOptions,
		...options,
		id: uuid(),
	};
}
