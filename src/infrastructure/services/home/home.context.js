import React, {
  createContext,
  useState,
  useRef,
  useContext,
  useEffect,
} from "react";
import "react-native-get-random-values";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";
import { Buffer } from "buffer";
import { v4 as uuidv4 } from "uuid";

import { post_a_voice_message_Request } from "./home.requests.js";
import { recent_messages } from "../../data.dummy.js";
import { GlobalContext } from "../global/global.context.js";
import { get_User_Data_Request } from "./home.requests.js";

export const HomeContext = createContext();

export const HomeContextProvider = ({ children }) => {
  const [recordingStatus, setRecordingStatus] = useState("idle"); // "idle", "recording", "transcribing"
  const [recording, setRecording] = useState(null);
  const [response, setResponse] = useState(null);
  const [userData, setUserData] = useState(null);

  const { userToDB } = useContext(GlobalContext);
  const { user_id } = userToDB || {}; // Ensure userToDB is not undefined or null
  console.log("USER ID AT HOME CONTEXT:", user_id);

  useEffect(() => {
    gettingUserData(user_id);
  }, []);

  const gettingUserData = async (user_id) => {
    try {
      const user_data = await get_User_Data_Request(user_id);
      setUserData(user_data.data);
    } catch (error) {
      console.error("ERROR GETTING USER DATA AT HOME CONTEXT:", error.message);
    }
  };

  const recordingRef = useRef(null);
  console.log("USER DATA AT STATE:", JSON.stringify(userData, null, 2));

  const startRecording = async () => {
    try {
      setRecordingStatus("listening");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      recordingRef.current = recording;
      setRecording(recording);
    } catch (err) {
      console.error("Failed to start recording:", err);
      setRecordingStatus("idle");
    }
  };

  const startTranscription = async () => {
    try {
      setRecordingStatus("transcribing");
      //   setRecordingStatus("idle");

      await recordingRef.current.stopAndUnloadAsync();
      const uri = recordingRef.current.getURI();

      //Optional: display file URI for debugging
      console.log("Recording URI:", uri);

      // Send to your Firebase function

      const audioBase64 = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      const audioBuffer = Buffer.from(audioBase64, "base64");

      console.log("USER ID BEFORE  TRANSCRIPTION REQUEST:", user_id);
      const response = await post_a_voice_message_Request(audioBuffer, user_id);

      console.log(
        "RESPONSE AT START TRANSCRIPTION FUNCTION:",
        JSON.stringify(response.data, null, 2)
      );

      if (response.data) {
        setResponse(response.data);
        setRecordingStatus("idle");
        gettingUserData(user_id);
      }
    } catch (err) {
      console.error("Transcription failed:", err.message);
      setRecordingStatus("idle");
    }
  };

  const stopRecording = async () => {
    try {
      if (recordingRef.current) {
        await recordingRef.current.stopAndUnloadAsync();
        setRecordingStatus("idle");
      }
    } catch (err) {
      console.error("Failed to stop recording:", err);
    }
  };

  // This context is currently empty, but can be expanded in the future
  return (
    <HomeContext.Provider
      value={{
        startRecording,
        recordingStatus,
        setRecordingStatus,
        recordingRef,
        startTranscription,
        setResponse,
        response,
        stopRecording,
        userData,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
