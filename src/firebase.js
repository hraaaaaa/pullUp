// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = initializeApp({
  apiKey: "process.env.pullup_APP_API_KEY",
  authDomain: "process.env.pullup_APP_AUTH_DOMAIN",
  projectId: "process.env.pullup_APP_PROJECT_ID",
  storageBucket: "process.env.pullup_APP_STORAGE_BUCKET",
  messagingSenderId: "process.env.pullup_APP_MESSAGING_SENDER_ID",
  appId: "process.env.pullup_APP_APP_ID",
  measurementId: "process.env.pullup_APP_MEASUREMENT_Id"
});
// const analytics = getAnalytics(app);
// Initialize Firebase
export default app;
// export default analytics;
