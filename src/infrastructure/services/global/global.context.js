import React, { createContext, useState, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getAuth,
  signInWithEmailAndPassword,
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth";
import { initializeApp, getApps } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Ensure this is installed

// Create Global Context
export const GlobalContext = createContext();

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnf4GGhTXxqMersW4ufM5zayh3BRYLyoM",
  authDomain: "cliplybe.firebaseapp.com",
  projectId: "cliplybe",
  storageBucket: "cliplybe.firebasestorage.app",
  messagingSenderId: "136903132349",
  appId: "1:136903132349:web:7b5638842445acdd5723d4",
};

// Initialize Firebase App (only if not already initialized)
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // Use the already initialized app
}

// Initialize Firebase Auth (only if not already initialized)
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// });
let auth;
try {
  auth = getAuth(app); // Use getAuth to retrieve the existing instance
} catch (error) {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
}
export { app, auth };
// export const db = app.firestore();

export const GlobalContextProvider = ({ children }) => {
  const [globalLanguage, setGlobalLanguage] = useState("EN");
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userToDB, setUserToDB] = useState(null);
  const [pin, setPin] = useState("");
  const [errorInAuthentication, setErrorInAuthentication] = useState(null);

  useEffect(() => {
    setUserToDB(user);
    // signInWithEmailAndPassword(auth, "arnoldo.alvarez75@yahoo.com", "123456")
    //   .then((data_user) => {
    //     // console.log(JSON.stringify(data_user, 0, 2));
    //     console.log("USER UID FROM GOOGLE:", data_user.user.uid);
    //     console.log("USER EMAIL FROM GOOGLE:", data_user.user.email);
    //     console.log("USER AUTHENTICATED WITH FIREBASE...");
    //     setIsAuthenticated(true);
    //   })
    //   .catch((e) => {
    //     console.error("Authentication failed:", e.message);
    //     setIsAuthenticated(false);
    //   });
  }, [user]);

  const temporaryAuthentication = async () => {
    setIsAuthenticated(true);
    await AsyncStorage.setItem("isAuthenticated", "true");
  };

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
    first_name: "Kris",
    last_name: "Summers",
    email: "kris@gmail.com",
    display_name: "Kris",
    isFirstTime: true,
    role: "user",
    uid: "ynQniDL2rsSCzspat9HS8BRBbIG2",
    updatedAt: "2025-08-31T17:23:42.556Z",
    createdAt: "2025-08-31T17:23:42.556Z",
    user_id: "243d274f-11fb-4695-b714-27f4b5104e44",
    phone_number: "(706)352.84.46",
  };

  const loggingOutUser = async () => {
    try {
      // await auth.signOut();
      // await AsyncStorage.clear();
      await AsyncStorage.setItem("isAuthenticated", "false");
      setIsAuthenticated(false);
      setPin("");
      console.log("User logged out successfully.");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
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
        isAuthenticated,
        setPin,
        pin,
        errorInAuthentication,
        temporaryAuthentication,
        loggingOutUser,
        // db,
      }}
    >
      {/* {isAuthenticated ? children : null} */}
      {children}
    </GlobalContext.Provider>
  );
};
