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
import { posting_new_text_clip_request } from "./voice_recent.requests";

import { GlobalContext } from "../global/global.context";
import { TextClipsContext } from "../home/text_clips.context";

export const VoiceRecentClipsContext = createContext();

export const VoiceRecentClipsContextProvider = ({ children }) => {
  const { gettingUserData, operation } = useContext(TextClipsContext);
  const { globalLanguage, userToDB } = useContext(GlobalContext);
  const { user_id } = userToDB || {}; // Ensure userToDB is not undefined or null

  const [isLoading, setIsLoading] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [response, setResponse] = useState(null);
  const [recordingStatus, setRecordingStatus] = useState("idle");
  const [recording, setRecording] = useState(null);
  const [deletedStatus, setDeletedStatus] = useState(false);
  const [textClip_data_to_upload, setTextClip_data_to_upload] = useState({
    user_id: user_id,
    operation_name: operation,
    status_name: "",
    new_message: {},
  });

  useEffect(() => {
    return () => {
      setDeletedStatus(false);
    };
  }, [user_id]);

  const text_clip_data_initialState = {
    user_id: user_id,
    operation_name: "food_delivery",
    status_name: "",
    new_message: {},
  };
  const resetState = () => {
    setTextClip_data_to_upload(text_clip_data_initialState);
  };

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

  const formattedDate = (createdAt) => {
    const date = new Date(createdAt);
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year
    return `${month}/${day}/${year}`;
  };

  const renderRecentClipsTile = ({ item }) => {
    const { createdAt } = item;
    const date_formatted = formattedDate(createdAt);
    return (
      <Spacer position="bottom" size="medium">
        <Recent_clips_Tile
          item={item}
          globalLanguage={globalLanguage}
          date_formatted={date_formatted}
        />
      </Spacer>
    );
  };

  const delete_one_recent_clip = async (message_id, user_id) => {
    console.log("Deleting item with ID:", message_id);
    console.log("User ID for deletion:", user_id);

    try {
      setIsLoading(true);
      const requestBody = {
        data_to_delete: {
          user_id: user_id,
          item_id: message_id, // Rename `message_id` to `item_id`
        },
      };
      const response = await deleteRecentTextClipRequest(requestBody);

      if (response.status === 404) {
        setDeletedStatus(false);
        gettingUserData(user_id);
        console.log("No matching record found to delete.");
      }
      if (response.status === 500) {
        setDeletedStatus(false);
        console.log("An error occurred while deleting the recent message.");
      }
      if (response.status === 200) {
        console.log("Item deleted successfully.");
        setDeletedStatus(true);
        gettingUserData(user_id);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      setDeletedStatus(false);
    } finally {
      setIsLoading(false);
    }
  };

  const posting_new_text_clip_to_upload = async (new_text_clip) => {
    setIsLoading(true);
    try {
      const response = await posting_new_text_clip_request(new_text_clip);
      console.log("RESPONSE AT POSTING NEW TEXT CLIP TO UPLOAD:", response);

      if (response.status === 404) {
        gettingUserData(user_id);
        console.log("No matching record found to delete.");
      }
      if (response.status === 500) {
        console.log("An error occurred while deleting the recent message.");
      }
      if (response.status === 201) {
        console.log("Text Clip added successfully.");
        gettingUserData(user_id);
        return response.status;
      }
    } catch (error) {
      console.error("Error posting new text clip:", error);
    } finally {
      setIsLoading(false);
    }
  };

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
        delete_one_recent_clip,
        deletedStatus,
        setDeletedStatus,
        setTextClip_data_to_upload,
        textClip_data_to_upload,
        resetState,
        posting_new_text_clip_to_upload,
      }}
    >
      {children}
    </VoiceRecentClipsContext.Provider>
  );
};
