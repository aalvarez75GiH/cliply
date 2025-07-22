import React from "react";
import { Text, View } from "react-native";

import { SafeArea } from "../../../components/global_components/safe-area.component";
import { theme } from "../../../infrastructure/theme/index";
import { ExitHeader } from "../../../components/headers/exit_header.component";
import {
  Container,
  Flex_Container,
  Scrollabe_MainContent,
} from "../../../components/global_components/containers/general_containers";

export default function Stage_2_Screen({ navigation }) {
  return (
    <SafeArea background_color="#FFFFFF">
      <Flex_Container color={theme.colors.ui.secondary}>
        <ExitHeader navigation={navigation} />
        <Container color={theme.colors.bg.elements_bg} height="99%">
          <Scrollabe_MainContent
            color={theme.colors.bg.screens_bg}
            width={"100%"}
            height={"89%"}
            align="center"
            justify="flex-start"
          ></Scrollabe_MainContent>
        </Container>
      </Flex_Container>
      {/* Main content goes here */}
    </SafeArea>
  );
}
