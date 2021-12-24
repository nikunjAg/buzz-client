import { useState } from "react";

const useInput = (defaultValue, validate) => {
	const [value, setValue] = useState(defaultValue);
	const [touched, setTouched] = useState(false);
	const isValid = validate ? validate(value) : true;
	const showError = !isValid && touched;

	const onChange = (event) => {
		setValue(event.target.value);
	};

	const onBlur = () => {
		setTouched(true);
	};

	return {
		value,
		isValid,
		showError,
		onChange,
		setValue,
		onBlur,
	};
};

export default useInput;
