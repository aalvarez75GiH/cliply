import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Ensure this is installed
import {
  getAuth,
  signInWithEmailAndPassword,
  getReactNativePersistence,
  initializeAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp, getApps } from "firebase/app";

import { post_user_Request } from "./global.requests";
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
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [user_added_successfully, setUser_added_successfully] = useState(false);

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

  useEffect(() => {
    const logAsyncStorage = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const items = await AsyncStorage.multiGet(keys);

        console.log("AsyncStorage contents:");
        items.forEach(([key, value]) => {
          console.log(`${key}: ${value}`);
        });
      } catch (error) {
        console.error("Error reading AsyncStorage:", error);
      }
    };
    const checkAuthentication = async () => {
      try {
        const isAuthenticated = await AsyncStorage.getItem("isAuthenticated");

        if (isAuthenticated === "true") {
          console.log("USER IS AUTHENTICATED:", isAuthenticated);
          setUserToDB(user);
          setIsAuthenticated(true);
        } else {
          console.log("USER NOT AUTHENTICATED:", isAuthenticated);
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };

    checkAuthentication();
    logAsyncStorage();
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

  // **************** AUTHENTICATION HANDLERS ****************

  console.log("FIRST NAME AT GLOBAL CONTEXT:", first_name);
  console.log("LAST NAME AT GLOBAL CONTEXT:", last_name);
  console.log("EMAIL AT GLOBAL CONTEXT:", email);
  console.log("PIN AT GLOBAL CONTEXT:", pin);
  console.log("USERTODB:", userToDB);

  const temporaryAuthentication = async () => {
    setIsAuthenticated(true);
    await AsyncStorage.setItem("isAuthenticated", "true");
    setUserToDB(user);
  };

  const validatingEmail = (email) => {
    // const validate = (text) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    console.log(email, reg.test(email));
    if (!reg.test(email)) {
      setEmailError(reg.test(email) ? null : "Please enter a valid email.");
      console.log("no esta bueno...");
      return false;
    }
    return true;
  };

  const loggingOutUser = async () => {
    try {
      // await auth.signOut();
      // await AsyncStorage.clear();
      await AsyncStorage.setItem("isAuthenticated", "false");
      await AsyncStorage.setItem("userEmail", "");
      await AsyncStorage.setItem("user_uid", "");
      setIsAuthenticated(false);
      setPin("");
      console.log("User logged out successfully.");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };
  const generatePin = () => {
    // Generate a random number between 100000 and 999999
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const registerUser = async () => {
    const pinGenerated = generatePin();
    console.log("EMAIL BEFORE REGISTERING:", email);
    console.log("PIN BEFORE REGISTERING:", pinGenerated);
    // const password = pinGenerated;
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        pinGenerated
      );
      console.log(
        "USER CREATED AT FIREBASE AUTHENTICATION:",
        JSON.stringify(userCredential.user, null, 2)
      );
      await AsyncStorage.setItem("isAuthenticated", "false");
      await AsyncStorage.setItem("userEmail", userCredential.user.email); // Replace `userEmail` with the actual email value
      await AsyncStorage.setItem("user_uid", userCredential.user.uid); // Replace `userEmail` with the actual email value

      setIsAuthenticated(false);
      const userToCreateAtFirebase = {
        first_name: first_name,
        last_name: last_name,
        email: userCredential.user.email,
        role: "user",
        uid: userCredential.user.uid,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        display_name: first_name,
      };
      console.log(
        "USER TO CREATE AT FIREBASE AT CONTEXT:",
        JSON.stringify(userToCreateAtFirebase, null, 2)
      );
      const response = await post_user_Request(userToCreateAtFirebase);
      console.log("RESPONSE FROM POST USER REQUEST:", response.data);

      console.log("USER REGISTERED AND NOT AUTHENTICATED...");
    } catch (error) {
      console.error("Error creating user:", error.message);
    } finally {
      setIsLoading(false);
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
        first_name,
        setFirst_name,
        last_name,
        setLast_name,
        email,
        setEmail,
        emailError,
        setEmailError,
        user_added_successfully,
        registerUser,
        validatingEmail,
        // db,
      }}
    >
      {/* {isAuthenticated ? children : null} */}
      {children}
    </GlobalContext.Provider>
  );
};
