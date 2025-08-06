import React, { useContext, useState } from "react";

import { HomeHeader } from "../../components/headers/home_header.component.js";
import { Rounded_Ctas_Belt } from "../../components/belts/rounded_ctas_belt.component.js";
import { Home_process_area_1 } from "../../components/home_process_areas/home_process_area_1.component.js";
import { Home_process_area_2 } from "../../components/home_process_areas/home_process_area_2.component.js";
import { Home_process_area_3 } from "../../components/home_process_areas/home_process_area_3.component.js";
import { Home_process_area_4 } from "../../components/home_process_areas/home_process_area_4.component.js";

import { SafeArea } from "../../components/global_components/safe-area.component.js";
import { theme } from "../../infrastructure/theme/index.js";
import { HomeContext } from "../../infrastructure/services/home/home.context";
import { Container } from "../../components/global_components/containers/general_containers.js";
import { Spacer } from "../../components/global_components/optimized.spacer.component.js";
import { Voice_transcription_Area } from "./home operations views/voice_transcription.area.js";
import { Loading_Spinner_area } from "./home operations views/loading_spinner.area.js";
import { Categories_Area } from "./home operations views/messages_categories.area.js";

export default function Redesigned_Home_Screen({ navigation }) {
  // const [recordingStatus, setRecordingStatus] = useState("idle");

  const {
    startRecording,
    recordingStatus,
    response,
    startTranscription,
    setResponse,
    stopRecording,
  } = useContext(HomeContext);
  // const { message_en, message_es, original_message, language_detected } =
  //   response;

  return (
    <SafeArea background_color={theme.colors.bg.screens_bg}>
      <Container
        width="100%"
        height={"100%"}
        color={theme.colors.bg.screens_bg}
        justify="center"
        align="center"
      >
        <HomeHeader action={() => navigation.navigate("Menu_View")} />
        <Rounded_Ctas_Belt
          action_1={() => navigation.navigate("Recents_View")}
        />
        <Spacer position="top" size="small" />
        {!response && (
          <Voice_transcription_Area
            action1={startRecording}
            action2={stopRecording}
            action3={startTranscription}
            recordingStatus={recordingStatus}
          />
        )}

        <Spacer position="top" size="small" />

        {recordingStatus === "idle" && !response && <Categories_Area />}

        {(recordingStatus === "listening" ||
          (recordingStatus === "transcribing" && !response)) && (
          <Container
            width="100%"
            height={"67%"}
            //color={theme.colors.bg.screens_bg}
            color={"lightblue"}
            justify="center"
            align="center"
          >
            <Loading_Spinner_area />
          </Container>
        )}

        {response && recordingStatus === "idle" && (
          <Home_process_area_4
            message_en={response.message_en}
            message_es={response.message_es}
            language_detected={response.language_detected}
            action={() => setResponse(null)}
          />
        )}
      </Container>
    </SafeArea>
  );
}
