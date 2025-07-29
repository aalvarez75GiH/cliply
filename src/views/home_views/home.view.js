import React, { useState, useRef } from "react";
import { Buffer } from "buffer";
import { Audio } from "expo-av";
import { ActivityIndicator, View } from "react-native";
import * as FileSystem from "expo-file-system";
import axios from "axios";
// import RNFFmpeg from "react-native-ffmpeg";

import { HomeHeader } from "../../components/headers/home_header.component.js";
import { Rounded_Ctas_Belt } from "../../components/belts/rounded_ctas_belt.component.js";
import { Home_process_area_1 } from "../../components/home_process_areas/home_process_area_1.component.js";
import { Home_process_area_2 } from "../../components/home_process_areas/home_process_area_2.component.js";
import { Home_process_area_3 } from "../../components/home_process_areas/home_process_area_3.component.js";
import { Home_process_area_4 } from "../../components/home_process_areas/home_process_area_4.component.js";

import { Main_mic_CTA_component } from "../../components/calls_to_action/main_mic_cta.component.js";
import {
  Action_Container,
  Container,
  Flex_Container,
  Scrollabe_MainContent,
} from "../../components/global_components/containers/general_containers.js";
// import { Scrollabe_MainContent } from "../../src/components/global_components/containers/main_content.js";
import { SafeArea } from "../../components/global_components/safe-area.component.js";
import { theme } from "../../infrastructure/theme/index.js";
import { Transcripted_Messages_Tile } from "../../components/messages_tiles/transcripted_message.tile.js";
import { transcripted_message } from "../../infrastructure/data.dummy.js";
import { Spacer } from "../../components/global_components/optimized.spacer.component.js";
import { SemiRounded_Clear_CTA } from "../../components/calls_to_action/semi_rounded_clear.cta.js";

import { Text } from "../../infrastructure/typography/text.component.js";

const transcriptedMessage = transcripted_message[0];
const { message_en, message_es, original_message } = transcriptedMessage;

export default function HomeScreen() {
  //   const fontsLoaded = useCustomFonts();
  //   if (!fontsLoaded) return null;
  const [transcribing, setTranscribing] = useState(false);
  const [recordingStatus, setRecordingStatus] = useState("idle"); // "idle", "recording", "transcribing"
  const [recording, setRecording] = useState(null);
  const [response, setResponse] = useState(null);
  const [transcription, setTranscription] = useState("");

  const action = () => {
    console.log("Action pressed!");
  };

  // *********************************************************
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

      const response = await axios.post(
        "https://us-central1-cliplybe.cloudfunctions.net/transcriptionsEndPoint/postTranscription",
        audioBuffer,
        {
          headers: {
            "Content-Type": "audio/m4a", // OR "audio/m4a" — both usually work for M4A
          },
        }
      );

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
  console.log("MESSAGE TRANSCRIPTED:", response);
  // *********************************************************

  return (
    <SafeArea background_color={theme.colors.bg.screens_bg}>
      <HomeHeader />
      <Rounded_Ctas_Belt />
      {recordingStatus !== "listening" &&
        recordingStatus !== "transcribing" &&
        !response && <Home_process_area_1 action={startRecording} />}
      {recordingStatus === "listening" && (
        <Home_process_area_2 action={stopAndTranscribe} />
      )}
      {recordingStatus === "transcribing" && (
        <Home_process_area_3 action={null} />
      )}
      {response && recordingStatus === "idle" && (
        <Home_process_area_4
          message_en={response.transcription.en}
          message_es={response.transcription.es}
          original_message={response.original_text}
          action={() => setResponse(null)}
        />
      )}
    </SafeArea>
  );
}
