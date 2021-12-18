import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

import classes from "./WritePost.module.css";
import Card from "../UI/Card/Card";
import Avatar from "../UI/Avatar/Avatar";

const WritePost = (props) => {
	const captionInputRef = useRef();
	const [images, setImages] = useState([]);

	const profileImage = useSelector((state) => state.user.profileImage);

	const deleteImageHandler = (index) => {
		setImages((oldImages) => [
			...oldImages.slice(0, index),
			...oldImages.slice(index + 1),
		]);
	};

	const fileChangedHandler = (event) => {
		const { files } = event.target;
		setImages((oldImages) => [...files, ...oldImages].slice(0, 4));
	};

	const getBase64EncodedImage = (file) => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(images[0]);

			reader.onloadend = () => {
				resolve(reader.result);
			};

			reader.onerror = () => reject("Something went Wrong!");
		});
	};

	const submitPostHandler = async (event) => {
		console.log("Submitting");
		event.preventDefault();

		if (!images && captionInputRef.current.value.trim().length === 0)
			return;

		try {
			const filePathsPromises = [];
			images.forEach((image) =>
				filePathsPromises.push(getBase64EncodedImage(image))
			);
			const encodedFiles = await Promise.all(filePathsPromises);
			const caption = captionInputRef.current.value;

			/* axios.post('/posts', { caption, images: encodedFiles }, {
				withCredentials: true
			}) */
		} catch (err) {
			console.log("Error in Uploading Image", err);
		}
	};

	let imagesPreview;
	if (images.length > 0) {
		imagesPreview = (
			<div className={classes.previewImages}>
				{images.map((img, index) => (
					<div key={index} className={classes.preview}>
						<span
							className={`material-icons ${classes.deleteImage}`}
							onClick={() => deleteImageHandler(index)}
						>
							close
						</span>
						<img src={URL.createObjectURL(img)} alt="Post " />
					</div>
				))}
			</div>
		);
	}

	return (
		<Card>
			<div className={classes.writePost}>
				<Avatar
					className={classes.avatar}
					src={profileImage}
					alt="Profile Image"
				/>
				<form className={classes.postForm} onSubmit={submitPostHandler}>
					<input
						type="text"
						name="search"
						className={classes.postCaption}
						placeholder="Start a post..."
						ref={captionInputRef}
					/>
					<button type="submit" className={classes.submitPost}>
						<span className="material-icons-round">send</span>
					</button>
					<div className={classes.imagePicker}>
						<label htmlFor="image-picker">
							<span className="material-icons-outlined">
								photo_camera
							</span>
							Photos / Video
						</label>
						<input
							type="file"
							multiple
							name="post-image"
							id="image-picker"
							onChange={fileChangedHandler}
						/>
					</div>
				</form>
			</div>
			{imagesPreview}
		</Card>
	);
};

export default WritePost;
