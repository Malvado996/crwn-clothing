import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCTxR9VTrgcR05t75SoqvtQD2bFMcSHmnc",
    authDomain: "crwnclthng.firebaseapp.com",
    projectId: "crwnclthng",
    storageBucket: "crwnclthng.appspot.com",
    messagingSenderId: "224771303985",
    appId: "1:224771303985:web:497ac2fa0e94bfc0310310",
    measurementId: "G-3WLME25951"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;