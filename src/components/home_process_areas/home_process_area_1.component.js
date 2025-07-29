import React, { useState } from "react";

import {
  Container,
  Action_Container,
} from "../global_components/containers/general_containers.js";
import { SafeArea } from "../global_components/safe-area.component.js";
import { Main_mic_CTA_component } from "../calls_to_action/main_mic_cta.component.js";
import { theme } from "../../infrastructure/theme/index.js";

export const Home_process_area_1 = ({ action }) => {
  return (
    <>
      <Container
        width={"100%"}
        height={"82%"}
        justify="center"
        align="center"
        color={theme.colors.bg.screens_bg}
        // color={"lightblue"}
      >
        <Main_mic_CTA_component
          // action={() => setTranscribing(!transcribing)}
          action={action}
        />
      </Container>
    </>
  );
};
