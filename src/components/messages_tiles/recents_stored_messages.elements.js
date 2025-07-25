import React from "react";

import { Text } from "../../infrastructure/typography/text.component.js";
import {
  Container,
  Action_Container,
} from "../global_components/containers/general_containers.js";
import CopyPaste_icon from "../../../assets/my-icons/copy_paste.svg";
import { EN_ES_CTA_component } from "../calls_to_action/en_es.cta.js";
import { theme } from "../../infrastructure/theme/index.js";

// ******************* SUMMARY TILE *******************
export const Recents_Stored_Messages_Summary_Caption = ({
  summary_caption,
}) => {
  return (
    <Container
      width="100%"
      height="70%"
      align="center"
      justify="center"
      direction="row"
      color={theme.colors.bg.elements_bg}
      //color={"red"}
    >
      <Container
        width="95%"
        height="90%"
        align="center"
        justify="center"
        direction="row"
        color={theme.colors.bg.elements_bg}
      >
        <Text variant="summary_tile_caption">"{summary_caption}"</Text>
      </Container>
    </Container>
  );
};
export const Recents_Stored_Messages_Summary_Footer = ({
  action,
  changeLanguage,
  language,
}) => {
  return (
    <Container
      width="100%"
      height="30%"
      align="center"
      justify="center"
      direction="row"
      color={theme.colors.bg.elements_bg}
    >
      <Container
        width="30%"
        height="75%"
        align="flex-start"
        justify="flex-start"
        direction="row"
        color={theme.colors.bg.elements_bg}
      >
        <EN_ES_CTA_component
          language={language === "EN" ? "ES" : "EN"}
          action={changeLanguage}
          //   isSelected={isSelected}
        />
      </Container>
      <Action_Container
        width="30%"
        height="65%"
        align="center"
        justify="center"
        direction="column"
        color={theme.colors.bg.elements_bg}
      >
        <Text variant="underlined_small_caption">Delete</Text>
      </Action_Container>
      <Container
        width="30%"
        height="65%"
        align="flex-end"
        justify="flex-end"
        direction="row"
        color={theme.colors.bg.elements_bg}
      >
        <Action_Container
          width="65px"
          onPress={action}
          color={theme.colors.bg.elements_bg}
        >
          <CopyPaste_icon
            width="40px"
            height="40px"
            fill={theme.colors.text.middle_screens_text}
          />
        </Action_Container>
      </Container>
    </Container>
  );
};
// ******************* WHOLE MESSAGE TILE *******************
export const Recents_Stored_Message_Caption = ({ message_caption }) => {
  console.log("MESSAGE CAPTION AT FUNCTION:", message_caption);

  return (
    <Container
      width="100%"
      height="70%"
      align="center"
      justify="center"
      direction="row"
      color={theme.colors.ui.success}
      //   color={"red"}
    >
      <Container
        width="95%"
        height="90%"
        align="center"
        justify="center"
        direction="row"
        color={theme.colors.ui.success}
        //color={"red"}
      >
        <Text variant="copied_message_tile_caption">"{message_caption}"</Text>
      </Container>
    </Container>
  );
};
export const Recents_Stored_Message_Footer = ({ uncopy_action }) => {
  return (
    <Container
      width="100%"
      height="30%"
      align="center"
      justify="flex-end"
      direction="row"
      color={theme.colors.ui.success}
      //   color={"red"}
    >
      <Container
        width="30%"
        height="65%"
        align="flex-end"
        justify="flex-end"
        direction="row"
        // color={"blue"}
        color={theme.colors.ui.success}
      >
        <Action_Container
          width="100%"
          height="100%"
          onPress={uncopy_action}
          justify="center"
          align="center"
          color={theme.colors.ui.success}
        >
          <Text variant="stages_ctas_white">Uncopy</Text>
        </Action_Container>
      </Container>
    </Container>
  );
};
