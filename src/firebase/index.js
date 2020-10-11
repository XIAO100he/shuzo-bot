import firebase from 'firebase/app'
import 'firebase/firestore'
import firesbaseConfig from './config'

firebase.initializeApp(firesbaseConfig);
export const db = firebase.firestore();