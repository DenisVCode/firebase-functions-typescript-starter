import * as firebaseFn from "firebase-functions";
import adminFn from "firebase-admin";

const projectId = "";

export const functions = firebaseFn;
export const admin = adminFn.initializeApp({
  databaseURL: `https://${projectId}-default-rtdb.firebaseio.com/`,
  credential: adminFn.credential.cert("credentials/admin.json"),
});

export const fs = adminFn.firestore();
