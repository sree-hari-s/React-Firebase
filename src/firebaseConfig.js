

import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCQdq9V5QXhH-NLSDGqk1vIgzsKWjLq2E",
  authDomain: "newsarti-d9662.firebaseapp.com",
  databaseURL: "https://newsarti-d9662-default-rtdb.firebaseio.com",
  projectId: "newsarti-d9662",
  storageBucket: "newsarti-d9662.appspot.com",
  messagingSenderId: "764411658158",
  appId: "1:764411658158:web:7c6034f3d8c0ccedd0923f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

