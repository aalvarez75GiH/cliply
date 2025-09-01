import React, { useContext } from "react";
import { useNavigation, CommonActions } from "@react-navigation/native";

import { Text } from "../../infrastructure/typography/text.component.js";

import {
  Container,
  Action_Container,
} from "../global_components/containers/general_containers.js";
import { theme } from "../../infrastructure/theme/index.js";

import { TextClipsContext } from "../../infrastructure/services/home/text_clips.context.js";

export const Restart_flow_operation_status_process_header = () => {
  const navigation = useNavigation();

  const { setNextStep, nextStepInitialState, setSelectedItemId } =
    useContext(TextClipsContext);

  return (
    <Container
      width="100%"
      height="12%"
      align="flex-start"
      direction="row"
      justify="center"
      color={theme.colors.bg.elements_bg}
    >
      <Container
        width="70%"
        height="100%"
        // color={"red"}
        color={theme.colors.bg.elements_bg}
        justify="center"
        align="flex-end"
        style={{ paddingRight: "5%" }}
      ></Container>
      <Action_Container
        width="40%"
        height="100%"
        color={theme.colors.bg.elements_bg}
        // color={"lightblue"}
        onPress={() => {
          setNextStep(nextStepInitialState);
          setSelectedItemId(null);

          navigation.popToTop("Home_View");
        }}
        justify="center"
        align="center"
      >
        <Container
          width="60%"
          height="45%"
          border_radius="10px"
          color={"white"}
          justify="center"
          align="center"
          border="2px solid"
        >
          <Text variant="dm_sans_bold_14">Restart</Text>
        </Container>
      </Action_Container>
    </Container>
  );
};
