import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOdZ1KLdy2vP-P5kBSTpsxu2QW4J6cPF0",
  authDomain: "shop-42bbf.firebaseapp.com",
  projectId: "shop-42bbf",
  storageBucket: "shop-42bbf.appspot.com",
  messagingSenderId: "46594786237",
  appId: "1:46594786237:web:826958d77740d9f22c08d4",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglPopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  // * Here we make a reference to our doc
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (e) {
      console.log(e);
    }
  }
  return userDocRef;
};

export const createUserAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthWithEmailAndPassword = async (email, password) =>
  await signInWithEmailAndPassword(auth, email, password);
