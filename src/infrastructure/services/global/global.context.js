import React, { createContext, useState, useEffect } from "react";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store"; // Ensure this is installed
//import CryptoJS from "crypto-js";
// import EncryptedStorage from "react-native-encrypted-storage";
import {
  getAuth,
  signInWithEmailAndPassword,
  getReactNativePersistence,
  initializeAuth,
  createUserWithEmailAndPassword,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
  onAuthStateChanged,
} from "firebase/auth";
import { initializeApp, getApps } from "firebase/app";

import {
  post_user_Request,
  get_user_by_uid_and_user_data_Request,
  put_preference_language_Request,
} from "./global.requests";
import { Email_For_Login_Tile } from "../../../components/tiles/email_for_login.tile";
import { Spacer } from "../../../components/global_components/optimized.spacer.component";
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

// let auth;
// try {
//   auth = getAuth(app); // Use getAuth to retrieve the existing instance
// } catch (error) {
//   auth = initializeAuth(app, {
//     persistence: getReactNativePersistence(AsyncStorage),
//   });
// }
// Auth singleton (RN vs Web)
let auth;
if (Platform.OS === "web") {
  // web can use getAuth (browser persistence)
  auth = getAuth(app);
} else {
  // React Native: ensure AsyncStorage persistence
  try {
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  } catch (e) {
    // If already initialized (Fast Refresh), just grab it
    auth = getAuth(app);
  }
}
export { app, auth };
// export const db = app.firestore();
let IS_AUTHENTICATED_KEY = "isAuthenticated";
let UID_KEY = "uid";
let PREFERENCE_LANGUAGE_KEY = "preference_language";
let USER_EMAIL_KEY = "userEmails";
let ACTIVE_EMAIL = "activeEmail";

