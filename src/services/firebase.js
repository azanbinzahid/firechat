import firebase from "firebase";
import { firebaseConfig } from "./config";

const config = {
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  databaseURL: firebaseConfig.databaseURL,
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
