import React, { useState, useContext } from "react";
import * as Clipboard from "expo-clipboard";
import { ActivityIndicator, Platform } from "react-native";

import { Text } from "../../infrastructure/typography/text.component.js";
import { EN_ES_CTA_component } from "../calls_to_action/en_es.cta.js";
import {
  Container,
  Action_Container,
} from "../global_components/containers/general_containers.js";
import CopyPaste_icon from "../../../assets/my-icons/copy_paste.svg";
import { theme } from "../../infrastructure/theme/index.js";

import { TextClipsContext } from "../../infrastructure/services/home/text_clips.context.js";

export const Stored_Clips_Tile = ({
  item,
  globalLanguage,
  selectedItemId,
  onSelect,
}) => {
  //   *******************************************************
  const [language, setLanguage] = useState(globalLanguage);
  const [isLoading, setIsLoading] = useState(false);

  const { summary_en, summary_es, message_en, message_es, message_id } = item;
  console.log("ITEM:", JSON.stringify(item, null, 2));

  const { introAdded, setIntroAdded } = useContext(TextClipsContext);

  const toggleLanguage = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      setLanguage((prevLanguage) => (prevLanguage === "EN" ? "ES" : "EN"));
      setIsLoading(false);
    }, 300);
  };

  const copy_message_action = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      await Clipboard.setStringAsync(
        introAdded
          ? `Hey, Your driver here. ${
              language === "EN" ? message_en : message_es
            }`
          : language === "EN"
          ? message_en
          : message_es
      );

      console.log(`Copied to clipboard: ${message_en}`);
      //   setIsSelected(id);
      onSelect(message_id);
      setIsLoading(false);
      setIntroAdded(false);
    }, 300);
  };

  const uncopy_message_action = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      setLanguage(globalLanguage === "EN" ? "EN" : "ES");
      onSelect(null);
      await Clipboard.setStringAsync("");
      setIsLoading(false);
      setIntroAdded(false);
    }, 300);
  };

  const isSelected = selectedItemId === message_id;
  //   *******************************************************

  return (
    <>
      {isLoading && (
        <Container
          width={Platform.OS === "ios" ? "410px" : "100%"}
          height="210px"
          color={"#FFFFFF"}
          justify="center"
          align="center"
        >
          <ActivityIndicator size="small" color="#000000" />
        </Container>
      )}
      {!isLoading && (
        <Container
          width={Platform.OS === "ios" ? "410px" : "100%"}
          height="210px"
          align="center"
          justify="flex-start"
          color={theme.colors.bg.elements_bg}
          style={{
            shadowColor: "#000", // iOS shadow color
            shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
            shadowOpacity: 0.25, // iOS shadow opacity
            shadowRadius: 3.84, // iOS shadow radius
            elevation: 5, // Android shadow
          }}
        >
          <Container
            width="100%"
            height="70%"
            align="center"
            justify="center"
            direction="row"
            color={
              isSelected ? theme.colors.ui.success : theme.colors.bg.elements_bg
            }
          >
            <Action_Container
              width="95%"
              height="90%"
              align="center"
              justify="center"
              direction="row"
              color={
                isSelected
                  ? theme.colors.ui.success
                  : theme.colors.bg.elements_bg
              }
              onPress={() => (isSelected ? null : copy_message_action(item))}
            >
              {language === "ES" && (
                <Text
                  variant={
                    isSelected
                      ? "dm_sans_bold_18_white_centered"
                      : "dm_sans_bold_26_centered"
                  }
                >
                  {!isSelected ? summary_es : message_es}
                </Text>
              )}
              {language === "EN" && (
                <Text
                  variant={
                    isSelected
                      ? "dm_sans_bold_18_white_centered"
                      : "dm_sans_bold_28_centered"
                  }
                >
                  {!isSelected ? summary_en : message_en}
                </Text>
              )}
            </Action_Container>
          </Container>
          {/* ***************** FOOTER 1 ************************** */}
          {!isSelected && (
            <Container
              width={Platform.OS === "ios" ? "410px" : "100%"}
              height="30%"
              align="center"
              justify="center"
              direction="row"
              color={
                isSelected
                  ? theme.colors.ui.success
                  : theme.colors.bg.elements_bg
              }
            >
              <Container
                width="30%"
                height="75%"
                align="flex-start"
                justify="flex-start"
                direction="row"
                color={
                  isSelected
                    ? theme.colors.ui.success
                    : theme.colors.bg.elements_bg
                }
              >
                <EN_ES_CTA_component
                  language={language === "EN" ? "ES" : "EN"}
                  action={toggleLanguage}
                  isSelected={isSelected}
                />
              </Container>
              <Action_Container
                width="30%"
                height="65%"
                align="center"
                justify="center"
                direction="column"
                color={
                  isSelected
                    ? theme.colors.ui.success
                    : theme.colors.bg.elements_bg
                }
              >
                <Text variant="underlined_small_caption">Delete</Text>
              </Action_Container>
              <Container
                width="30%"
                height="65%"
                align="flex-end"
                justify="flex-end"
                direction="row"
                color={
                  isSelected
                    ? theme.colors.ui.success
                    : theme.colors.bg.elements_bg
                }
              >
                <Action_Container
                  width="65px"
                  onPress={() => copy_message_action(item)}
                  color={
                    isSelected
                      ? theme.colors.ui.success
                      : theme.colors.bg.elements_bg
                  }
                >
                  <CopyPaste_icon
                    width="30px"
                    height="30px"
                    fill={theme.colors.text.middle_screens_text}
                  />
                </Action_Container>
              </Container>
            </Container>
          )}
          {/* ***************** FOOTER 2 ************************** */}
          {isSelected && (
            <Container
              width="100%"
              height="30%"
              align="center"
              justify="flex-end"
              direction="row"
              color={theme.colors.ui.success}
            >
              <Container
                width="30%"
                height="65%"
                align="flex-end"
                justify="flex-end"
                direction="row"
                color={theme.colors.ui.success}
              >
                <Action_Container
                  width="100%"
                  height="100%"
                  onPress={() => uncopy_message_action(item)}
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