export const GlobalContextProvider = ({ children, navigation }) => {
  const [globalLanguage, setGlobalLanguage] = useState("EN");
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userToDB, setUserToDB] = useState(null);
  const [pin, setPin] = useState("");
  const [new_pin, setNew_pin] = useState("");
  const [old_pin, setOld_pin] = useState("");
  const [automaticPIN, setAutomaticPIN] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [activeEmail, setActiveEmail] = useState("");

  const [emailError, setEmailError] = useState(null);
  const [errorInAuthentication, setErrorInAuthentication] = useState(null);
  const [errorInUpdatingPIN, setErrorInUpdatingPIN] = useState(null);
  console.log("NEW PIN AT GLOBAL CONTEXT:", new_pin);
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
      // await logSecureStore();
    };
    // const retrievePin = async () => {
    //   try {
    //     const pin_found = await SecureStore.getItemAsync("user_pin");
    //     if (pin_found) {
    //       setOld_pin(pin_found);
    //       console.log("PIN found in SecureStore in useEffect...");
    //       console.log("PIN stored in SecureStore :", pin_found);
    //       // Perform any additional actions, such as setting state
    //       // setOld_pin(pin_found);
    //     } else {
    //       console.log("No PIN found in SecureStore.");
    //     }
    //   } catch (error) {
    //     console.error("Error reading SecureStore:", error);
    //   }
    // };

    settingThingsUp();
    // retrievePin();
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
        // setIsAuthenticated(true);
        const email = await AsyncStorage.getItem(ACTIVE_EMAIL);
        setActiveEmail(email);
        setIsAuthenticated(true);
        console.log("USER IS AUTHENTICATED:", isAuthenticated);
        const uid = await AsyncStorage.getItem("uid");
        const userFromBackend = await get_user_by_uid_and_user_data_Request(
          uid
        );
        // console.log(
        //   "USER FROM BACKEND AT LOGIN:",
        //   JSON.stringify(userFromBackend.data.first_name, null, 2)
        // );
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
          preference_language: userFromBackend.data.preference_language,
        });
        setGlobalLanguage(userFromBackend.data.preference_language);
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

  // console.log("USER TO DB AT GLOBAL CONTEXT:", userToDB);
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
  // *********************** ENCRYPTION HELPERS ***********************
  // Encrypt and save PIN
  const SECRET_KEY = "cliply_secret_key";
  // const savePin = async (pin) => {
  //   try {
  //     const ciphertext = CryptoJS.AES.encrypt(pin, SECRET_KEY).toString();
  //     await AsyncStorage.setItem("user_pin", ciphertext);
  //     console.log("PIN saved securely");
  //   } catch (error) {
  //     console.error("Error saving PIN:", error);
  //   }
  // };
  const savePin = async (pin) => {
    try {
      await SecureStore.setItemAsync("user_pin", pin);
      console.log("PIN saved securely");
    } catch (error) {
      console.error("Error saving PIN:", error);
    }
  };
  // const savePin = async (pin) => {
  //   try {
  //     await EncryptedStorage.setItem("user_pin", pin);
  //     console.log("PIN saved securely");
  //   } catch (error) {
  //     console.error("Error saving PIN:", error);
  //   }
  // };
  // **************** AUTHENTICATION HANDLERS ****************

  // console.log("FIRST NAME AT GLOBAL CONTEXT:", first_name);
  // console.log("LAST NAME AT GLOBAL CONTEXT:", last_name);
  // console.log("EMAIL AT GLOBAL CONTEXT:", email);
  // console.log("PIN AT GLOBAL CONTEXT:", pin);
  // console.log("USER TO DB:", userToDB);

  // const temporaryAuthentication = async (error_message_from_FB) => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     // setErrorInAuthentication("We haven't found a user for this PIN number");
  //     setErrorInAuthentication(
  //       error_message_from_FB === "Firebase: Error (auth/missing-email)."
  //         ? "We haven't found an email for this PIN number"
  //         : error_message_from_FB ===
  //           "Login error: Firebase: Error (auth/invalid-credential)."
  //         ? "We haven't found a user for this PIN number"
  //         : error_message_from_FB ===
  //           "Login error: Firebase: Error (auth/too-many-requests)."
  //         ? "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your PIN or you can try again later."
  //         : null
  //     );
  //     setIsLoading(false);
  //   }, 2000);
  // };

  const validatingEmail = (email) => {
    // const validate = (text) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    console.log(email, reg.test(email));
    if (!reg.test(email)) {
      setEmailError(reg.test(email) ? null : "Please enter a valid email.");
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

  const addEmailToAsyncStorage = async (newEmail) => {
    const existingEmails = await AsyncStorage.getItem("userEmails");
    let emailArray = [];
    // const newEmail = userCredential.user.email;

    if (existingEmails) {
      emailArray = JSON.parse(existingEmails); // Parse existing emails into an array
    }
    if (!emailArray.includes(newEmail)) {
      emailArray.push(newEmail); // Add the new email to the array
      await AsyncStorage.setItem(USER_EMAIL_KEY, JSON.stringify(emailArray)); // Save the updated array
    } else {
      console.log("Email already exists in AsyncStorage.");
    }
    return emailArray;
  };

  const checking_for_array_of_multiple_emails = async () => {
    const existingEmails = await AsyncStorage.getItem("userEmails");
    let emailArray = [];
    if (existingEmails) {
      try {
        emailArray = JSON.parse(existingEmails); // Convert the string to an array
        console.log("Parsed email array:", emailArray);
      } catch (error) {
        console.error("Error parsing existingEmails:", error);
      }
    } else {
      console.log("No emails found in AsyncStorage.");
    }
    console.log(emailArray.length);
    return emailArray;
  };

  const signingInWithEmailAndPasswordFunction = async (email, pin) => {
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await savePin(pin);
      const userCredential = await signInWithEmailAndPassword(auth, email, pin);
      console.log("USER LOGGED IN:", userCredential.user);
      if (userCredential.user) {
        const userFromBackend = await get_user_by_uid_and_user_data_Request(
          userCredential.user.uid
        );
        console.log("USER FROM BACKEND:", userFromBackend.data);
        if (userFromBackend.data.isFirstTime) {
          // let data = userFromBackend.data;
          return {
            ok: true,
            next: "Preference_language_View",
            data: userFromBackend.data,
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
          preference_language: userFromBackend.data.preference_language,
        });
        await AsyncStorage.setItem(IS_AUTHENTICATED_KEY, "true");
        await AsyncStorage.setItem(UID_KEY, userCredential.user.uid);
        await AsyncStorage.setItem(
          PREFERENCE_LANGUAGE_KEY,
          userFromBackend.data.preference_language
        );
        await AsyncStorage.setItem(ACTIVE_EMAIL, userFromBackend.data.email);
        setGlobalLanguage(userFromBackend.data.preference_language);
        setIsAuthenticated(true);
        return { success: true };
      } else {
        setIsAuthenticated(false);
        await AsyncStorage.setItem("isAuthenticated", "false");
        console.log("USER NOT AUTHENTICATED...");
      }
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
    } finally {
      setIsLoading(false);
    }
  };

  // ********************* LOGIN USER LOGIC *************************

  const loginUser = async (pin) => {
    console.log("PIN BEFORE LOGIN:", pin);
    const PIN_LENGTH = 6;
    setIsLoading(true);
    if (pin.length === PIN_LENGTH) {
      console.log("PIN BEFORE LOGIN:", pin);
      let email;
      // const email = await AsyncStorage.getItem("userEmail");
      const Emails_array_checked =
        await checking_for_array_of_multiple_emails();

      if (Emails_array_checked.length === 1) {
        console.log("EXISTING EMAILS:", Emails_array_checked[0]);
        email = Emails_array_checked[0];
        const res = await signingInWithEmailAndPasswordFunction(email, pin);
        if (res?.ok && res?.next) {
          console.log("AHhhHHHHHHHH:", res.data);
          setIsLoading(false);
          return res;
        }
        // setIsLoading(false);
        if (res?.success) {
          setIsLoading(false);
          // return res;
        }
        return;
      }

      if (Emails_array_checked.length > 1) {
        setIsLoading(false);
        return {
          ok: true,
          next: "Multiple_Emails_LoginIn_View",
          data: Emails_array_checked,
          action_type: "login",
        };
      }
    }
  };

  // This is the action that multiple emails view executes if user selects one email to login
  const login_action_for_multiple_emails = async (item) => {
    console.log("DATA IN ACTION:", item);
    console.log("PIN IN ACTION:", pin);
    const res = await signingInWithEmailAndPasswordFunction(item, pin);
    console.log("RES IN ACTION:", res);
    if (res.success) {
      console.log("LOGIN ACTION SUCCESS");
      setIsLoading(false);
      return;
    }
    if (res?.ok && res?.next) {
      console.log("AHhhHHHHHHHH:", res.data);
      navigation.navigate(res.next, {
        data: res.data, // Ensure 'data' is defined
      });
    } else {
      console.log("Login failed or invalid response AT ACTION");
    }
  };

  // ****************** LOGOUT USER LOGIC ************************

  const loggingOutUser = async () => {
    setIsLoading(true);

    try {
      // Simulate a delay (if needed)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Perform logout operations
      await AsyncStorage.setItem(IS_AUTHENTICATED_KEY, "false");
      await AsyncStorage.removeItem(UID_KEY);
      await AsyncStorage.setItem(ACTIVE_EMAIL, "");
      await AsyncStorage.setItem(PREFERENCE_LANGUAGE_KEY, "");
      // await AsyncStorage.removeItem("userEmails");

      await SecureStore.deleteItemAsync("user_pin");

      // Update state
      setIsAuthenticated(false);
      setPin("");
    } catch (error) {
      console.error("Logout error:", error.message);
    } finally {
      // Ensure loading state is updated
      setIsLoading(false);
    }
  };

  // ****************** REGISTER USER LOGIC *********************

  //We generate a random 6-digit PIN
  const generatePin = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const registerUser = async () => {
    const pinGenerated = generatePin();
    console.log("PIN BEFORE REGISTERING:", pinGenerated);
    // const password = pinGenerated;
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        pinGenerated
      );

      await AsyncStorage.setItem(IS_AUTHENTICATED_KEY, "false");
      await AsyncStorage.setItem(UID_KEY, userCredential.user.uid); // Replace `userEmail` with the actual email value

      const Emails_array_updated = await addEmailToAsyncStorage(
        userCredential.user.email
      );
      // console.log("UPDATED EMAILS ARRAY:", Emails_array_updated);

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
        // firebase_user: userCredential.user,
      };
      console.log(
        "USER TO CREATE AT FIREBASE AT CONTEXT:",
        JSON.stringify(userToCreateAtFirebase, null, 2)
      );
      await post_user_Request(userToCreateAtFirebase);
      console.log("USER REGISTERED BUT NOT AUTHENTICATED...");
    } catch (error) {
      console.error("Error creating user:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // ****************** SET PREFERENCE LANGUAGE  LOGIC *********************
  const settingPreferenceLanguage = async (data_to_change) => {
    const language_chosen = data_to_change.language;
    const user_id = data_to_change.user_id;
    // console.log("LANGUAGE CHOOSEN:", language_chosen);
    // console.log("USER ID TO UPDATE PREFERENCE LANGUAGE:", user_id);
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const set_preference_language_response =
          await put_preference_language_Request(user_id, language_chosen);

        if (set_preference_language_response.status === 200) {
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
          await AsyncStorage.setItem(IS_AUTHENTICATED_KEY, "true");

          await AsyncStorage.setItem(
            UID_KEY,
            set_preference_language_response.data.user_updated.uid
          );
          await AsyncStorage.setItem(
            PREFERENCE_LANGUAGE_KEY,
            set_preference_language_response.data.user_updated
              .preference_language
          );
          await AsyncStorage.setItem(
            ACTIVE_EMAIL,
            set_preference_language_response.data.user_updated.email
          );
          // let IS_AUTHENTICATED_KEY = "isAuthenticated";

          setGlobalLanguage(language_chosen);
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

  const renderEmailForLoginTile = ({ item, pin, action }) => {
    // console.log("ITEM AT RENDER EMAIL TILE:", item);
    // console.log("PIN AT RENDER EMAIL TILE:", pin);
    return (
      <Spacer position="bottom" size="medium">
        <Email_For_Login_Tile item={item} action={action} />
      </Spacer>
    );
  };

  // const generatingNewPINAndUpdatingUserAtFB = async (user) => {
  //   setIsLoading(true);
  //   const Emails_array_checked = await checking_for_array_of_multiple_emails();
  //   try {
  //     await new Promise((resolve) => setTimeout(resolve, 2000));
  //     const pinGenerated = generatePin();
  //     setAutomaticPIN(pinGenerated);

  //     // Simulate a delay (if needed)
  //   } catch (error) {
  //     console.error("Logout error:", error.message);
  //   } finally {
  //     // Ensure loading state is updated
  //     setIsLoading(false);
  //   }
  // };
  // ************ GENERATE NEW PIN AUTOMATICALLY AND UPDATE AT FIREBASE LOGIC *************
  const generatingNewPINAndUpdatingUserAtFB = async (user) => {
    setIsLoading(true);
    // const Emails_array_checked = await checking_for_array_of_multiple_emails();
    const Emails_array_checked = ["arnoldo@yahoo.com"];

    try {
      if (Emails_array_checked.length === 1) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const pinGenerated = generatePin();
        setAutomaticPIN(pinGenerated);
      }
      if (Emails_array_checked.length > 1) {
        setIsLoading(false);
        return {
          ok: true,
          next: "Multiple_Emails_LoginIn_View",
          data: Emails_array_checked,
          action_type: "regenerate_new_pin",
        };
      }
      // Simulate a delay (if needed)
    } catch (error) {
      console.error("Logout error:", error.message);
    } finally {
      // Ensure loading state is updated
      setIsLoading(false);
    }
  };

  const generate_PIN_action_for_multiple_emails = async (item) => {
    console.log("DATA IN ACTION:", item);
    // console.log("DATA IN ACTION:", item);
    // console.log("PIN IN ACTION:", pin);
    // const res = await signingInWithEmailAndPasswordFunction(item, pin);
    // if (res?.ok && res?.next) {
    //   console.log("AHhhHHHHHHHH:", res.data);
    //   navigation.navigate(res.next, {
    //     data: res.data, // Ensure 'data' is defined
    //   });
    // } else {
    //   console.log("Login failed or invalid response");
    // }
  };

  // ************ GENERATE NEW PIN AUTOMATICALLY AND UPDATE AT FIREBASE LOGIC *************

  // const updatingPINOnDemandAndUpdatingUserAtFB = async (new_pin) => {
  //   setIsLoading(true);
  //   try {
  //     console.log("NEW PIN AT UPDATING FUNCTION CONTEXT:", new_pin);

  //     const auth = getAuth();
  //     const user = auth.currentUser;
  //     console.log("CURRENT USER INSIDE OF UPDATING FUNCTION:", user);

  //     if (!user) {
  //       throw new Error("No user is currently logged in.");
  //     }

  //     // Validate and refresh the idToken
  //     // try {
  //     //   const idToken = await user.getIdToken(true); // Force refresh the token
  //     //   console.log("ID Token refreshed successfully:", idToken);
  //     // } catch (tokenError) {
  //     //   throw new Error("Failed to refresh ID token. Please try again.");
  //     // }

  //     const active_email = await AsyncStorage.getItem(ACTIVE_EMAIL);
  //     if (!active_email) {
  //       // setErrorInUpdatingPIN("Active email not found. Please log in again.");
  //       throw new Error("Active email not found in AsyncStorage.");
  //     }
  //     console.log("ACTIVE EMAIL:", active_email);

  //     const old_pin = await SecureStore.getItemAsync("user_pin");
  //     console.log("OLD PIN AT CONTEXT:", old_pin);
  //     if (!old_pin) {
  //       // setErrorInUpdatingPIN("Old PIN not found. Please log in again.");
  //       throw new Error("Old PIN not found in SecureStore.");
  //     }

  //     // Check if the PIN is the same as the old PIN
  //     if (new_pin === old_pin) {
  //       // setErrorInUpdatingPIN("The new PIN cannot be the same as the old PIN.");
  //       throw new Error("The new PIN cannot be the same as the old PIN.");
  //     }

  //     // Reauthenticate only if necessary
  //     try {
  //       const credential = EmailAuthProvider.credential(active_email, old_pin);
  //       const res = await reauthenticateWithCredential(user, credential);
  //       console.log("Reauthentication successful:", res);
  //     } catch (error) {
  //       throw new Error(
  //         "Reauthentication failed. Please check your credentials:",
  //         error.message
  //       );
  //     }

  //     // const credential = EmailAuthProvider.credential(active_email, old_pin);
  //     // const res = await reauthenticateWithCredential(user, credential);
  //     // console.log("Reauthentication successful:", res);

  //     await updatePassword(user, new_pin);
  //     console.log("Password updated successfully.");

  //     setIsLoading(false);
  //     return { success: true };
  //   } catch (error) {
  //     console.error("Error updating PIN:", error.message);

  //     setIsLoading(false);
  //     return { success: false, error: error.message };
  //   }
  // };
  const updatingPINOnDemandAndUpdatingUserAtFB = async (new_pin) => {
    setIsLoading(true);
    try {
      console.log("NEW PIN AT UPDATING FUNCTION CONTEXT:", new_pin);

      const auth = getAuth();
      const user = auth.currentUser;
      console.log("CURRENT USER INSIDE OF UPDATING FUNCTION:", user);

      if (!user) {
        throw new Error("No user is currently logged in.");
      }
      // Validate and refresh the idToken
      try {
        const idToken = await user.getIdToken(true); // Force refresh the token
        console.log("ID Token refreshed successfully:", idToken);
      } catch (tokenError) {
        throw new Error("Failed to refresh ID token. Please try again.");
      }

      const active_email = await AsyncStorage.getItem(ACTIVE_EMAIL);
      if (!active_email) {
        // setErrorInUpdatingPIN("Active email not found. Please log in again.");
        throw new Error("Active email not found in AsyncStorage.");
      }
      console.log("ACTIVE EMAIL:", active_email);

      const old_pin = await SecureStore.getItemAsync("user_pin");
      console.log("OLD PIN AT UPDATING FUNCTION:", old_pin);
      if (!old_pin) {
        // setErrorInUpdatingPIN("Old PIN not found. Please log in again.");
        throw new Error("Old PIN not found in SecureStore.");
      }

      // Check if the PIN is the same as the old PIN
      console.log("NEW PIN:", new_pin);
      console.log("OLD PIN:", old_pin);
      if (new_pin === old_pin) {
        // setErrorInUpdatingPIN("The new PIN cannot be the same as the old PIN.");
        throw new Error("The new PIN cannot be the same as the old PIN.");
      }

      // Reauthenticate only if necessary
      try {
        const credential = EmailAuthProvider.credential(active_email, old_pin);
        const res = await reauthenticateWithCredential(user, credential);
        console.log("Reauthentication successful:", res);
      } catch (error) {
        throw new Error(
          "Reauthentication failed. Please check your credentials:",
          error.message
        );
      }

      // const credential = EmailAuthProvider.credential(active_email, old_pin);
      // const res = await reauthenticateWithCredential(user, credential);
      // console.log("Reauthentication successful:", res);

      await updatePassword(user, new_pin);
      console.log("Password updated successfully.");

      await savePin(new_pin);
      // setIsLoading(false);
      return { success: true };
    } catch (error) {
      console.error("Error updating PIN:", error.message);
      setIsLoading(false);
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
      setNew_pin("");
    }
  };

  // console.log("OLD PIN AT CONTEXT:", old_pin);

  const logSecureStore = async () => {
    try {
      const pin_found = await SecureStore.getItemAsync("user_pin");
      if (pin) {
        // setOld_pin(pin_found);
        console.log("PIN stored in SecureStore:", pin_found);
      } else {
        console.log("No PIN found in SecureStore.");
      }
    } catch (error) {
      console.error("Error reading SecureStore:", error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        globalLanguage,
        setGlobalLanguage,
        togglingGlobalLanguage,
        isLoading,
        setIsLoading,
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
        // user_added_successfully,
        registerUser,
        validatingEmail,
        loginUser,
        handlePinChange,
        setIsAuthenticated,
        checkAuthentication,
        logAsyncStorage,
        // temporaryAuthentication,
        settingPreferenceLanguage,
        signingInWithEmailAndPasswordFunction,
        renderEmailForLoginTile,
        generatingNewPINAndUpdatingUserAtFB,
        automaticPIN,
        setAutomaticPIN,
        login_action_for_multiple_emails,
        generate_PIN_action_for_multiple_emails,
        updatingPINOnDemandAndUpdatingUserAtFB,
        new_pin,
        setNew_pin,
        errorInUpdatingPIN,
        setErrorInUpdatingPIN,
        logSecureStore,
      }}
    >
      {/* {isAuthenticated ? children : null} */}
      {children}
    </GlobalContext.Provider>
  );
};
