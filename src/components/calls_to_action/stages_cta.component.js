// import MenuIcon from "../../../assets/my-icons/two_stripes_menu.svg";
import React from "react";

import { Text } from "../../infrastructure/typography/text.component";

import { theme } from "../../infrastructure/theme/index";
import {
  Action_Container,
  Container,
} from "../global_components/containers/general_containers";

export const Stages_CTA_component = ({
  number,
  caption1,
  caption2,
  action,
}) => {
  return (
    <Action_Container
      width={"190px"}
      height={"95px"}
      justify="center"
      align="center"
      color={theme.colors.ui.secondary}
      direction="row"
      border_radius={"10px"}
      border={`3px solid ${theme.colors.ui.primary}`}
      onPress={() => action()}
    >
      {/* <Mic_CTA_Container width="120px" height="120px">
        <Main_mic_icon width="60px" height="60px" fill="#FFFFFF" /> 
      </Mic_CTA_Container> */}
      <Container
        width={"30%"}
        height={"90%"}
        color={theme.colors.bg.elements_bg}
      >
        <Container
          width={"30px"}
          height={"30px"}
          color={theme.colors.ui.primary}
          border_radius={"15px"}
        >
          <Text variant="stages_ctas_white">{number}</Text>
        </Container>
      </Container>
      <Container
        width={"70%"}
        height={"90%"}
        color={theme.colors.bg.elements_bg}
        align="flex-start"
      >
        <Text variant="stages_ctas_black">{caption1}</Text>
        <Text variant="stages_ctas_black">{caption2}</Text>
      </Container>

      {/* <Text variant="stages_ctas_white">1</Text> */}
    </Action_Container>
  );
};
