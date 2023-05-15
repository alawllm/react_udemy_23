import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDrQF-lnwWtkb_7um39Q-kDmxoX72Kwj04",
    authDomain: "cpstn-a4767.firebaseapp.com",
    projectId: "cpstn-a4767",
    storageBucket: "cpstn-a4767.appspot.com",
    messagingSenderId: "939051673558",
    appId: "1:939051673558:web:95b1ef54a4d6ac6b7fe677"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//points directly to the database
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists())

    //if the user does not exist, set the doc with this object
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(
                userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating the user', error)
        }
    }
    return userDocRef;
}