'use client';
import { User } from '@/app/types/User';
import { auth, firestore } from '@/config/firebase';
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const CompleteRegistration = () => {
	const [user, l, e] = useAuthState(auth);

	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [formData, setFormData] = useState({
		uid: '',
		displayName: '',
		email: '',
	});

	useEffect(() => {
		if (user) {
			const docRef = doc(collection(firestore, 'users'), user.uid);
			let currUser: User = user;
			getDoc(docRef).then((docSnap) => {
				if (docSnap.exists()) {
					currUser = { ...user, ...docSnap.data() };

					setFormData({
						uid: currUser.uid || '',
						displayName: currUser.displayName || '',
						email: currUser.email || '',
					});
				}
			});
			setFormData({
				uid: currUser.uid || '',
				displayName: currUser.displayName || '',
				email: currUser.email || '',
			});
		}
	}, [user]);

	if (user) {
		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;
			setFormData((prevData) => ({ ...prevData, [name]: value }));
		};

		const handleSubmit = async (e: React.FormEvent) => {
			e.preventDefault();
			setLoading(true);

			try {
				await setDoc(
					doc(collection(firestore, 'users'), formData.uid),
					formData,
					{
						merge: true,
					},
				);
				setSuccess(true);
			} catch (error) {
				console.error('Error updating user data:', error);
			}

			setLoading(false);
		};

		return (
			<div>
				<h2>Complete Your Registration</h2>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="displayName">Display Name:</label>
						<input
							type="text"
							id="displayName"
							name="displayName"
							value={formData?.displayName || ''}
							onChange={handleChange}
							required
							contentEditable={true}
						/>
					</div>
					<div>
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData?.email || ''}
							onChange={handleChange}
							disabled={true}
						/>
					</div>

					<button type="submit" disabled={loading}>
						{loading ? 'Submitting...' : 'Submit'}
					</button>
				</form>
				{success && <p>Profile updated successfully!</p>}
			</div>
		);
	}
	return <div>Loading...</div>;
};

export default CompleteRegistration;
