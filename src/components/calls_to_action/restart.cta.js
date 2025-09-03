import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Action_Container,
} from "../global_components/containers/general_containers";
import { Text } from "../../infrastructure/typography/text.component";

import { theme } from "../../infrastructure/theme";
import { TextClipsContext } from "../../infrastructure/services/home/text_clips.context";

export const Restart_CTA = () => {
  const { setNextStep, nextStep, nextStepInitialState, setSelectedItemId } =
    useContext(TextClipsContext);
  const navigation = useNavigation();
  return (
    <Action_Container
      width="40%"
      height="100%"
      color={theme.colors.bg.elements_bg}
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
        color={theme.colors.bg.elements_bg}
        justify="center"
        align="center"
        border="2px solid black"
      >
        <Text variant="dm_sans_bold_14">Restart</Text>
      </Container>
    </Action_Container>
  );
};
