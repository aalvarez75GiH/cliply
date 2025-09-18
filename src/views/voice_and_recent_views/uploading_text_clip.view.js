import React, { useState, useContext } from "react";
import { Platform } from "react-native";

import { ExitHeader } from "../../components/headers/exit_header.component.js";
import { SafeArea } from "../../components/global_components/safe-area.component.js";
import { theme } from "../../infrastructure/theme/index.js";
import { Container } from "../../components/global_components/containers/general_containers.js";
import { Spacer } from "../../components/global_components/optimized.spacer.component.js";
import { TextClipsContext } from "../../infrastructure/services/home/text_clips.context.js";
import { Text } from "../../infrastructure/typography/text.component.js";
import { Uploading_text_clip_Tile } from "../../components/tiles/uploading_text_clip.tile.js";
import { Squared_action_CTA_component } from "../../components/calls_to_action/squared_action.cta.js";
import CloudIcon from "../../../assets/my-icons/cloud_1.svg";
import { Loading_Spinner_area } from "../../components/global_components/global_loading_spinner_area.component.js";

import { VoiceRecentClipsContext } from "../../infrastructure/services/voice_recents/voice_recent.context.js";

export default function Uploading_Text_Clip_View({ navigation, route }) {
  const { operation, setOperation } = useContext(TextClipsContext);
  const {
    setTextClip_data_to_upload,
    textClip_data_to_upload,
    resetState,
    posting_new_text_clip_to_upload,
    isLoading,
  } = useContext(VoiceRecentClipsContext);
  const { operation_label, status_label } = route.params;
  console.log(
    "TEXT CLIP DATA TO UPLOAD AT SELECTING UPLOADING TEXT CLIP VIEW:",
    JSON.stringify(textClip_data_to_upload, null, 2)
  );

  const action_after_posting = async (textClip_data_to_upload) => {
    const response_status = await posting_new_text_clip_to_upload(
      textClip_data_to_upload
    );
    if (response_status === 201) {
      navigation.navigate("Added_item");
    }
  };
  return (
    <SafeArea background_color={theme.colors.bg.elements_bg}>
      <Container
        width="100%"
        height={"100%"}
        color={theme.colors.bg.screens_bg}
        justify="center"
        align="center"
      >
        {/* <Spacer position="top" size="large" />
        <Spacer position="top" size="large" /> */}
        {/* <Spacer position="top" size="large" /> */}
        <ExitHeader action={() => navigation.goBack()} />
        {isLoading && <Loading_Spinner_area />}
        {!isLoading && (
          <>
            <Container
              width={"100%"}
              height={"55%"}
              color={theme.colors.bg.screens_bg}
              // color={"lightblue"}
              align="center"
              justify="center"
            >
              <Uploading_text_clip_Tile
                textClip_data_to_upload={textClip_data_to_upload}
                operation_label={operation_label}
                status_label={status_label}
              />
            </Container>
            <Container
              width={"100%"}
              height={"40%"}
              justify="flex-start"
              align="center"
              direction="column"
              color={theme.colors.bg.screens_bg}
            >
              <Squared_action_CTA_component
                // action={null}
                action={() => action_after_posting(textClip_data_to_upload)}
                label="Upload"
                width="95%"
                height={"17%"}
                color={theme.colors.ui.primary}
                text_variant={"dm_sans_bold_16_white"}
                Icon={<CloudIcon width={35} height={35} fill={"white"} />}
              />
              <Spacer position="top" size="medium" />
              <Squared_action_CTA_component
                label="Exit"
                width="95%"
                height={"17%"}
                color={theme.colors.ui.highlight_color}
                text_variant={"dm_sans_bold_16"}
                icon_visible={false}
                action={() => navigation.goBack()}
              />
            </Container>
          </>
        )}
      </Container>
    </SafeArea>
  );
}
