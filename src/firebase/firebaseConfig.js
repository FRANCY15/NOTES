import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
//las llaves se deben ocultar de los usuarios, unicamcente el serv que ejec el códigodebe tener acceso a ellas.
const firebaseConfig = {
  apiKey: "AIzaSyCsYqPqhhHC5zCZJPiwRDKxALPtKEfb9LY",
  authDomain: "misnotas-con-react.firebaseapp.com",
  databaseURL: "https://misnotas-con-react-default-rtdb.firebaseio.com",
  projectId: "misnotas-con-react",
  storageBucket: "misnotas-con-react.appspot.com",
  messagingSenderId: "62709441202",
  appId: "1:62709441202:web:72d63b6bdf155026a31fab"
  // apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  // appId: process.env.REACT_APP_FIREBASE_APPID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export const googlePopUp = () => signInWithPopup(auth, provider);

export const createAcount = () => createUserWithEmailAndPassword(auth);

export const singIn = () => {
  signInWithEmailAndPassword(auth)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

}

export const logOut = () => {
  signOut(auth)
  signOut(auth).then(() => {
    console.log('se cerró la sesión')
    // Sign-out successful.
  }).catch((error) => {
    // An error happened
    console.error(error)
  });
}
  

