import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Container } from "../global_components/containers/general_containers.js";
import { theme } from "../../infrastructure/theme/index.js";
import { HomeHeader } from "../headers/home_header.component.js";
import { Transcripted_Messages_Tile } from "../messages_tiles/transcripted_message.tile.js";
import { Rounded_Ctas_Belt } from "../belts/rounded_ctas_belt.component.js";
import { SemiRounded_Clear_CTA } from "../calls_to_action/semi_rounded_clear.cta.js";

export const Type_message_process_area_2 = ({
  message_en,
  message_es,
  original_message,
  language_detected,
  setResponse,
}) => {
  const navigation = useNavigation();
  return (
    <>
      <HomeHeader />
      {/* <Spacer position="top" size="small" /> */}
      <Rounded_Ctas_Belt action_1={() => navigation.navigate("Recents_View")} />
      <Container
        width={"100%"}
        height={"73%"}
        color={theme.colors.bg.screens_bg}
        //color={"#FAD"}
        justify="center"
        align="center"
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
          <SemiRounded_Clear_CTA
            action={() => {
              setResponse(null);
              navigation.navigate("Home");
            }}
          />
          {/* <SemiRounded_Clear_CTA action={() => setResponse(null)} /> */}
        </Container>
      </Container>
      <Container
        width={"100%"}
        height={"10%"}
        justify="space-between"
        align="center"
        color={theme.colors.bg.screens_bg}
      ></Container>
    </>
  );
};
