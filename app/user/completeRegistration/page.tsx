'use client';
import 'daisyui/dist/full.css'; // Import daisyUI styles
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from '@/config/firebase';
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { User } from '@/app/types/User';

const CompleteRegistration = () => {
	const [user, l, e] = useAuthState(auth);

	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [formData, setFormData] = useState({
		uid: '',
		displayName: '',
		email: '',
		photoURL: '',
		leetcodeUsername: '',
		gfgUsername: '',
		language: '',
		regNo: '',
	});

	useEffect(() => {
		if (user) {
			const docRef = doc(collection(firestore, 'users'), user.uid);
			let currUser: User = user;
			getDoc(docRef).then((docSnap) => {
				if (docSnap.exists()) {
					currUser = { ...user, ...docSnap.data() };

					setFormData((prev) => ({
						...prev,
						uid: currUser.uid || '',
						displayName: currUser.displayName || '',
						email: currUser.email || '',
						photoURL: currUser.photoURL || '',
						leetcodeUsername: currUser.leetcodeUsername || '',
						gfgUsername: currUser.gfgUsername || '',
						language: currUser.language || '',
						regNo: currUser.regNo || '',
					}));
				}
			});
			setFormData((prev) => ({
				...prev,
				uid: currUser.uid || '',
				displayName: currUser.displayName || '',
				email: currUser.email || '',
				photoURL: currUser.photoURL || '',
				leetcodeUsername: currUser.leetcodeUsername || '',
				gfgUsername: currUser.gfgUsername || '',
				language: currUser.language || '',
				regNo: currUser.regNo || '',
			}));
		}
	}, [user]);

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

	if (user) {
		return (
			<div className="p-8 bg-white rounded-lg ">
				<h2 className="text-3xl font-semibold mb-6">
					Complete Your Registration
				</h2>
				<form
					onSubmit={handleSubmit}
					className="grid grid-cols-1 md:grid-cols-2 gap-6"
				>
					<div className="space-y-2">
						<label htmlFor="displayName" className="block text-sm font-medium">
							Display Name:
						</label>
						<input
							type="text"
							id="displayName"
							name="displayName"
							value={formData?.displayName || ''}
							onChange={handleChange}
							required
							className="w-full input input-bordered rounded shadow-sm focus:outline-none focus:ring focus:border-blue-500"
						/>
					</div>
					<div className="space-y-2">
						<label htmlFor="email" className="block text-sm font-medium">
							Email:
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData?.email || ''}
							onChange={handleChange}
							disabled={true}
							className="w-full input input-bordered rounded shadow-sm focus:outline-none focus:ring focus:border-blue-500"
						/>
					</div>
					<div className="space-y-2">
						<label
							htmlFor="leetcodeUsername"
							className="block text-sm font-medium"
						>
							LeetCode Username:
						</label>
						<input
							type="text"
							id="leetcodeUsername"
							name="leetcodeUsername"
							value={formData?.leetcodeUsername || ''}
							onChange={handleChange}
							required
							className="w-full input input-bordered rounded shadow-sm focus:outline-none focus:ring focus:border-blue-500"
						/>
					</div>
					<div className="space-y-2">
						<label htmlFor="gfgUsername" className="block text-sm font-medium">
							GeeksforGeeks Username:
						</label>
						<input
							type="text"
							id="gfgUsername"
							name="gfgUsername"
							value={formData?.gfgUsername || ''}
							onChange={handleChange}
							className="w-full input input-bordered rounded shadow-sm focus:outline-none focus:ring focus:border-blue-500"
						/>
					</div>
					<div className="space-y-2">
						<label htmlFor="language" className="block text-sm font-medium">
							Preferred Programming Language:
						</label>
						<input
							type="text"
							id="language"
							name="language"
							value={formData?.language || ''}
							onChange={handleChange}
							className="w-full input input-bordered rounded shadow-sm focus:outline-none focus:ring focus:border-blue-500"
						/>
					</div>
					<div className="space-y-2">
						<label htmlFor="regNo" className="block text-sm font-medium">
							Registration Number:
						</label>
						<input
							type="text"
							id="regNo"
							name="regNo"
							value={formData?.regNo || ''}
							onChange={handleChange}
							className="w-full input input-bordered rounded shadow-sm focus:outline-none focus:ring focus:border-blue-500"
						/>
					</div>
					<div className="md:col-span-2">
						<button
							type="submit"
							disabled={loading}
							className="w-full  btn btn-primary"
						>
							{loading ? 'Submitting...' : 'Submit'}
						</button>
					</div>
				</form>
				{success && (
					<p className="mt-4 text-green-500">Profile updated successfully!</p>
				)}
			</div>
		);
	}
	return <div>Loading...</div>;
};

export default CompleteRegistration;
