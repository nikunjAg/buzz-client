import React, { useEffect, useRef, useState } from "react";

import classes from "./EditProfile.module.css";
import Card from "../UI/Card/Card";

const EditProfile = (props) => {
	const [coverImage, setCoverImage] = useState(null);
	const [profileImage, setProfileImage] = useState(null);

	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const designationRef = useRef();
	const websiteRef = useRef();
	const genderRef = useRef();
	const birthdateRef = useRef();
	const cityRef = useRef();
	const stateRef = useRef();

	useEffect(() => {
		// fetchUserProfileData();
	}, []);

	const coverImageChangeHandler = (event) => {
		const file = event.target.files[0];
		setCoverImage(file);
	};
	const profileImageChangeHandler = (event) => {
		const file = event.target.files[0];
		setProfileImage(file);
	};

	const clearFormHandler = () => {
		setCoverImage(null);
		setProfileImage(null);
		firstNameRef.current.value = "";
		lastNameRef.current.value = "";
		designationRef.current.value = "";
		websiteRef.current.value = "";
		genderRef.current.value = "";
		birthdateRef.current.value = "";
		cityRef.current.value = "";
		stateRef.current.value = "";
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		console.log("Hey");

		console.log(firstNameRef.current.value);
		console.log(lastNameRef.current.value);
		console.log(designationRef.current.value);
		console.log(websiteRef.current.value);
		console.log(genderRef.current.value);
		console.log(birthdateRef.current.value);
		console.log(cityRef.current.value);
		console.log(stateRef.current.value);
	};

	return (
		<Card className={classes.editProfile}>
			<form onSubmit={formSubmitHandler}>
				<div className={classes.imagePicker}>
					<label
						htmlFor="coverImage"
						className={`${classes.previewImage} ${classes.coverImage}`}
					>
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
					<div className={classes.formInput}>
						<label htmlFor="firstname">First Name</label>
						<input
							type="text"
							placeholder="First name"
							name="firstname"
							id="firstname"
							ref={firstNameRef}
						/>
					</div>
					<div className={classes.formInput}>
						<label htmlFor="lastname">Last Name</label>
						<input
							type="text"
							placeholder="Last name"
							id="firstname"
							name="firstname"
							ref={lastNameRef}
						/>
					</div>
				</div>
				<div className={classes.row}>
					<div className={classes.formInput}>
						<label htmlFor="designation">Designation</label>
						<select
							name="designation"
							ref={designationRef}
							id="designation"
						>
							<option value="Founder">Founder</option>
							<option value="Co-founder">Co-founder</option>
							<option value="Employee">Employee</option>
						</select>
					</div>
					<div className={classes.formInput}>
						<label htmlFor="website">Website</label>
						<input
							type="text"
							placeholder="Website"
							name="website"
							id="website"
							ref={websiteRef}
						/>
					</div>
				</div>
				<div className={classes.row}>
					<div className={classes.formInput}>
						<label htmlFor="gender">Gender</label>
						<select name="gender" id="gender" ref={genderRef}>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
						</select>
					</div>
					<div className={classes.formInput}>
						<label htmlFor="birthdate">Birthday</label>
						<input
							type="date"
							placeholder="BirthDate"
							name="birthdate"
							id="birthdate"
							ref={birthdateRef}
						/>
					</div>
				</div>
				<div className={classes.row}>
					<div className={classes.formInput}>
						<label htmlFor="city">City</label>
						<input
							type="text"
							placeholder="City"
							name="city"
							id="city"
							ref={cityRef}
						/>
					</div>
					<div className={classes.formInput}>
						<label htmlFor="state">State</label>
						<input
							type="text"
							placeholder="State"
							name="state"
							id="state"
							ref={stateRef}
						/>
					</div>
				</div>
				<div className={classes.formActions}>
					<button className={classes.filled} type="submit">
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
		</Card>
	);
};

export default EditProfile;
