import React, { createContext, useState, useRef } from "react";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";
import { Buffer } from "buffer";

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
      const recent_message_to_add = {
        summary_en: response.data.summary.en,
        summary_es: response.data.summary.es,
        message_en: response.data.transcription.en,
        message_es: response.data.transcription.es,
        used: 0,
      };
      recent_messages.push(recent_message_to_add);

      console.log("RESPONSE:", JSON.stringify(response.data, null, 2));
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
