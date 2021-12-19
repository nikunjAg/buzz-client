import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./WritePost.module.css";
import Card from "../UI/Card/Card";
import Avatar from "../UI/Avatar/Avatar";
import Spinner from "../UI/Spinner/Spinner";
import ErrorMessage from "../UI/ErrorMessage/ErrorMessage";
import { savePost } from "../../store/actions/post.action";

const WritePost = (props) => {
	const captionInputRef = useRef();
	const [images, setImages] = useState([]);
	const [showError, setShowError] = useState(false);

	const profileImage = useSelector((state) => state.user.profileImage);
	const { loading, error } = useSelector((state) => state.post);
	const dispatch = useDispatch();

	useEffect(() => {
		if (error) {
			setShowError(true);
		}
	}, [error]);

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
			reader.readAsDataURL(file);

			reader.onloadend = () => {
				resolve(reader.result);
			};

			reader.onerror = () => reject("Something went Wrong!");
		});
	};

	const clearFormHandler = () => {
		captionInputRef.current.value = "";
		setImages([]);
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

			const post = {
				caption: caption,
				images: encodedFiles,
			};

			dispatch(savePost(post));
			clearFormHandler();
		} catch (err) {
			console.log("Error in Uploading Image", err);
		}
	};

	const errorClearHandler = () => {
		setShowError(false);
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
		<Card className={classes.card}>
			{loading && <Spinner />}
			{error && showError && (
				<ErrorMessage message={error} onTimeout={errorClearHandler} />
			)}
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
