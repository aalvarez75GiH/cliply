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
import { put_preference_language_Request } from "./global.requests.js";

import {
  post_user_Request,
  get_user_by_uid_and_user_data_Request,
} from "./global.requests";

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

export const GlobalContextProvider = ({ children, navigation }) => {
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
  // const user = {
  //   first_name: "Kris",
  //   last_name: "Summers",
  //   email: "kris@gmail.com",
  //   display_name: "Kris",
  //   isFirstTime: true,
  //   role: "user",
  //   uid: "ynQniDL2rsSCzspat9HS8BRBbIG2",
  //   updatedAt: "2025-08-31T17:23:42.556Z",
  //   createdAt: "2025-08-31T17:23:42.556Z",
  //   user_id: "243d274f-11fb-4695-b714-27f4b5104e44",
  //   phone_number: "(706)352.84.46",
  // };

  useEffect(() => {
    const settingThingsUp = async () => {
      checkAuthentication();
      logAsyncStorage();
      const preference_language = await AsyncStorage.getItem(
        "preference_language"
      );
      if (preference_language) {
        setGlobalLanguage(preference_language);
      }
    };
    settingThingsUp();
  }, []);

  // **************** AUTHENTICATION CHECKERS ****************
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
    setIsLoading(true);
    try {
      const isAuthenticated = await AsyncStorage.getItem("isAuthenticated");

      if (isAuthenticated === "true") {
        setIsAuthenticated(true);
        console.log("USER IS AUTHENTICATED:", isAuthenticated);
        const uid = await AsyncStorage.getItem("uid");
        const userFromBackend = await get_user_by_uid_and_user_data_Request(
          uid
        );
        console.log(
          "USER FROM BACKEND AT LOGIN:",
          JSON.stringify(userFromBackend.data.first_name, null, 2)
        );
        setUserToDB({
          first_name: userFromBackend.data.first_name,
          last_name: userFromBackend.data.last_name,
          email: userFromBackend.data.email,
          display_name: userFromBackend.data.display_name,
          isFirstTime: userFromBackend.data.isFirstTime,
          role: userFromBackend.data.role,
          uid: userFromBackend.data.uid,
          updatedAt: userFromBackend.data.updatedAt,
          createdAt: userFromBackend.data.createdAt,
          user_id: userFromBackend.data.user_id,
        });
        // setUserToDB(user);
      } else {
        console.log("USER NOT AUTHENTICATED:", isAuthenticated);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
    } finally {
      setIsLoading(false);
    }
  };
  // **********************************************************

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
  console.log("USER TO DB:", userToDB);

  const temporaryAuthentication = async (error_message_from_FB) => {
    setIsLoading(true);
    setTimeout(() => {
      // setErrorInAuthentication("We haven't found a user for this PIN number");
      setErrorInAuthentication(
        error_message_from_FB === "Firebase: Error (auth/missing-email)."
          ? "We haven't found an email for this PIN number"
          : error_message_from_FB ===
            "Login error: Firebase: Error (auth/invalid-credential)."
          ? "We haven't found a user for this PIN number"
          : error_message_from_FB ===
            "Login error: Firebase: Error (auth/too-many-requests)."
          ? "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your PIN or you can try again later."
          : null
      );
      setIsLoading(false);
    }, 2000);
    // await AsyncStorage.setItem("isAuthenticated", "true");
    // setUserToDB(user);
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

  const handlePinChange = (newPin) => {
    setPin(newPin);
    // Check if the PIN is empty
    if (newPin === "") {
      setErrorInAuthentication(null); // Set error when PIN is cleared
    } else {
      setErrorInAuthentication(null); // Clear error when PIN is not empty
    }
  };

  // ********************* LOGIN USER LOGIC *************************

  const loginUser = async (pin) => {
    console.log("PIN BEFORE LOGIN:", pin);
    const PIN_LENGTH = 6;
    setIsLoading(true);
    if (pin.length === PIN_LENGTH) {
      console.log("PIN BEFORE LOGIN:", pin);
      const email = await AsyncStorage.getItem("userEmail");
      // const email = "arnoldo@yahoo.com";
      console.log("EMAIL BEFORE LOGIN:", email);
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          pin
        );
        console.log(
          "USER LOGGED IN:",
          JSON.stringify(userCredential.user.uid, null, 2)
        );
        if (userCredential.user) {
          // setIsAuthenticated(true);
          // *********** GET USER BY UID FROM BACKEND AND SET TO CONTEXT ************

          const userFromBackend = await get_user_by_uid_and_user_data_Request(
            userCredential.user.uid
          );
          console.log(
            "USER FROM BACKEND AT LOGIN:",
            JSON.stringify(userFromBackend.data.first_name, null, 2)
          );
          console.log(
            "USER IS FIRST TIME AT LOGIN:",
            JSON.stringify(userFromBackend.data.isFirstTime, null, 2)
          );
          // *********************************************************
          if (userFromBackend.data.isFirstTime) {
            return {
              ok: true,
              next: "Preference_language_View",
              user_from_backEnd: userFromBackend.data,
            };
          }

          setUserToDB({
            first_name: userFromBackend.data.first_name,
            last_name: userFromBackend.data.last_name,
            email: userFromBackend.data.email,
            display_name: userFromBackend.data.display_name,
            isFirstTime: userFromBackend.data.isFirstTime,
            role: userFromBackend.data.role,
            uid: userFromBackend.data.uid,
            updatedAt: userFromBackend.data.updatedAt,
            createdAt: userFromBackend.data.createdAt,
            user_id: userFromBackend.data.user_id,
          });
          console.log("USER AUTHENTICATED...");
          await AsyncStorage.setItem("isAuthenticated", "true");
          await AsyncStorage.setItem("userEmail", userCredential.user.email); // Replace `userEmail` with the actual email value
          await AsyncStorage.setItem("uid", userCredential.user.uid);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          await AsyncStorage.setItem("isAuthenticated", "false");
          console.log("USER NOT AUTHENTICATED...");
        }
        // console.log("User logged in:", userCredential.user);
      } catch (error) {
        setErrorInAuthentication(
          error.message === "Firebase: Error (auth/missing-email)."
            ? "We haven't found an email for this PIN number"
            : error.message === "Firebase: Error (auth/invalid-credential)."
            ? "We haven't found a user for this PIN number"
            : error.message === "Firebase: Error (auth/too-many-requests)."
            ? "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your PIN or you can try again later."
            : null
        );
        console.error("Login error:", error.message);

        // setEmailError("Invalid Email or PIN number.");
      } finally {
        setIsLoading(false);
      }
      return;
    }
  };

  // ****************** LOGOUT USER FUNCTION ************************
  const loggingOutUser = async () => {
    try {
      // await auth.signOut();
      // await AsyncStorage.clear();
      await AsyncStorage.setItem("isAuthenticated", "false");
      // await AsyncStorage.removeItem("userEmail");
      await AsyncStorage.removeItem("uid");
      setIsAuthenticated(false);
      setPin("");
      console.log("User logged out successfully.");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  // ****************** REGISTER USER LOGIC *********************
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
      await AsyncStorage.setItem("uid", userCredential.user.uid); // Replace `userEmail` with the actual email value

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
      console.log(
        "RESPONSE FROM POST USER REQUEST:",
        JSON.stringify(response.data, null, 2)
      );
      console.log("USER REGISTERED BUT NOT AUTHENTICATED...");
    } catch (error) {
      console.error("Error creating user:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const settingPreferenceLanguage = async (data_to_change) => {
    const language_chosen = data_to_change.language;
    const user_id = data_to_change.user_id;
    console.log("LANGUAGE CHOOSEN:", language_chosen);
    console.log("USER ID TO UPDATE PREFERENCE LANGUAGE:", user_id);
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const set_preference_language_response =
          await put_preference_language_Request(user_id, language_chosen);
        console.log(
          "RESPONSE STATUS:",
          set_preference_language_response.status
        );
        console.log(
          " USER UPDATED:",
          set_preference_language_response.data.user_updated
        );
        if (set_preference_language_response.status === 200) {
          console.log("PASA POR AQUI...");
          setUserToDB({
            first_name:
              set_preference_language_response.data.user_updated.first_name,
            last_name:
              set_preference_language_response.data.user_updated.last_name,
            email: set_preference_language_response.data.user_updated.email,
            display_name:
              set_preference_language_response.data.user_updated.display_name,
            isFirstTime:
              set_preference_language_response.data.user_updated.isFirstTime,
            role: set_preference_language_response.data.user_updated.role,
            uid: set_preference_language_response.data.user_updated.uid,
            updatedAt:
              set_preference_language_response.data.user_updated.updatedAt,
            createdAt:
              set_preference_language_response.data.user_updated.createdAt,
            user_id: set_preference_language_response.data.user_updated.user_id,
            preference_language:
              set_preference_language_response.data.user_updated
                .preference_language,
          });
          await AsyncStorage.setItem("isAuthenticated", "true");
          await AsyncStorage.setItem(
            "userEmail",
            set_preference_language_response.data.user_updated.email
          ); // Replace `userEmail` with the actual email value
          await AsyncStorage.setItem(
            "uid",
            set_preference_language_response.data.user_updated.uid
          );
          await AsyncStorage.setItem(
            "preference_language",
            set_preference_language_response.data.user_updated
              .preference_language
          );
          setGlobalLanguage(
            set_preference_language_response.data.user_updated
              .preference_language
          );
          setIsAuthenticated(true);
          return { ok: true, next: "Home_View" };
        } else {
          setIsAuthenticated(false);
          await AsyncStorage.setItem("isAuthenticated", "false");
          console.log("USER NOT AUTHENTICATED...");
        }
      } catch (error) {
        console.error("Error updating preference language:", error.message);
      } finally {
        setIsLoading(false);
      }
    }, 500);
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
        setErrorInAuthentication,
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
        loginUser,
        handlePinChange,
        setIsAuthenticated,
        checkAuthentication,
        logAsyncStorage,
        temporaryAuthentication,
        settingPreferenceLanguage,
      }}
    >
      {/* {isAuthenticated ? children : null} */}
      {children}
    </GlobalContext.Provider>
  );
};
