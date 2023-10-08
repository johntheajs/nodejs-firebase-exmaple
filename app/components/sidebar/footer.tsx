'use client';
import { auth, firestore } from '../../../config/firebase';
import { signOut } from 'firebase/auth';
import { redirect, useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { User } from '../../types/User';
import { collection, doc, getDoc } from 'firebase/firestore';
import { useEffect } from 'react';
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
		<div className="flex">
			{currUser?.displayName}
			<button className="p-2 bg-blue-600" onClick={() => signOut(auth)}>
				Log out
			</button>
		</div>
	);
};

export default SideBarFooter;
