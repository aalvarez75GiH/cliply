import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Container } from "../global_components/containers/general_containers.js";
import { theme } from "../../infrastructure/theme/index.js";
import { Type_Message_Header } from "../headers/type_message.header";
import { ExitHeader } from "../headers/exit_header.component.js";
import { Squared_action_CTA_component } from "../calls_to_action/squared_action.cta";
import { HomeHeader } from "../headers/home_header.component.js";
import { Message_Input } from "../inputs/message.input.js";

export const Type_message_process_area_3 = ({
  onChangeText,
  type_message_request,
  inputRef,
  textInputValue,
}) => {
  const navigation = useNavigation();
  return (
    <>
      <Container
        width="100%"
        height="100%"
        align="center"
        justify="flex-start"
        color={theme.colors.bg.elements_bg}
      >
        <Type_Message_Header />

        {/* <Spacer position="top" size="small" /> */}

        <Message_Input
          width="100%"
          height="310px"
          multiline={true}
          mode="flat"
          activeUnderlineColor={"#FFFFFF"}
          underlineColor="transparent"
          style={{
            backgroundColor: theme.colors.bg.elements_bg,
            textAlignVertical: "center",
            textAlign: "center",
            fontFamily: theme.fonts.body,
            fontSize: 18,
            fontWeight: theme.fontWeights.bold,
          }}
          onChangeText={(value) => onChangeText(value)}
          // selectionColor={"red"}
          cursorColor="black"
          // onFocus={() => onFocus()}
          selectionColor="black"
          ref={inputRef}
        />
        {textInputValue.length > 0 && (
          <Squared_action_CTA_component
            action={() => type_message_request(textInputValue)}
            label="Send Message"
            height="8%"
          />
        )}
      </Container>
    </>
  );
};
