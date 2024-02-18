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
  apiKey: "AIzaSyCtmuwlRJdj9wdXReW9OiFfgI9BbTN5VSk",
  authDomain: "cp-stats-20608.firebaseapp.com",
  projectId: "cp-stats-20608",
  storageBucket: "cp-stats-20608.appspot.com",
  messagingSenderId: "449445469404",
  appId: "1:449445469404:web:2a7376284f4cdf480a6819",
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
export const auth = getAuth(firebase);
export const firestore = getFirestore(firebase);
