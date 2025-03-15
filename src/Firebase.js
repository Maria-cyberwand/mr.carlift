import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAhGb29AbUprNIwr45ajUhbCltIEkERyWY",
  authDomain: "mrcarlift.firebaseapp.com",
  databaseURL:
    "https://mrcarlift-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mrcarlift",
  storageBucket: "mrcarlift.firebasestorage.app",
  messagingSenderId: "802903231029",
  appId: "1:802903231029:web:c344f569763cd62c69ff7c",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, push };
