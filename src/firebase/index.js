import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPlMos2fyzG0ZwWsTUisViMFIpwGlYUz4",
  authDomain: "vue-blog-e6d63.firebaseapp.com",
  projectId: "vue-blog-e6d63",
  storageBucket: "vue-blog-e6d63.appspot.com",
  messagingSenderId: "1078010803565",
  appId: "1:1078010803565:web:7f5c80e5388b842996d664",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
