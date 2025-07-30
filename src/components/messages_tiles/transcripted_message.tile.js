import React, { useState } from "react";
import * as Clipboard from "expo-clipboard";
import { ActivityIndicator } from "react-native";

import { Text } from "../../infrastructure/typography/text.component.js";
import { EN_ES_CTA_component } from "../calls_to_action/en_es.cta.js";
import {
  Container,
  Action_Container,
} from "../global_components/containers/general_containers.js";
import CopyPaste_icon from "../../../assets/my-icons/copy_paste.svg";
import { theme } from "../../infrastructure/theme/index.js";

export const Transcripted_Messages_Tile = ({
  message_en,
  message_es,
  original_message,
}) => {
  //   *******************************************************
  const [language, setLanguage] = useState("EN");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  //   const { message_en, message_es } = transcripted_message;

  const toggleLanguage = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      setLanguage((prevLanguage) => (prevLanguage === "EN" ? "ES" : "EN"));
      await Clipboard.setStringAsync(
        language === "EN" ? message_es : message_en
      );
      setIsLoading(false);
    }, 300);
  };

  const copy_message_action = async () => {
    setIsLoading(true);
    setCopiedMessage(true);
    setTimeout(async () => {
      //   console.log("Copying message...");
      await Clipboard.setStringAsync(
        language === "EN" ? message_en : message_es
      );
      console.log(`Copied to clipboard: ${message_en}`);
      setIsLoading(false);
    }, 300);
  };

  const uncopy_message_action = async (item) => {
    setCopiedMessage(false);
    setIsLoading(true);
    setTimeout(async () => {
      await Clipboard.setStringAsync("");
      setIsLoading(false);
    }, 300);
  };

  //   *******************************************************

  return (
    <>
      {isLoading && (
        <Container
          //   style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
          width="100%"
          height="45%"
          //   width="410px"
          //   height="280px"
          color={"#FFFFFF"}
          //   color={"#FAD"}
          justify="center"
          align="center"
          style={{
            position: "absolute",
            top: 90,
            bottom: 20,
          }}
        >
          <ActivityIndicator size="small" color="#000000" />
        </Container>
      )}
      {!isLoading && (
        <Container
          width="95%"
          height="45%"
          align="center"
          justify="center"
          color={theme.colors.bg.elements_bg}
          style={{
            shadowColor: "#000", // iOS shadow color
            shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
            shadowOpacity: 0.25, // iOS shadow opacity
            shadowRadius: 3.84, // iOS shadow radius
            elevation: 5, // Android shadow
            position: "absolute",
            top: 90,
            bottom: 20,
          }}
        >
          <Container
            width="100%"
            height="70%"
            align="center"
            justify="center"
            direction="row"
            color={
              copiedMessage
                ? theme.colors.ui.success
                : theme.colors.bg.elements_bg
            }
          >
            {/* ***************** MESSAGE CONTENT  *********** */}
            <Container
              width="90%"
              height="90%"
              align="center"
              justify="center"
              direction="row"
              color={
                copiedMessage
                  ? theme.colors.ui.success
                  : theme.colors.bg.elements_bg
              }
            >
              <Text
                variant={
                  copiedMessage
                    ? "transcripted_message_copied_caption"
                    : "transcripted_message_caption"
                }
              >
                {language === "ES" ? message_es : message_en}
              </Text>
            </Container>
          </Container>
          {/* ***************** FOOTER 1 *********** */}
          {!copiedMessage && (
            <Container
              width="100%"
              height="30%"
              align="center"
              justify="center"
              direction="row"
              color={theme.colors.bg.elements_bg}
            >
              <Container
                width="30%"
                height="55%"
                align="flex-start"
                justify="flex-start"
                direction="row"
                color={theme.colors.bg.elements_bg}
              >
                <EN_ES_CTA_component
                  language={language === "EN" ? "ES" : "EN"}
                  action={toggleLanguage}
                  // isSelected={isSelected}
                />
              </Container>
              <Action_Container
                width="30%"
                height="65%"
                align="center"
                justify="center"
                direction="column"
                color={theme.colors.bg.elements_bg}
              >
                <Text variant="underlined_small_caption">Delete</Text>
              </Action_Container>
              <Container
                width="30%"
                height="65%"
                align="flex-end"
                justify="flex-end"
                direction="row"
                color={theme.colors.bg.elements_bg}
              >
                <Action_Container
                  width="65px"
                  onPress={() => copy_message_action()}
                  color={theme.colors.bg.elements_bg}
                >
                  <CopyPaste_icon
                    width="40px"
                    height="40px"
                    fill={theme.colors.text.middle_screens_text}
                  />
                </Action_Container>
              </Container>
            </Container>
          )}
          {/* ***************** FOOTER 2 *********** */}
          {copiedMessage && (
            <Container
              width="100%"
              height="30%"
              align="center"
              justify="flex-end"
              direction="row"
              color={theme.colors.ui.success}
              //   color={"red"}
            >
              <Container
                width="30%"
                height="65%"
                align="flex-end"
                justify="flex-end"
                direction="row"
                // color={"blue"}
                color={theme.colors.ui.success}
              >
                <Action_Container
                  width="100%"
                  height="100%"
                  onPress={() => uncopy_message_action()}
                  justify="center"
                  align="center"
                  color={theme.colors.ui.success}
                >
                  <Text variant="stages_ctas_white">Uncopy</Text>
                </Action_Container>
              </Container>
            </Container>
          )}
        </Container>
      )}
    </>
  );
};
