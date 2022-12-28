import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FirebaseAppProvider } from "reactfire";
import { BrowserRouter } from "react-router-dom";

const firebaseConfig = {
  /* Paste your config object from Firebase console here
   */
  apiKey: "AIzaSyAd2ZCrIbwrBEB6mh8a0FGPa_m4t7EJCyc",
  authDomain: "remember-c902f.firebaseapp.com",
  projectId: "remember-c902f",
  storageBucket: "remember-c902f.appspot.com",
  messagingSenderId: "1035213434452",
  appId: "1:1035213434452:web:1b2144ea0c53008e94c7c1",
  measurementId: "G-CQYPMB7CYW",
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <App />
      </FirebaseAppProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
