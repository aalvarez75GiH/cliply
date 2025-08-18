import React, { useState, useRef, useCallback, useContext } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

// import { Type_Message_Header } from "../../components/headers/type_message.header";
import { SafeArea } from "../../components/global_components/safe-area.component";
import { theme } from "../../infrastructure/theme/index";
import {
  Flex_Container,
  Container,
} from "../../components/global_components/containers/general_containers";
import { TypeMessageContext } from "../../infrastructure/services/type_message/type_message.context";
import { Type_message_process_area_1 } from "../../components/type_message_process_areas/type_message_area_1.component";
import { Type_message_process_area_2 } from "../../components/type_message_process_areas/type_message_area_2.component";
import { Type_message_process_area_3 } from "../../components/type_message_process_areas/type_message_area_3.component";

export default function Type_Message_View() {
  const [textInputValue, setTextInputvalue] = useState("");

  const {
    type_message_request,
    isLoading,
    response,
    setResponse,
    messageTranslated,
  } = useContext(TypeMessageContext);
  const { message_en, message_es, original_message, language_detected } =
    messageTranslated;

  const navigation = useNavigation();
  console.log("MESSAGE EN AT TYPE MESSAGE VIEW:", message_en);
  console.log("MESSAGE ES AT TYPE MESSAGE VIEW:", message_es);
  console.log("ORIGINAL MESSAGE AT TYPE MESSAGE VIEW:", original_message);

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

  return (
    <SafeArea background_color={theme.colors.bg.elements_bg}>
      <Flex_Container color={theme.colors.bg.screens_bg}>
        {isLoading && <Type_message_process_area_1 />}
        {!isLoading && response && (
          <Type_message_process_area_2
            message_en={message_en}
            message_es={message_es}
            original_message={original_message}
            language_detected={language_detected}
            setResponse={setResponse}
            action_1={() => null}
            action_2={() => {
              setResponse(null);
              navigation.navigate("Home");
            }}
          />
        )}
        {!isLoading && !response && (
          <Type_message_process_area_3
            onChangeText={onChangeText}
            type_message_request={type_message_request}
            inputRef={inputRef}
            textInputValue={textInputValue}
          />
        )}
      </Flex_Container>
    </SafeArea>
  );
}
