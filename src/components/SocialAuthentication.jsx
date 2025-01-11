import {
	browserSessionPersistence,
	getAuth,
	getRedirectResult,
	GoogleAuthProvider,
	OAuthProvider,
	setPersistence,
	signInWithPopup,
	signInWithRedirect,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { FaApple, FaGoogle } from "react-icons/fa";
import { auth, db } from "../utils/firebase";
import { doc, getDoc } from "firebase/firestore";

const SocialAuthentication = ({
	formData,
	setFormData,
	requiredFields,
	isSocialSignIn,
	setIsSocialSignIn,
}) => {
	const [authProvider, setAuthProvider] = useState("");

	// Function to handle Google and Apple sign in
	const handleAuthSignIn = async () => {
		const provider =
			authProvider === "google"
				? new GoogleAuthProvider()
				: new OAuthProvider("apple.com");

		// Configure auth provider
		provider.setCustomParameters({
			prompt: "select_account",
			display: "popup",
		});

		try {
			const auth = getAuth();
			// Set persistence to session
			await setPersistence(auth, browserSessionPersistence);
			const result = await signInWithPopup(auth, provider);
			const user = result.user;

			// Check if user already exists in firestore
			const userDoc = await getDoc(doc(db, "users", user.uid));
			if (userDoc.exists()) {
				// Check for missing data if user exists
				const userData = userDoc.data();
				const missingFields = checkForMissingFields(userData);

				if (missingFields.length > 0) {
					setFormData({
						...formData,
						firstName: user.displayName ? user.displayName.split(" ")[0] : "",
						lastName: user.displayName ? user.displayName.split(" ")[1] : "",
						email: user.email || "",
						...missingFields.reduce(
							(acc, field) => ({ ...acc, [field]: "" }),
							{}
						),
					});
					setIsSocialSignIn(true);
					alert(
						`Please fill in the following fields: ${missingFields.join(", ")}`
					);
				} else {
					alert("You are already signed up, please sign in");
				}
			} else {
				// Set form data with Google user info
				setFormData({
					...formData,
					firstName: user.displayName ? user.displayName.split(" ")[0] : "",
					lastName: user.displayName ? user.displayName.split(" ")[1] : "",
					email: user.email || "",
				});

				// Check for missing field
				const missingFields = checkForMissingFields({
					firstName: user.displayName ? user.displayName.split(" ")[0] : "",
					lastName: user.displayName ? user.displayName.split(" ")[1] : "",
					email: user.email || "",
				});

				if (missingFields.length > 0) {
					alert(
						`Please fill in the following fields: ${missingFields.join(", ")}`
					);
				}
				setIsSocialSignIn(true);
			}
		} catch (error) {
			alert(`Error signing in with ${authProvider}: ` + error.message);
		}
	};

	const checkForMissingFields = (data) => {
		const socialAuthFields = requiredFields.filter(
			(field) => field !== "password" && field !== "confirmPassword"
		);
		return socialAuthFields.filter((field) => !data[field]);
	};
	return (
		<div>
			<div className="flex justify-center sm:gap-12 gap-4">
				<button
					className="flex p-2 border-2 text-sm sm:text-base"
					onClick={() => {
						setAuthProvider("google");
						handleAuthSignIn();
					}}
				>
					<FaGoogle className="place-self-center mr-2 size-6" />
					Sign up with Google
				</button>
				<button
					className="flex p-2 border-2 text-sm sm:text-base"
					onClick={() => {
						setAuthProvider("apple");
						handleAuthSignIn();
					}}
				>
					<FaApple className="place-self-center mr-2 size-6" />
					Sign up with Apple
				</button>
			</div>
			<div className="flex gap-4 justify-between mt-6 mb-6">
				<hr className="place-self-center w-full" />
				<p>OR</p>
				<hr className="place-self-center w-full" />
			</div>
		</div>
	);
};

export default SocialAuthentication;
