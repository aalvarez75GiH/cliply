import React, { useState, useRef, useCallback, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { Type_Message_Header } from "../../components/headers/type_message.header";
import { SafeArea } from "../../components/global_components/safe-area.component";
import { theme } from "../../infrastructure/theme/index";
import {
  Flex_Container,
  Container,
  Action_Container,
} from "../../components/global_components/containers/general_containers";
import { Spacer } from "../../components/global_components/optimized.spacer.component";
import { Message_Input } from "../../components/inputs/message.input";
import { Squared_action_CTA_component } from "../../components/calls_to_action/squared_action.cta";
import { MessagesContext } from "../../infrastructure/services/messages/messages.context";
import { TypeMessageContext } from "../../infrastructure/services/type_message/type_message.context";
import { Type_message_process_area_1 } from "../../components/type_message_process_areas/type_message_area_1.component";
import { Transcripted_Messages_Tile } from "../../components/messages_tiles/transcripted_message.tile";
import { SemiRounded_Clear_CTA } from "../../components/calls_to_action/semi_rounded_clear.cta";

export default function Type_Message_View({ navigation }) {
  const [textInputValue, setTextInputvalue] = useState("");
  const [focused, setFocused] = useState(false);
  const {
    type_message_request,
    isLoading,
    response,
    setResponse,
    messageTranslated,
  } = useContext(TypeMessageContext);
  const { message_en, message_es, original_message } = messageTranslated;
  const inputRef = useRef(null);

  useFocusEffect(
    useCallback(() => {
      const timeout = setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 200); // slight delay to ensure screen is rendered

      return () => clearTimeout(timeout);
    }, [])
  );

  const onChangeText = (value) => {
    setTextInputvalue(value);
    console.log("Text input state: ", textInputValue);
  };

  const onFocus = () => {
    setFocused(true);
    console.log("Input focused");
  };

  return (
    <SafeArea background_color={theme.colors.bg.elements_bg}>
      <Flex_Container color={theme.colors.bg.elements_bg}>
        {isLoading && <Type_message_process_area_1 />}
        {!isLoading && !response && (
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
        )}
        {!isLoading && response && (
          <Container
            width={"100%"}
            height={"82%"}
            color={theme.colors.bg.screens_bg}
            //color={"green"}
            align="center"
            justify="center"
          >
            <Transcripted_Messages_Tile
              message_en={message_en}
              message_es={message_es}
              original_message={original_message}
            />
            <Container
              width={"100%"}
              height={"12%"}
              justify="center"
              align="center"
              direction="row"
              //color={"red"}
              style={{
                position: "absolute",
                top: 450,
              }}
              color={theme.colors.bg.screens_bg}
            >
              <SemiRounded_Clear_CTA action={() => setResponse(null)} />
            </Container>
          </Container>
        )}
      </Flex_Container>
    </SafeArea>
  );
}
