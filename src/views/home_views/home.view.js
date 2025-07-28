import React, { useState, useRef } from "react";
import { Buffer } from "buffer";
import { Audio } from "expo-av";
import { ActivityIndicator, View } from "react-native";
import * as FileSystem from "expo-file-system";
import axios from "axios";
// import RNFFmpeg from "react-native-ffmpeg";
import { Rounded_Ctas_Belt } from "../../components/belts/rounded_ctas_belt.component.js";
import { Main_mic_CTA_component } from "../../components/calls_to_action/main_mic_cta.component.js";
import {
  Action_Container,
  Container,
  Flex_Container,
  Scrollabe_MainContent,
} from "../../components/global_components/containers/general_containers.js";
// import { Scrollabe_MainContent } from "../../src/components/global_components/containers/main_content.js";
import { HomeHeader } from "../../components/headers/home_header.component.js";
import { SafeArea } from "../../components/global_components/safe-area.component.js";
import { theme } from "../../infrastructure/theme/index.js";
import { Transcripted_Messages_Tile } from "../../components/messages_tiles/transcripted_message.tile.js";
import { transcripted_message } from "../../infrastructure/data.dummy.js";
import { Spacer } from "../../components/global_components/optimized.spacer.component.js";
import { SemiRounded_Clear_CTA } from "../../components/calls_to_action/semi_rounded_clear.cta.js";

import { Text } from "../../infrastructure/typography/text.component.js";

const transcriptedMessage = transcripted_message[0];

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
      await recordingRef.current.stopAndUnloadAsync();
      const uri = recordingRef.current.getURI();

      // Optional: display file URI for debugging
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
      if (response && response.data) {
        setResponse(response.data);
      }

      setRecordingStatus("idle");
    } catch (err) {
      console.error("Transcription failed:", err.message);
      setRecordingStatus("idle");
    }
  };
  console.log("MESSAGE TRANSCRIPTED:", response);
  // *********************************************************

  return (
    <SafeArea background_color="#FFFFFF">
      <Flex_Container
        align="center"
        color={theme.colors.ui.secondary}
        // flex={1}
      >
        <HomeHeader />
        <Container
          width={"100%"}
          height={"92%"}
          // justify="center"
          align="center"
          color={theme.colors.bg.screens_bg}
        >
          <Rounded_Ctas_Belt action={action} />
          {recordingStatus === "listening" && (
            <Scrollabe_MainContent>
              <Container
                width={"100%"}
                height={"99%"}
                justify="center"
                align="center"
                color={theme.colors.bg.screens_bg}
              >
                <Container
                  width={"100%"}
                  height={"99%"}
                  justify="center"
                  align="center"
                  direction="row"
                  // color={theme.colors.bg.screens_bg}
                  color={theme.colors.bg.screens_bg}
                >
                  <ActivityIndicator size="small" color="#000000" />
                  <Spacer position="left" size="large" />
                  <Text variant="middle_screens_caption">Listening...</Text>
                </Container>
              </Container>
            </Scrollabe_MainContent>
          )}
          {recordingStatus === "transcribing" && (
            <Scrollabe_MainContent>
              <Container
                width={"100%"}
                height={"99%"}
                justify="center"
                align="center"
                color={theme.colors.bg.screens_bg}
              >
                <Container
                  width={"100%"}
                  height={"99%"}
                  justify="center"
                  align="center"
                  direction="row"
                  // color={theme.colors.bg.screens_bg}
                  color={theme.colors.bg.screens_bg}
                >
                  <ActivityIndicator size="small" color="#000000" />
                  <Spacer position="left" size="large" />
                  <Text variant="middle_screens_caption">Transcribing...</Text>
                </Container>
              </Container>
            </Scrollabe_MainContent>
          )}
          <Scrollabe_MainContent
            width={"100%"}
            height={"89%"}
            color={theme.colors.bg.screens_bg}
            // color={"red"}
          >
            {response && recordingStatus === "idle" && (
              <>
                <Transcripted_Messages_Tile
                  message_en={response.transcription.en}
                  message_es={response.transcription.es}
                  original_message={response.original_text}
                />
                <Spacer position="top" size="large" />
                <Spacer position="top" size="large" />
                <Spacer position="top" size="large" />
                <Spacer position="top" size="large" />
                <Spacer position="top" size="large" />
                <Spacer position="top" size="large" />
                <Spacer position="top" size="large" />
                <Spacer position="top" size="large" />
                <Spacer position="top" size="large" />
                <Spacer position="top" size="large" />
                <Spacer position="top" size="large" />
                <Spacer position="top" size="large" />
                <Spacer position="top" size="large" />
                <Spacer position="top" size="large" />
                <Spacer position="top" size="large" />
                <Spacer position="top" size="large" />
                <Spacer position="top" size="large" />
                <Spacer position="top" size="large" />
                <Spacer position="top" size="large" />
                <Spacer position="top" size="large" />
                <Spacer position="top" size="large" />
                <Spacer position="top" size="large" />
                <Spacer position="top" size="large" />
                <Spacer position="top" size="large" />
                <Spacer position="top" size="large" />
                <Spacer position="top" size="large" />
                <Spacer position="top" size="large" />
                <Spacer position="top" size="large" />
                <SemiRounded_Clear_CTA action={() => setResponse(null)} />
              </>
            )}
            {recordingStatus === "idle" && !response && (
              <Main_mic_CTA_component
                // action={() => setTranscribing(!transcribing)}
                action={startRecording}
              />
            )}
            <Spacer position="top" size="large" />
            <Spacer position="top" size="large" />
            <Spacer position="top" size="large" />
            <Spacer position="top" size="large" />
            <Spacer position="top" size="large" />
            <Spacer position="top" size="large" />
            <Spacer position="top" size="large" />
            <Spacer position="top" size="large" />
            <Spacer position="top" size="large" />
            <Spacer position="top" size="large" />
            <Spacer position="top" size="large" />
          </Scrollabe_MainContent>
          {recordingStatus === "listening" && (
            <Action_Container
              width={"100%"}
              height={"10%"}
              justify="center"
              align="center"
              direction="column"
              // color={theme.colors.bg.screens_bg}
              color={theme.colors.ui.primary}
              // onPress={() => setRecordingStatus("idle")}
              onPress={stopAndTranscribe}
            >
              <Text variant="transcripted_message_copied_caption">
                Transcribe
              </Text>
            </Action_Container>
          )}
        </Container>
      </Flex_Container>
    </SafeArea>
  );
}
