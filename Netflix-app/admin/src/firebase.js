import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCfJGOEbujTJYb4IM9cjCpCX-iPbZReN34",
  authDomain: "my-netflix-2afff.firebaseapp.com",
  projectId: "my-netflix-2afff",
  storageBucket: "my-netflix-2afff.appspot.com",
  messagingSenderId: "892660832466",
  appId: "1:892660832466:web:cc3fc534b6c90abb4eb50b",
  measurementId: "G-E50FZPBLC6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
export default storage;