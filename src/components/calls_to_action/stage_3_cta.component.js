// import MenuIcon from "../../../assets/my-icons/two_stripes_menu.svg";
import React from "react";

import { Text } from "../../infrastructure/typography/text.component.js";

import Merchant_icon from "../../../assets/my-icons/merchant_icon.svg";
import Rider_icon from "../../../assets/my-icons/ride.svg";
import { theme } from "../../infrastructure/theme/index.js";
import {
  Action_Container,
  Container,
} from "../global_components/containers/general_containers.js";

export const Stage_3_CTA_component = ({ number, action }) => {
  return (
    <Action_Container
      width={"95%"}
      height={"90%"}
      justify="center"
      align="flex-start"
      color={theme.colors.ui.primary}
      border_radius={"10px"}
      direction="row"
      onPress={action}
    >
      <Container
        width={"15%"}
        height={"100%"}
        justify="flex-start"
        align="center"
        color={theme.colors.ui.primary}
        border_radius={"10px"}
      >
        <Container
          width={"30px"}
          height={"30px"}
          color={theme.colors.ui.secondary}
          border_radius={"15px"}
          margin_top={"15%"}
          margin_left={"1%"}
        >
          <Text variant="stages_ctas_black">{number}</Text>
        </Container>
      </Container>
      <Container
        width={"85%"}
        height={"100%"}
        justify="center"
        align="flex-end"
        direction="row"
        color={theme.colors.ui.primary}
        border_radius={"10px"}
        // color={"red"}
      >
        <Container
          width={"40%"}
          height={"100%"}
          justify="center"
          align="flex-start"
          direction="row"
          color={theme.colors.ui.primary}
          //   color={"#FAD02C"}
        >
          <Container
            width={"5%"}
            height={"100%"}
            justify="center"
            align="flex-start"
            color={theme.colors.ui.primary}
            // color={"red"}
          />
          <Container
            width={"80%"}
            height={"100%"}
            justify="center"
            align="center"
            color={theme.colors.ui.primary}
            // color={"brown"}
          >
            <Merchant_icon width="40px" height="40px" fill="#FFFFFF" />
            <Text variant="stages_ctas_white">Merchant</Text>
          </Container>
        </Container>
        <Container
          width={"60%"}
          height={"100%"}
          justify="center"
          align="flex-start"
          direction="row"
          color={theme.colors.ui.primary}
          border_radius={"10px"}
          //   color={"green"}
        >
          <Container
            width={"3%"}
            height={"100%"}
            justify="center"
            align="flex-start"
            color={theme.colors.ui.primary}
            // color={"red"}
          />
          <Container
            width={"80%"}
            height={"100%"}
            justify="center"
            align="center"
            color={theme.colors.ui.primary}
            // color={"purple"}
          >
            <Rider_icon width="40px" height="40px" fill="#FFFFFF" />
            <Text variant="stages_ctas_white">Passanger</Text>
          </Container>
        </Container>
      </Container>
    </Action_Container>
  );
};
