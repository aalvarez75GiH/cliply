import React, { useContext } from "react";
import { FlatList } from "react-native-gesture-handler";

import { HomeHeader } from "../../components/headers/home_header.component.js";
import { SafeArea } from "../../components/global_components/safe-area.component.js";
import { theme } from "../../infrastructure/theme/index.js";
import { Container } from "../../components/global_components/containers/general_containers.js";
import { Spacer } from "../../components/global_components/optimized.spacer.component.js";

import { TextClipsContext } from "../../infrastructure/services/home/text_clips.context.js";
import { VoiceRecentClipsContext } from "../../infrastructure/services/voice_recents/voice_recent.context.js";

import { Voice_Recording_Component } from "../../components/operations_components/voice_recording.component.js";
import { Loading_Spinner_area } from "../../components/global_components/global_loading_spinner_area.component.js";
import { Sound_Wave_Component } from "../../components/operations_components/sound_wave.component.js";
import { Home_process_area_4 } from "../../components/home_process_areas/home_process_area_4.component.js";
import { Transcripted_Text_Clip_View } from "./transcripted_text_clip.view.js";
import { Text_Tile } from "../../components/tiles/text.tile.js";

export default function Voice_and_recent_View({ navigation }) {
  const {
    //   startRecording,
    //   recordingStatus,
    //   response,
    //   startTranscription,
    //   setResponse,
    //   stopRecording,
    userData,
  } = useContext(TextClipsContext);
  const { recent_messages } = userData[0] || { recent_messages: [] };
  const {
    renderRecentClipsTile,
    startRecording,
    recordingStatus,
    response,
    startTranscription,
    setResponse,
    stopRecording,
  } = useContext(VoiceRecentClipsContext);
  // const [recordingStatus, setRecordingStatus] = React.useState("idle");
  // const [response, setResponse] = React.useState(null);
  return (
    <SafeArea background_color={theme.colors.bg.elements_bg}>
      <Container
        width="100%"
        height={"100%"}
        color={theme.colors.bg.screens_bg}
        justify="center"
        align="center"
      >
        <HomeHeader action={() => navigation.navigate("Menu_View")} />
        <Container
          width="100%"
          height={"1%"}
          color={theme.colors.bg.screens_bg}
        />
        {!response && (
          <>
            <Voice_Recording_Component
              action1={() => startRecording()}
              //action1={() => setRecordingStatus("listening")}
              //action2={() => setRecordingStatus("idle")}
              action2={() => stopRecording()}
              action3={() => startTranscription()}
              //action3={() => setRecordingStatus("transcribing")}
              recordingStatus={recordingStatus}
            />
          </>
        )}

        <Spacer position="top" size="medium" />

        {!response && recordingStatus === "idle" && (
          <Container
            width="100%"
            height={"70%"}
            color={theme.colors.bg.screens_bg}
            //color={"red"}
          >
            <Text_Tile
              caption_1={"Recent text clips"}
              caption_2={"Last 5 text clips created"}
              color={theme.colors.ui.highlight_color_2}
            />

            <Container
              width="100%"
              height="80%"
              color={theme.colors.bg.screens_bg}
              //color={"blue"}
            >
              {recent_messages.length > 0 && (
                <>
                  <Spacer position="top" size="medium" />
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    data={recent_messages}
                    renderItem={renderRecentClipsTile}
                    keyExtractor={(item, id) => {
                      return item.message_id;
                    }}
                  />
                </>
              )}
            </Container>
          </Container>
        )}
        {recordingStatus === "listening" && !response && (
          <>
            <Container
              width="100%"
              // height={"67%"}
              height={"80.5%"}
              color={"lightblue"}
              justify="center"
              align="center"
            >
              <Sound_Wave_Component />
            </Container>
          </>
        )}
        {recordingStatus === "transcribing" && !response && (
          <Container
            width="100%"
            height={"80.5%"}
            color={"lightblue"}
            justify="center"
            align="center"
          >
            <Loading_Spinner_area />
          </Container>
        )}

        {response && recordingStatus === "idle" && (
          <Transcripted_Text_Clip_View
            message_en={response.message_en}
            message_es={response.message_es}
            language_detected={response.language_detected}
            action_1={() => null}
            action_2={() => setResponse(null)}
          />
        )}
      </Container>
    </SafeArea>
  );
}
