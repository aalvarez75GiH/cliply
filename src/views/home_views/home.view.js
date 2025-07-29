import React, { useContext } from "react";

import { HomeHeader } from "../../components/headers/home_header.component.js";
import { Rounded_Ctas_Belt } from "../../components/belts/rounded_ctas_belt.component.js";
import { Home_process_area_1 } from "../../components/home_process_areas/home_process_area_1.component.js";
import { Home_process_area_2 } from "../../components/home_process_areas/home_process_area_2.component.js";
import { Home_process_area_3 } from "../../components/home_process_areas/home_process_area_3.component.js";
import { Home_process_area_4 } from "../../components/home_process_areas/home_process_area_4.component.js";

import { SafeArea } from "../../components/global_components/safe-area.component.js";
import { theme } from "../../infrastructure/theme/index.js";
import { HomeContext } from "../../infrastructure/services/home/home.context";

// ********************** FOR TESTING WITH DUMMY DATA **********************
import { transcripted_message } from "../../infrastructure/data.dummy.js";

const transcriptedMessage = transcripted_message[0];
const { message_en, message_es, original_message } = transcriptedMessage;
// *************************************************************************

export default function HomeScreen() {
  const {
    startRecording,
    recordingStatus,
    response,
    stopAndTranscribe,
    setResponse,
  } = useContext(HomeContext);

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
