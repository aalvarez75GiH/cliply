import React from "react";

import { theme } from "../../../infrastructure/theme";
import { Container } from "../../../components/global_components/containers/general_containers";
import { Main_mic_CTA_component } from "../../../components/calls_to_action/main_mic_cta.component";

export const Voice_transcription_Area = ({
  action1,
  action2,
  action3,
  recordingStatus,
}) => {
  return (
    <Container
      width="100%"
      height={"15%"}
      color={theme.colors.bg.elements_bg}
      //   color={"red"}
      justify="center"
      align="center"
    >
      <Main_mic_CTA_component
        // action={() => setTranscribing(!transcribing)}
        action1={action1}
        action2={action2}
        action3={action3}
        recordingStatus={recordingStatus}
        caption_line_1="Create a new message using"
        caption_line_2="your voice"
      />
    </Container>
  );
};
