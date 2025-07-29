import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../../infrastructure/typography/text.component.js";
import { theme } from "../../infrastructure/theme/index.js";
import {
  Container,
  Action_Container,
} from "../global_components/containers/general_containers.js";

export const SemiRounded_Clear_CTA = ({ action }) => {
  return (
    <Action_Container
      width={"120px"}
      height={"40px"}
      justify="center"
      align="center"
      color={theme.colors.bg.elements_bg}
      // color={theme.colors.ui.success}
      // color={theme.colors.bg.elements_bg}
      border_radius={"30px"}
      border="1px solid #000000"
      onPress={action}
    >
      <Text
        variant="underlined_small_caption_black"
        style={{
          textDecorationLine: "underline",
        }}
      >
        Clear
      </Text>
    </Action_Container>
  );
};
