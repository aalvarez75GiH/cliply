import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";
import { Buffer } from "buffer";

import { Spacer } from "../../../components/global_components/optimized.spacer.component";
import { Recent_clips_Tile } from "../../../components/tiles/recent_clips.tile";
import { post_a_voice_message_Request } from "../voice_recents/voice_recent.requests";
import { deleteRecentTextClipRequest } from "../voice_recents/voice_recent.requests";

import { GlobalContext } from "../global/global.context";
import { TextClipsContext } from "../home/text_clips.context";

export const VoiceRecentClipsContext = createContext();

export const VoiceRecentClipsContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [response, setResponse] = useState(null);
  const [recordingStatus, setRecordingStatus] = useState("idle");
  const [recording, setRecording] = useState(null);
  const [deletedStatus, setDeletedStatus] = useState(false);

  const { gettingUserData } = useContext(TextClipsContext);
  const { globalLanguage, userToDB } = useContext(GlobalContext);
  const { user_id } = userToDB || {}; // Ensure userToDB is not undefined or null

  useEffect(() => {
    return () => {
      setDeletedStatus(false);
    };
  }, [user_id]);

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

  const renderRecentClipsTile = ({ item }) => {
    return (
      <Spacer position="bottom" size="medium">
        <Recent_clips_Tile
          item={item}
          globalLanguage={globalLanguage}
          setIsLoading={setIsLoading}
          selectedItemId={selectedItemId}
          onSelect={setSelectedItemId}
          isLoading={isLoading}
        />
      </Spacer>
    );
  };

  const delete_recent_clip = async (message_id, user_id) => {
    console.log("Deleting item with ID:", message_id);
    console.log("User ID for deletion:", user_id);

    const data_to_delete = {
      user_id: user_id,
      item_id: message_id, // Rename `message_id` to `item_id`
    };
    const requestBody = {
      data_to_delete: data_to_delete, // Nest `data_to_delete` inside another object
    };

    console.log(
      "DATA TO DELETE AT CONTEXT:",
      JSON.stringify(data_to_delete, null, 2)
    );

    const response = await deleteRecentTextClipRequest(requestBody);
    console.log("DATA DELETED RESPONSE:", response.status);
    response.status === 200 ? setDeletedStatus(true) : setDeletedStatus(false);
    // Implement deletion logic here
  };

  // This context is currently empty, but can be expanded in the future
  return (
    <VoiceRecentClipsContext.Provider
      value={{
        globalLanguage,
        isLoading,
        setIsLoading,
        renderRecentClipsTile,
        response,
        startRecording,
        recordingStatus,
        setRecordingStatus,
        recordingRef,
        startTranscription,
        setResponse,
        stopRecording,
        delete_recent_clip,
        deletedStatus,
        setDeletedStatus,
      }}
    >
      {children}
    </VoiceRecentClipsContext.Provider>
  );
};
