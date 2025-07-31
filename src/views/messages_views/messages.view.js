import React from "react";

import { Stage_3_CTA_component } from "../../components/calls_to_action/stage_3_cta.component.js";
import { Stages_CTA_component } from "../../components/calls_to_action/stages_cta.component.js";
import {
  Container,
  Flex_Container,
  Scrollabe_MainContent,
} from "../../components/global_components/containers/general_containers.js";

import { ExitHeader } from "../../components/headers/exit_header.component";
import { SafeArea } from "../../components/global_components/safe-area.component.js";
import { theme } from "../../infrastructure/theme/index.js";
import { Spacer } from "../../components/global_components/optimized.spacer.component.js";

export default function MessagesScreen({ navigation }) {
  const routing = (caption) => {
    switch (caption) {
      case "stage_1":
        navigation.navigate("Stage1_messages");
        console.log("Action 1 pressed!");
        break;
      case "stage_2":
        navigation.navigate("Stage2_messages");
        console.log("Action 2 pressed!");
        break;
      case "stage_3":
        navigation.navigate("Stage3_messages");
        console.log("Action 3 pressed!");
        break;
      case "stage_4":
        navigation.navigate("Stage4_messages");
        console.log("Action 4 pressed!");
        break;
      case "stage_5":
        navigation.navigate("Stage5_messages");
        console.log("Action 5 pressed!");
        break;

      default:
        console.log("Invalid action!");
    }
  };

  return (
    <SafeArea background_color="#FFFFFF">
      <Flex_Container color={theme.colors.ui.secondary}>
        <Container color={theme.colors.bg.elements_bg} height="99%">
          <ExitHeader label="Messages by stage" />
          <Scrollabe_MainContent
            color={theme.colors.bg.screens_bg}
            width={"100%"}
            height={"89%"}
            align="center"
            justify="flex-start"
          >
            <Spacer size="large" position="top" />
            <Spacer size="large" position="top" />
            {/* *************************STAGE 1***************** */}
            <Container
              width={"90%"}
              height={"15%"}
              justify="center"
              align="flex-start"
              color={theme.colors.bg.screens_bg}
            >
              <Stages_CTA_component
                number={"1"}
                caption1="On my way to"
                caption2="location"
                action={() => routing("stage_1")}
              />
            </Container>

            <Spacer size="large" position="bottom" />
            {/* *************************STAGE 2***************** */}
            <Container
              width={"90%"}
              height={"15%"}
              justify="center"
              align="flex-end"
              color={theme.colors.bg.screens_bg}
            >
              <Stages_CTA_component
                number={"2"}
                caption1="Arriving to"
                caption2="location"
                action={() => routing("stage_2")}
              />
            </Container>
            <Spacer size="large" position="bottom" />
            <Spacer size="large" position="bottom" />

            {/* *************************STAGE 3***************** */}
            <Container
              width={"90%"}
              height={"15%"}
              color={theme.colors.bg.elements_bg}
              align="center"
              justify="center"
            >
              <Stage_3_CTA_component
                number={"3"}
                action={() => routing("stage_3")}
              />
            </Container>

            <Spacer size="large" position="bottom" />
            <Spacer size="large" position="bottom" />
            {/* *************************STAGE 4***************** */}
            <Container
              width={"90%"}
              height={"15%"}
              justify="center"
              align="flex-start"
              color={theme.colors.bg.screens_bg}
            >
              <Stages_CTA_component
                number={"4"}
                caption1="On my way to"
                caption2="destination"
                action={() => routing("stage_4")}
              />
            </Container>
            <Spacer size="large" position="bottom" />

            {/* *************************STAGE 5***************** */}
            <Container
              width={"90%"}
              height={"15%"}
              justify="center"
              align="flex-end"
              color={theme.colors.bg.screens_bg}
            >
              <Stages_CTA_component
                number={"5"}
                caption1="Arriving to"
                caption2="destination"
                action={() => routing("stage_5")}
              />
            </Container>
          </Scrollabe_MainContent>
        </Container>
      </Flex_Container>
      {/* Main content goes here */}
    </SafeArea>
  );
}
