import React, { createContext, useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export const GlobalContext = createContext();

// *************** Firebase SDK ***************************
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createdAt } from "expo-updates";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnf4GGhTXxqMersW4ufM5zayh3BRYLyoM",
  authDomain: "cliplybe.firebaseapp.com",
  projectId: "cliplybe",
  storageBucket: "cliplybe.firebasestorage.app",
  messagingSenderId: "136903132349",
  appId: "1:136903132349:web:7b5638842445acdd5723d4",
};
// *************** Firebase SDK - END ***************************

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const db = app.firestore();

export const GlobalContextProvider = ({ children }) => {
  const [globalLanguage, setGlobalLanguage] = useState("EN");
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userToDB, setUserToDB] = useState(null);
  const [user_data, setUser_Data] = useState(null);

  useEffect(() => {
    setUserToDB(user);
    const auth = getAuth();
    // signInWithEmailAndPassword(auth, "arnoldo@gmail.com", "123456")
    //   .then((data_user) => {
    //     // console.log(JSON.stringify(data_user, 0, 2));
    //     console.log("USER UID:", data_user.user.uid);
    //     console.log("USER EMAIL:", data_user.user.email);
    //     console.log("USER AUTHENTICATED WITH FIREBASE...");
    //     setIsAuthenticated(true);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //     setIsAuthenticated(false);
    //   });
  }, []);

  const togglingGlobalLanguage = () => {
    setIsLoading(true);
    setTimeout(() => {
      setGlobalLanguage((prevLanguage) =>
        prevLanguage === "EN" ? "ES" : "EN"
      );
      setIsLoading(false); // Simulate a delay for toggling
    }, 400);
  };

  const user = {
    first_name: "Arnoldo",
    last_name: "Alvarez",
    email: "arnoldo@gmail.com",
    display_name: "Arnoldo",
    isFirstTime: true,
    role: "user",
    uid: "onQniDL2rsSCzspat9HS8BRBbIG2",
    updatedAt: "2025-08-31T17:23:42.556Z",
    createdAt: "2025-08-31T17:23:42.556Z",
    user_id: "3cfccb6c-b4d7-4582-b183-940606a9469f",
    phone_number: "(706)612.46.02",
  };
  // This context is currently empty, but can be expanded in the future
  return (
    <GlobalContext.Provider
      value={{
        globalLanguage,
        setGlobalLanguage,
        togglingGlobalLanguage,
        isLoading,
        app,
        userToDB,
        // db,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
