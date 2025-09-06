import React, { createContext, useState, useEffect } from "react";
import {
  // getAuth,
  initializeAuth,
  getReactNativePersistence,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// import { post_user_Request } from "./global.requests";

export const GlobalContext = createContext();

// *************** Firebase SDK ***************************
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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

//  Initialize Firebase Auth with persistence
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });

export const GlobalContextProvider = ({ children }) => {
  const [globalLanguage, setGlobalLanguage] = useState("EN");
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userToDB, setUserToDB] = useState(null);
  // const [first_name, setFirst_name] = useState("");
  // const [last_name, setLast_name] = useState("");
  // const [email, setEmail] = useState("");
  // const [errorInAuthentication, setErrorInAuthentication] = useState(null);
  // const [emailError, setEmailError] = useState(null);
  // const [pin, setPin] = useState("");
  // const [user_added_successfully, setUser_added_successfully] = useState(false);

  console.log("IS AUTHENTICATED AT GLOBAL CONTEXT:", isAuthenticated);

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
  };

  // useEffect(() => {
  //   setUserToDB(user);
  //   const logAsyncStorage = async () => {
  //     try {
  //       const keys = await AsyncStorage.getAllKeys();
  //       const items = await AsyncStorage.multiGet(keys);

  //       console.log("AsyncStorage contents:");
  //       items.forEach(([key, value]) => {
  //         console.log(`${key}: ${value}`);
  //       });
  //     } catch (error) {
  //       console.error("Error reading AsyncStorage:", error);
  //     }
  //   };

  //   logAsyncStorage();
  // }, [user]);

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

  const togglingGlobalLanguage = () => {
    setIsLoading(true);
    setTimeout(() => {
      setGlobalLanguage((prevLanguage) =>
        prevLanguage === "EN" ? "ES" : "EN"
      );
      setIsLoading(false); // Simulate a delay for toggling
    }, 400);
  };

  // const validatingEmail = (email) => {
  //   // const validate = (text) => {
  //   const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  //   console.log(email, reg.test(email));
  //   if (!reg.test(email)) {
  //     setEmailError(reg.test(email) ? null : "Please enter a valid email.");
  //     console.log("no esta bueno...");
  //     return false;
  //   }
  //   return true;
  // };

  // *********************** NEW AUTHENTICATION CONTEXT ***********************
  // console.log("FIRST NAME AT GLOBAL CONTEXT:", first_name);
  // console.log("LAST NAME AT GLOBAL CONTEXT:", last_name);
  // console.log("EMAIL AT GLOBAL CONTEXT:", email);
  // console.log("PIN AT GLOBAL CONTEXT:", pin);
  // console.log("USERTODB:", userToDB);

  // const loginUser = async (pin) => {
  //   console.log("PIN BEFORE LOGIN:", pin);
  //   const email = await AsyncStorage.getItem("userEmail");
  //   console.log("EMAIL BEFORE LOGIN:", email);
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(auth, email, pin);
  //     console.log(
  //       "USER LOGGED IN:",
  //       JSON.stringify(userCredential.user, null, 2)
  //     );
  //     if (userCredential.user) {
  //       setIsAuthenticated(true);
  //       await AsyncStorage.setItem("isAuthenticated", "true");
  //       console.log("USER AUTHENTICATED...");
  //     } else {
  //       setIsAuthenticated(false);
  //       await AsyncStorage.setItem("isAuthenticated", "false");
  //       console.log("USER NOT AUTHENTICATED...");
  //     }
  //     console.log("User logged in:", userCredential.user);
  //   } catch (error) {
  //     setErrorInAuthentication("Invalid Email or PIN number.");
  //     console.error("Login error:", error.message);
  //   }
  // };

  // const temporaryAuthentication = async () => {
  //   setIsAuthenticated(true);
  //   await AsyncStorage.setItem("isAuthenticated", "true");
  // };
  // const generatePin = () => {
  //   // Generate a random number between 100000 and 999999
  //   return Math.floor(100000 + Math.random() * 900000).toString();
  // };

  // const registerUser = async () => {
  //   const pinGenerated = generatePin();
  //   console.log("EMAIL BEFORE REGISTERING:", email);
  //   console.log("PIN BEFORE REGISTERING:", pinGenerated);
  //   const password = pinGenerated;
  //   setIsLoading(true);
  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     );
  //     console.log(
  //       "USER CREATED AT FIREBASE AUTHENTICATION:",
  //       JSON.stringify(userCredential.user, null, 2)
  //     );
  //     await AsyncStorage.setItem("isAuthenticated", "false");
  //     await AsyncStorage.setItem("userEmail", userCredential.user.email); // Replace `userEmail` with the actual email value
  //     setIsAuthenticated(false);
  //     const userToCreateAtFirebase = {
  //       first_name: first_name,
  //       last_name: last_name,
  //       email: userCredential.user.email,
  //       role: "user",
  //       uid: userCredential.user.uid,
  //       createdAt: new Date().toISOString(),
  //       updatedAt: new Date().toISOString(),
  //       display_name: first_name,
  //     };
  //     console.log(
  //       "USER TO CREATE AT FIREBASE AT CONTEXT:",
  //       JSON.stringify(userToCreateAtFirebase, null, 2)
  //     );
  //     const response = await post_user_Request(userToCreateAtFirebase);
  //     console.log("RESPONSE FROM POST USER REQUEST:", response.data);

  //     console.log("USER REGISTERED AND NOT AUTHENTICATED...");
  //   } catch (error) {
  //     console.error("Error creating user:", error.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const loggingOutUser = async () => {
  //   try {
  //     // await auth.signOut();
  //     // await AsyncStorage.clear();
  //     await AsyncStorage.setItem("isAuthenticated", "false");
  //     setIsAuthenticated(false);
  //     setPin("");
  //     console.log("User logged out successfully.");
  //   } catch (error) {
  //     console.error("Logout error:", error.message);
  //   }
  // };
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
        // validatingEmail,
        // auth,
        // setIsAuthenticated,
        // loggingOutUser,
        // loginUser,
        // errorInAuthentication,
        // registerUser,
        // first_name,
        // setFirst_name,
        // last_name,
        // setLast_name,
        // email,
        // setEmail,
        // emailError,
        // setEmailError,
        // pin,
        // setPin,
        // user_added_successfully,
      }}
    >
      {isAuthenticated ? children : null}
      {/* {children} */}
    </GlobalContext.Provider>
  );
};
