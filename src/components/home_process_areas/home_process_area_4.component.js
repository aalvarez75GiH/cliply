import React, { useState } from "react";

import {
  Container,
  Action_Container,
  Flex_Container,
} from "../global_components/containers/general_containers.js";
import { Transcripted_Messages_Tile } from "../messages_tiles/transcripted_message.tile.js";
import { theme } from "../../infrastructure/theme/index.js";
import { SemiRounded_Clear_CTA } from "../calls_to_action/semi_rounded_clear.cta.js";

export const Home_process_area_4 = ({
  message_en,
  message_es,
  original_message,
  action,
  language_detected,
}) => {
  return (
    <>
      <Container
        width={"100%"}
        height={"82%"}
        color={theme.colors.bg.screens_bg}
        //color={"green"}
        align="center"
        justify="center"
      >
        <Transcripted_Messages_Tile
          message_en={message_en}
          message_es={message_es}
          original_message={original_message}
          language_detected={language_detected}
        />
        <Container
          width={"100%"}
          height={"12%"}
          justify="center"
          align="center"
          direction="row"
          //color={"red"}
          style={{
            position: "absolute",
            top: 450,
          }}
          color={theme.colors.bg.screens_bg}
        >
          <SemiRounded_Clear_CTA action={action} />
        </Container>
      </Container>
    </>
  );
};
