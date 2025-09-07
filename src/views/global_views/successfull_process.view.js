import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { SafeArea } from "../../components/global_components/safe-area.component.js";
import { theme } from "../../infrastructure/theme/index.js";
import { Container } from "../../components/global_components/containers/general_containers.js";
import { Text } from "../../infrastructure/typography/text.component.js";
import { Squared_action_CTA_component } from "../../components/calls_to_action/squared_action.cta.js";
import SuccessIcon from "../../../assets/my-icons/success_icon.svg";
import { Spacer } from "../../components/global_components/optimized.spacer.component.js";
import { Loading_Spinner_area } from "../../components/global_components/global_loading_spinner_area.component.js";
import { GlobalContext } from "../../infrastructure/services/global/global.context.js";

export default function Successful_Process_View({ route }) {
  const navigation = useNavigation();
  const { isLoading } = useContext(GlobalContext);

  return (
    <SafeArea background_color={theme.colors.bg.elements_bg}>
      {isLoading && (
        <Container
          width="100%"
          height={"81%"}
          color={"lightblue"}
          justify="center"
          align="center"
        >
          <Loading_Spinner_area />
        </Container>
      )}
      <Container
        // color={"lightyellow"}
        width={"100%"}
        height={"100%"}
        align="center"
        justify="center"
        // color={theme.colors.bg.elements_bg}
        color={theme.colors.bg.screens_bg}
      >
        <Container
          width={"100%"}
          height={"92%"}
          align="center"
          justify="center"
          color={theme.colors.bg.elements_bg}
        >
          <SuccessIcon width={80} height={80} />
          <Spacer position="top" size="medium" />
          <Text variant="dm_sans_bold_20">
            Successfully done whatever you did!!
          </Text>
        </Container>
        <Squared_action_CTA_component
          label="Let's start..."
          action={() => {
            navigation.popToTop();
          }}
          icon_visible={false}
          height="8%"
        />
      </Container>
    </SafeArea>
  );
}
