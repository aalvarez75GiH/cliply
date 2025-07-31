import React from "react";
import { useNavigation } from "@react-navigation/native";

import ExitIcon from "../../../assets/my-icons/exit_icon.svg";
import PencilIcon from "../../../assets/my-icons/pencil.svg";
import { Text } from "../../infrastructure/typography/text.component.js";
import {
  Container,
  Action_Container,
} from "../global_components/containers/general_containers.js";
import { theme } from "../../infrastructure/theme/index.js";
import MicIcon from "../../../assets/my-icons/micIcon.svg";
import { Spacer } from "../global_components/optimized.spacer.component.js";

export const Type_Message_Header = ({ label = "" }) => {
  const navigation = useNavigation();
  return (
    <>
      {/* ************* TOP HEADER ************************************* */}
      <Container
        width="100%"
        height="8%"
        align="flex-start"
        direction="row"
        justify="center"
        color={theme.colors.bg.elements_bg}
      >
        <Container
          width="80%"
          height="100%"
          color={theme.colors.bg.elements_bg}
          justify="center"
          align="flex-end"
          style={{ paddingRight: "5%" }}
        >
          <Text variant="logo_caption">{label}</Text>
        </Container>
        <Action_Container
          width="20%"
          height="100%"
          color={theme.colors.bg.elements_bg}
          onPress={() => navigation.navigate("Home")}
        >
          <MicIcon width={30} height={30} fill={"#000000"} />
        </Action_Container>
      </Container>
      <Container
        width="100%"
        height="1%"
        color={theme.colors.bg.screens_bg}
      ></Container>
      {/* <Spacer position="top" size="medium" /> */}
      {/* ************* BOTTOM HEADER ************************************* */}
      <Container
        width="100%"
        height="8%"
        align="flex-start"
        direction="row"
        justify="center"
        color={theme.colors.bg.elements_bg}
      >
        <Container
          width="20%"
          height="100%"
          color={theme.colors.bg.elements_bg}
          //   color={"blue"}
          justify="center"
          align="flex-end"
          style={{ paddingRight: "5%" }}
        ></Container>
        <Container
          width="60%"
          height="100%"
          //   color={"green"}
          color={theme.colors.bg.elements_bg}
          onPress={() => navigation.navigate("Home")}
        >
          <Text variant="middle_screens_caption">Type a quick message</Text>
        </Container>
        <Container
          width="20%"
          height="100%"
          color={theme.colors.bg.elements_bg}
          //   color={"pink"}
          onPress={() => navigation.navigate("Home")}
        >
          <PencilIcon width={30} height={30} fill={"#B2B2B2"} />
        </Container>
      </Container>
      <Container
        width="100%"
        height="0.4%"
        color={theme.colors.bg.screens_bg}
      ></Container>
    </>
  );
};
