'use client';
import { auth, firestore } from '../../../config/firebase';
import { signOut } from 'firebase/auth';
import { redirect, useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { User } from '../../types/User';
import { collection, doc, getDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import Image from 'next/image';
const SideBarFooter = () => {
	const [user, loading, error] = useAuthState(auth);
	const router = useRouter();

	const currUser: User | null | undefined = user;

	useEffect(() => {
		if (currUser?.uid) {
			const docRef = doc(collection(firestore, 'users'), currUser.uid);
			getDoc(docRef).then((docSnap) => {
				console.log(currUser.uid);

				if (!docSnap.exists()) {
					router.push('/user/completeRegistration');
				}
			});
		}
	}, [currUser, router]);

	if (!loading && !user) {
		router.push('/');
	}
	if (loading) {
		return 'Loading...';
	}

	return (
		<>
			{currUser?.photoURL ? (
				<div className="flex flex-row p-1  justify-evenly gap-2">
					<Image
						className="rounded"
						height={50}
						width={50}
						src={currUser.photoURL}
						alt="profile"
					/>
					<div>
						<h1>{currUser.displayName}</h1>
						<button
							className="flex-1 flex flex-row gap-2 ml-3 whitespace-nowrap"
							onClick={() => signOut(auth)}
						>
							Log out
							<svg
								className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
									clipRule="evenodd"
								></path>
							</svg>
						</button>
					</div>
				</div>
			) : (
				'loading'
			)}
		</>
	);
};

export default SideBarFooter;
