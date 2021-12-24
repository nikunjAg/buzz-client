import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import classes from "./EditProfile.module.css";
import Card from "../UI/Card/Card";
import Spinner from "../UI/Spinner/Spinner";
import { fetchProfile } from "../../store/actions/profile.action";
import useInput from "../../hooks/useInput";
import isNotEmpty from "../../util/isNotEmpty";

const EditProfile = (props) => {
	const { loading, profileData, error } = useSelector(
		(state) => state.profile
	);
	const dispatch = useDispatch();
	const { id: userId } = useParams();

	const [coverImage, setCoverImage] = useState(null);
	const [profileImage, setProfileImage] = useState(null);

	const coverImageRef = useRef();
	const profileImageRef = useRef();

	const {
		value: firstName,
		onChange: changeFirstName,
		setValue: setFirstName,
		onBlur: blurFirstName,
		isValid: firstNameIsValid,
		showError: firstNameShowError,
	} = useInput("", isNotEmpty);
	const {
		value: lastName,
		isValid: lastNameIsValid,
		showError: lastNameShowError,
		onChange: changeLastName,
		setValue: setLastName,
		onBlur: blurLastName,
	} = useInput("", isNotEmpty);
	const {
		value: designation,
		isValid: designationIsValid,
		showError: designationShowError,
		onChange: changeDesignation,
		setValue: setDesignation,
		onBlur: blurDesignation,
	} = useInput("");
	const {
		value: website,
		isValid: websiteIsValid,
		showError: websiteShowError,
		onChange: changeWebsite,
		setValue: setWebsite,
		onBlur: blurWebsite,
	} = useInput("");
	const {
		value: gender,
		isValid: genderIsValid,
		showError: genderShowError,
		onChange: changeGender,
		setValue: setGender,
		onBlur: blurGender,
	} = useInput("");
	const {
		value: birthday,
		isValid: birthdayIsValid,
		showError: birthdayShowError,
		onChange: changeBirthday,
		setValue: setBirthday,
		onBlur: blurBirthday,
	} = useInput("");
	const {
		value: city,
		isValid: cityIsValid,
		showError: cityShowError,
		onChange: changeCity,
		setValue: setCity,
		onBlur: blurCity,
	} = useInput("");
	const {
		value: state,
		isValid: stateIsValid,
		showError: stateShowError,
		onChange: changeState,
		setValue: setState,
		onBlur: blurState,
	} = useInput("");

	useEffect(() => {
		dispatch(fetchProfile(userId));
	}, [dispatch, userId]);

	// When data arrives set the data
	useEffect(() => {
		if (profileData) {
			setCoverImage(profileData.coverImage);
			setProfileImage(profileData.profileImage);
			setFirstName(profileData.name.split(" ")[0]);
			setLastName(profileData.name.split(" ")[1]);
			setDesignation(profileData.designation);
			setWebsite(profileData.website);
			setGender(profileData.gender);
			setBirthday(profileData.birthday);
			setCity(profileData.city);
			setState(profileData.website);
		}
	}, [
		profileData,
		setFirstName,
		setLastName,
		setDesignation,
		setWebsite,
		setGender,
		setBirthday,
		setCity,
		setState,
	]);

	const formIsValid =
		firstNameIsValid &&
		lastNameIsValid &&
		designationIsValid &&
		websiteIsValid &&
		genderIsValid &&
		birthdayIsValid &&
		cityIsValid &&
		stateIsValid;

	const coverImageChangeHandler = (event) => {
		const file = event.target.files[0];
		console.log(file);
		setCoverImage(file);
		coverImageRef.current.style.backgroundImage = URL.createObjectURL(file);
	};
	const profileImageChangeHandler = (event) => {
		const file = event.target.files[0];
		setProfileImage(file);
		coverImageRef.current.style.backgroundImage = URL.createObjectURL(file);
	};

	const clearFormHandler = () => {
		setCoverImage(null);
		setProfileImage(null);
		setFirstName("");
		setLastName("");
		setDesignation("");
		setWebsite("");
		setGender("");
		setBirthday("");
		setCity("");
		setState("");
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		console.log("Hey");
	};

	let content = (
		<Card className={classes.editProfileFallback}>
			<p>No such user found</p>
			<small>Try again later</small>
		</Card>
	);
	if (loading) {
		content = <Spinner />;
	}

	if (error) {
		content = <p>{error}</p>;
	}

	if (profileData) {
		content = (
			<form onSubmit={formSubmitHandler}>
				<div className={classes.imagePicker}>
					<label
						htmlFor="coverImage"
						className={`${classes.previewImage} ${classes.coverImage}`}
					>
						<div alt="Cover" ref={coverImageRef}></div>
						<span className="material-icons-outlined">
							add_a_photo
						</span>
					</label>
					<input
						type="file"
						id="coverImage"
						onChange={coverImageChangeHandler}
					/>
				</div>
				<div className={classes.imagePicker}>
					<label
						htmlFor="profileImage"
						className={`${classes.previewImage} ${classes.profileImage}`}
					>
						<div alt="Profile" ref={profileImageRef}></div>
						<span className="material-icons-outlined">
							add_a_photo
						</span>
					</label>
					<input
						type="file"
						id="profileImage"
						onChange={profileImageChangeHandler}
					/>
				</div>

				<div className={classes.row}>
					<div
						className={`${classes.formInput} ${
							firstNameShowError ? classes.error : ""
						}`}
					>
						<label htmlFor="firstname">First Name</label>
						<input
							type="text"
							placeholder="First name"
							name="firstname"
							id="firstname"
							value={firstName}
							onChange={changeFirstName}
							onBlur={blurFirstName}
						/>
					</div>
					<div
						className={`${classes.formInput} ${
							lastNameShowError ? classes.error : ""
						}`}
					>
						<label htmlFor="lastname">Last Name</label>
						<input
							type="text"
							placeholder="Last name"
							id="firstname"
							name="firstname"
							value={lastName}
							onChange={changeLastName}
							onBlur={blurLastName}
						/>
					</div>
				</div>
				<div className={classes.row}>
					<div
						className={`${classes.formInput} ${
							designationShowError ? classes.error : ""
						}`}
					>
						<label htmlFor="designation">Designation</label>
						<select
							name="designation"
							value={designation}
							onChange={changeDesignation}
							onBlur={blurDesignation}
							id="designation"
						>
							<option value="Founder">Founder</option>
							<option value="Co-founder">Co-founder</option>
							<option value="Employee">Employee</option>
						</select>
					</div>
					<div
						className={`${classes.formInput} ${
							websiteShowError ? classes.error : ""
						}`}
					>
						<label htmlFor="website">Website</label>
						<input
							type="text"
							placeholder="Website"
							name="website"
							id="website"
							value={website}
							onChange={changeWebsite}
							onBlur={blurWebsite}
						/>
					</div>
				</div>
				<div className={classes.row}>
					<div
						className={`${classes.formInput} ${
							genderShowError ? classes.error : ""
						}`}
					>
						<label htmlFor="gender">Gender</label>
						<select
							name="gender"
							id="gender"
							value={gender}
							onChange={changeGender}
							onBlur={blurGender}
						>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
						</select>
					</div>
					<div
						className={`${classes.formInput} ${
							birthdayShowError ? classes.error : ""
						}`}
					>
						<label htmlFor="birthdate">Birthday</label>
						<input
							type="date"
							placeholder="BirthDate"
							name="birthdate"
							id="birthdate"
							value={birthday}
							onChange={changeBirthday}
							onBlur={blurBirthday}
						/>
					</div>
				</div>
				<div className={classes.row}>
					<div
						className={`${classes.formInput} ${
							cityShowError ? classes.error : ""
						}`}
					>
						<label htmlFor="city">City</label>
						<input
							type="text"
							placeholder="City"
							name="city"
							id="city"
							value={city}
							onChange={changeCity}
							onBlur={blurCity}
						/>
					</div>
					<div
						className={`${classes.formInput} ${
							stateShowError ? classes.error : ""
						}`}
					>
						<label htmlFor="state">State</label>
						<input
							type="text"
							placeholder="State"
							name="state"
							id="state"
							value={state}
							onChange={changeState}
							onBlur={blurState}
						/>
					</div>
				</div>
				<div className={classes.formActions}>
					<button
						className={classes.filled}
						type="submit"
						disabled={!formIsValid}
					>
						Save
					</button>
					<button
						className={classes.outlined}
						type="button"
						onClick={clearFormHandler}
					>
						Reset All
					</button>
				</div>
			</form>
		);
	}

	return <Card className={classes.editProfile}>{content}</Card>;
};

export default EditProfile;
