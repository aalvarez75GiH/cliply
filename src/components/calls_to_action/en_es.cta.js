// import MenuIcon from "../../../assets/my-icons/two_stripes_menu.svg";
import React from "react";

import { Text } from "../../infrastructure/typography/text.component";

import { theme } from "../../infrastructure/theme/index";
import {
  Action_Container,
  Container,
} from "../global_components/containers/general_containers";

export const EN_ES_CTA_component = ({ language, action }) => {
  return (
    <Action_Container
      width={"35%"}
      height={"100%"}
      justify="center"
      align="center"
      color={theme.colors.bg.elements_bg}
    >
      <Container
        width={"100%"}
        height={"90%"}
        color={theme.colors.ui.primary}
        border_radius={"40px"}
        direction="row"
        align="center"
        justify="center"
      >
        <Text variant="stages_ctas_white">{language}</Text>
      </Container>
    </Action_Container>
  );
};
