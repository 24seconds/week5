import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const prodConfig = {
  apiKey: "AIzaSyAHSlAUquaPtfDzD-jE24ek_rKbPIrPrjw",
    authDomain: "eventkaist.firebaseapp.com",
    databaseURL: "https://eventkaist.firebaseio.com",
    projectId: "eventkaist",
    storageBucket: "eventkaist.appspot.com",
    messagingSenderId: "610102002890"
};

const devConfig = {
  apiKey: "AIzaSyAHSlAUquaPtfDzD-jE24ek_rKbPIrPrjw",
    authDomain: "eventkaist.firebaseapp.com",
    databaseURL: "https://eventkaist.firebaseio.com",
    projectId: "eventkaist",
    storageBucket: "eventkaist.appspot.com",
    messagingSenderId: "610102002890"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
