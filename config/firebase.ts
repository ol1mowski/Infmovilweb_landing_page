import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKL386MBAESQWpS2-vWYyEZwnIj39LpDQ",
  authDomain: "infmovilweb-eba89.firebaseapp.com",
  projectId: "infmovilweb-eba89",
  storageBucket: "infmovilweb-eba89.appspot.com",
  messagingSenderId: "1016114489383",
  appId: "1:1016114489383:web:45a5fa62dca3e304368602",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
