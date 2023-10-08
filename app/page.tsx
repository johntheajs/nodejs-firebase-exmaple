'use client';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase, { auth } from '../config/firebase';
import { GoogleAuthProvider } from 'firebase/auth';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';
import { redirect } from 'next/navigation';

export default function Home() {
	const [user, loading, error] = useAuthState(auth);

	if (user != null) {
		redirect('/user');
	}

	const uiconfig = {
		signInFlow: 'popup',
		signInSuccessUrl: '/user',
		signInOptions: [GoogleAuthProvider.PROVIDER_ID],
	};

	return (
		<main>
			{loading ? (
				'Loading...'
			) : (
				<FirebaseAuth uiConfig={uiconfig} firebaseAuth={auth} />
			)}
		</main>
	);
}
