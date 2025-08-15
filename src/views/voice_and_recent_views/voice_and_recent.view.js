import React, { useContext } from "react";
import { FlatList } from "react-native-gesture-handler";

import { HomeHeader } from "../../components/headers/home_header.component.js";
import { SafeArea } from "../../components/global_components/safe-area.component.js";
import { theme } from "../../infrastructure/theme/index.js";
import {
  Container,
  Scrollable_Container,
} from "../../components/global_components/containers/general_containers.js";
import { Spacer } from "../../components/global_components/optimized.spacer.component.js";

import { HomeContext } from "../../infrastructure/services/home/home.context";
import { MessagesContext } from "../../infrastructure/services/messages/messages.context.js";

import { Voice_Recording_Component } from "../../components/operations_components/voice_recording.component.js";
import { Loading_Spinner_area } from "../../components/global_components/global_loading_spinner_area.component.js";
import { Sound_Wave_Component } from "../../components/operations_components/sound_wave.component.js";
import { Home_process_area_4 } from "../../components/home_process_areas/home_process_area_4.component.js";
import { Transcripted_Text_Clip_View } from "./transcripted_text_clip.view.js";
import { Text_Tile } from "../../components/tiles/text.tile.js";

export default function Voice_and_recent_View({ navigation }) {
  const {
    startRecording,
    recordingStatus,
    response,
    startTranscription,
    setResponse,
    stopRecording,
    userData,
  } = useContext(HomeContext);
  const { recent_messages } = userData[0] || { recent_messages: [] };
  const { renderRecentMessagesTile } = useContext(MessagesContext);

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

        {!response && (
          <>
            {/* <Container height={"5%"} /> */}
            <Voice_Recording_Component
              action1={() => startRecording()}
              action2={() => stopRecording()}
              action3={() => startTranscription()}
              recordingStatus={recordingStatus}
            />
          </>
        )}

        <Spacer position="top" size="small" />

        {/* {recordingStatus === "idle" && !response && <Categories_Area />} */}
        {!response && recordingStatus === "idle" && (
          // <Categories_Area navigation={navigation} />
          <Container
            width="100%"
            height={"66%"}
            //color={theme.colors.bg.screens_bg}
            color={"red"}
          >
            <Text_Tile
              caption_1={"Recent text clips"}
              caption_2={"Last 5 text clips created"}
            />

            <Container
              width="100%"
              height="80%"
              color={theme.colors.bg.screens_bg}
            >
              {recent_messages.length > 0 && (
                <>
                  <Spacer position="top" size="medium" />
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    data={recent_messages}
                    renderItem={renderRecentMessagesTile}
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
            action={() => setResponse(null)}
          />
        )}
      </Container>
    </SafeArea>
  );
}
