// import MenuIcon from "../../../assets/my-icons/two_stripes_menu.svg";
import React from "react";

import { theme } from "../../infrastructure/theme/index";
import {
  Action_Container,
  Container,
} from "../global_components/containers/general_containers";
// import ExitIcon from "../../../assets/my-icons/exit_icon.svg";
// import RightArrow from "../../../assets/my-icons/arrow_next_icon.svg";

export const Circular_Icon_CTA = ({ action, Icon, width, height }) => {
  return (
    <Action_Container
      width={"20%"}
      height={"100%"}
      justify="center"
      align="center"
      color={theme.colors.bg.screens_bg}
      //color={theme.colors.bg.elements_bg}
      //color={"red"}
      onPress={action}
      border_radius={"100px"}
    >
      <Container
        width={"52%"}
        height={"60%"}
        color={theme.colors.ui.primary}
        border_radius={"60px"}
        direction="row"
        align="center"
        justify="center"
        border={"1px solid #000000"}
      >
        <Icon width={width} height={height} fill="#FFFFFF" />
        {/* <ExitIcon width="20px" height="20px" fill="#FFFFFF" /> */}
      </Container>
    </Action_Container>
    // <Action_Container
    //   width={"35%"}
    //   height={"100%"}
    //   justify="center"
    //   align="center"
    //   color={theme.colors.bg.elements_bg}
    //   onPress={action}
    // >
    //   <Container
    //     width={"100%"}
    //     height={"90%"}
    //     color={theme.colors.ui.primary}
    //     border_radius={"40px"}
    //     direction="row"
    //     align="center"
    //     justify="center"
    //   >
    //     <Text variant="stages_ctas_white">{language}</Text>
    //   </Container>
    // </Action_Container>
  );
};
