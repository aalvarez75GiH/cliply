import React, {
  useState,
  useContext,
  useRef,
  useEffect,
  useCallback,
  useHea,
} from "react";
import {
  KeyboardAvoidingView,
  Platform,
  InteractionManager,
} from "react-native";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";

import { Spacer } from "../../components/global_components/optimized.spacer.component.js";
import { Text } from "../../infrastructure/typography/text.component.js";
import { FormInput } from "../../components/inputs/form.input.js";
import { Container } from "../../components/global_components/containers/general_containers.js";
import { Squared_action_CTA_component } from "../../components/calls_to_action/squared_action.cta.js";
import { SafeArea } from "../../components/global_components/safe-area.component.js";
import { theme } from "../../infrastructure/theme/index.js";
import { ExitHeader } from "../../components/headers/exit_header.component.js";
import { New_FormInput } from "../../components/inputs/new_form_input.js";

import { GlobalContext } from "../../infrastructure/services/global/global.context.js";
import { fonts } from "../../infrastructure/theme/fonts.js";

export default function Multiple_Emails_LoginIn_View({ navigation, route }) {
  const [error, setError] = useState(null);
  const { data } = route.params;
  console.log(
    "DATA PASSED TO MULTIPLE EMAILS VIEW:",
    JSON.stringify(data, null, 2)
  );
  return (
    <SafeArea backgroundColor={theme.colors.bg.elements_bg}>
      <Container
        width={"100%"}
        height={"100%"}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        color={theme.colors.bg.elements_bg}
      >
        <Spacer position="top" size="large" />
        <Spacer position="top" size="large" />
        <ExitHeader
          action={() => {
            setFirst_name("");
            setLast_name("");
            setError(null);
            navigation.goBack();
          }}
        />

        <Container
          width="100%"
          height="65%"
          color={theme.colors.bg.elements_bg}
          justify="flex-start"
          align="center"
        >
          <Container
            width="100%"
            height="10%"
            justify="flex-start"
            align="center"
            color={theme.colors.bg.elements_bg}
          />
          <Text variant="dm_sans_bold_18">{data[0]}</Text>
          <Text variant="dm_sans_bold_18">{data[1]}</Text>

          <Squared_action_CTA_component
            label="Next"
            action={() => {
              if (!first_name.length || !last_name.length) {
                setError("Please fill in first name & last name to continue");
                return;
              }
              navigation.navigate("Register_User_View_2");
            }}
            icon_visible={false}
            height="12%"
          />
        </Container>
        <Spacer position="top" size="small" />
        <Spacer position="top" size="small" />
        <Spacer position="top" size="small" />
        <Spacer position="top" size="small" />
      </Container>
    </SafeArea>
  );
}
