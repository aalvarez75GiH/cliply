import React from "react";
import { View, TouchableOpacity } from "react-native";

import { Text } from "../../infrastructure/typography/text.component.js";
import { EN_ES_CTA_component } from "../calls_to_action/en_es.cta.js";
import {
  Container,
  Action_Container,
} from "../global_components/containers/general_containers.js";
import CopyPaste_icon from "../../../assets/my-icons/copy_paste.svg";
import { theme } from "../../infrastructure/theme/index.js";

export const Recents_Stored_Messages_Tile = ({ caption, onPress }) => {
  return (
    <Container
      width="410px"
      height="210px"
      align="center"
      justify="flex-start"
      color={theme.colors.bg.elements_bg}
      //   color={"purple"}
      direction="column"
      style={{
        shadowColor: "#000", // iOS shadow color
        shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
        shadowOpacity: 0.25, // iOS shadow opacity
        shadowRadius: 3.84, // iOS shadow radius
        elevation: 5, // Android shadow
      }}
    >
      <Container
        width="100%"
        height="70%"
        align="center"
        justify="center"
        direction="row"
        color={theme.colors.bg.elements_bg}
        // color={"red"}
      >
        <Container
          width="95%"
          height="90%"
          align="center"
          justify="center"
          direction="row"
          color={theme.colors.bg.elements_bg}
          //   color={"lightblue"}
        >
          <Text variant="summary_tile_caption">"{caption}"</Text>
          {/* <Text variant="copied_message_tile_caption">"{caption}"</Text> */}
        </Container>
      </Container>
      <Container
        width="100%"
        height="30%"
        align="center"
        justify="center"
        direction="row"
        color={theme.colors.bg.elements_bg}
        // color={"blue"}
      >
        <Container
          width="30%"
          height="75%"
          align="flex-start"
          justify="flex-start"
          direction="row"
          color={theme.colors.bg.elements_bg}
          //   color={"brown"}
        >
          <EN_ES_CTA_component language="EN" action={onPress} />
        </Container>
        <Action_Container
          width="30%"
          height="65%"
          align="center"
          justify="center"
          direction="column"
          color={theme.colors.bg.elements_bg}
          //   color={"yellow"}
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
          //   color={"pink"}
        >
          <TouchableOpacity onPress={onPress}>
            <CopyPaste_icon
              width="40px"
              height="40px"
              fill={theme.colors.text.middle_screens_text}
            />
          </TouchableOpacity>
        </Container>
      </Container>
    </Container>
  );
};
