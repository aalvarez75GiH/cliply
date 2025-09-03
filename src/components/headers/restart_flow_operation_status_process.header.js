import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Action_Container,
} from "../global_components/containers/general_containers.js";
import { theme } from "../../infrastructure/theme/index.js";
import MicIcon from "../../../assets/my-icons/micIcon.svg";

import { Spacer } from "../global_components/optimized.spacer.component.js";
import { Restart_CTA } from "../calls_to_action/restart.cta.js";

export const Restart_flow_operation_status_process_header = () => {
  const navigation = useNavigation();
  return (
    <Container
      width="100%"
      height="12%"
      align="flex-start"
      direction="row"
      justify="center"
      color={theme.colors.bg.elements_bg}
    >
      <Action_Container
        width="35%"
        height="100%"
        // color={"blue"}
        color={theme.colors.bg.elements_bg}
        justify="center"
        align="center"
        style={{ paddingRight: "5%" }}
        onPress={() => navigation.navigate("Quick_Voice_Text_Clip")}
      >
        <Spacer position="left" size="large">
          <MicIcon width={30} height={30} fill={theme.colors.ui.primary} />
        </Spacer>
      </Action_Container>
      <Container
        width="35%"
        height="100%"
        //color={"red"}
        color={theme.colors.bg.elements_bg}
        justify="center"
        align="flex-end"
        style={{ paddingRight: "5%" }}
      ></Container>
      <Restart_CTA />
    </Container>
  );
};
