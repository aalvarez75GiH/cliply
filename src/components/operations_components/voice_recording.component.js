import React from "react";

import { theme } from "../../infrastructure/theme";
import { Container } from "../../components/global_components/containers/general_containers";
import { Main_mic_CTA_component } from "../../components/calls_to_action/main_mic_cta.component";

export const Voice_Recording_Component = ({
  action1,
  action2,
  action3,
  recordingStatus,
}) => {
  return (
    <Container
      width="100%"
      height={recordingStatus === "idle" ? "25%" : "10.3%"}
      // color={"red"}
      color={theme.colors.bg.elements_bg}
      justify="center"
      align="center"
    >
      <Main_mic_CTA_component
        action1={action1}
        action2={action2}
        action3={action3}
        recordingStatus={recordingStatus}
        caption_line_1="Tap to record a voice clip"
        caption_line_2="then, just copy & paste to any chat you want"
      />
    </Container>
  );
};
