import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

interface FirebaseConfig {
	apiKey: string;
	authDomain: string;
	projectId: string;
	storageBucket: string;
	messagingSenderId: string;
	appId: string;
}

const firebaseConfig: FirebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH || '',
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
export const auth = getAuth(firebase);
export const firestore = getFirestore(firebase);
