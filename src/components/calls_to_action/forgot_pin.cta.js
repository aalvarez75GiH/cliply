import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Action_Container,
} from "../global_components/containers/general_containers";
import { Text } from "../../infrastructure/typography/text.component";

import { theme } from "../../infrastructure/theme";

export const Forgot_PIN_CTA = () => {
  const navigation = useNavigation();
  return (
    <Action_Container
      width="70%"
      height="25%"
      justify="center"
      align="center"
      color="transparent"
      border={"3px"}
      onPress={() => null}
      border_radius_top_left="30px"
      border_radius_top_right="30px"
      border_radius_bottom_left="30px"
      border_radius_bottom_right="30px"
      style={{
        borderColor: theme.colors.ui.primary,
        borderStyle: "solid",
        borderWidth: 2,
      }}
    >
      <Text variant="dm_sans_bold_16">Forgot pin number</Text>
    </Action_Container>
  );
};
