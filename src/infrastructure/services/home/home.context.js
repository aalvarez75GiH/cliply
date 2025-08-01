import React, { createContext, useState, useRef } from "react";
import "react-native-get-random-values";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";
import { Buffer } from "buffer";
import { v4 as uuidv4 } from "uuid";

import { post_a_voice_message_Request } from "./home.requests.js";
import { recent_messages } from "../../data.dummy.js";

export const HomeContext = createContext();

export const HomeContextProvider = ({ children }) => {
  const [recordingStatus, setRecordingStatus] = useState("idle"); // "idle", "recording", "transcribing"
  const [recording, setRecording] = useState(null);
  const [response, setResponse] = useState(null);

  const recordingRef = useRef(null);

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

  const stopAndTranscribe = async () => {
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

      const response = await post_a_voice_message_Request(audioBuffer);
      console.log("RESPONSE:", JSON.stringify(response.data, null, 2));

      //   ********* ADDING TO RECENT MESSAGES ARRAY *********
      const recent_message_to_add = {
        original_message: response.data.original_message,
        summary_en: response.data.summary_en,
        summary_es: response.data.summary_es,
        message_en: response.data.message_en,
        message_es: response.data.message_es,
        used: 0,
        language_detected: response.data.language_detected,
        message_id: uuidv4(),
      };
      console.log(
        "RECENT MESSAGE TO ADD:",
        JSON.stringify(recent_message_to_add, null, 2)
      );
      recent_messages.push(recent_message_to_add);
      console.log("ARRAY:", JSON.stringify(recent_messages, null, 2));
      //   ***************************************************

      if (response.data) {
        setResponse(response.data);
        setRecordingStatus("idle");
      }
    } catch (err) {
      console.error("Transcription failed:", err.message);
      setRecordingStatus("idle");
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
        stopAndTranscribe,
        setResponse,
        response,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
