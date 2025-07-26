import React, { useState } from "react";
import * as Clipboard from "expo-clipboard";

import { Text } from "../../infrastructure/typography/text.component.js";
import { EN_ES_CTA_component } from "../calls_to_action/en_es.cta.js";
import {
  Container,
  Action_Container,
} from "../global_components/containers/general_containers.js";
import CopyPaste_icon from "../../../assets/my-icons/copy_paste.svg";
import { theme } from "../../infrastructure/theme/index.js";

export const Stored_Messages_Tile = ({
  item,
  globalLanguage,
  setIsLoading,
}) => {
  //   *******************************************************
  const [language, setLanguage] = useState("EN");
  const { summary_en, summary_es, message_en, message_es } = item;
  const [isSelected, setIsSelected] = useState(null);

  const toggleLanguage = async () => {
    setLanguage((prevLanguage) => (prevLanguage === "EN" ? "ES" : "EN"));
    const { message_en, message_es, id } = item;
    await Clipboard.setStringAsync(language === "EN" ? message_es : message_en);
    setIsSelected(id);
  };

  const copy_message_action = async (item) => {
    const { message_en, message_es, id } = item;
    setIsLoading(true);
    setTimeout(async () => {
      await Clipboard.setStringAsync(
        language === "EN" ? message_en : message_es
      );
      console.log(`Copied to clipboard: ${message_en}`);
      setIsSelected(id);
      setIsLoading(false);
    }, 2000);
  };

  const uncopy_message_action = async (item) => {
    setLanguage(globalLanguage === "EN" ? "EN" : "ES");
    setIsSelected(null);
    await Clipboard.setStringAsync("");
  };

  //   *******************************************************
  console.log("LANGUAGE AT TILE:", language);
  return (
    <>
      <Container
        width="410px"
        height="210px"
        align="center"
        justify="flex-start"
        // color={theme.colors.bg.elements_bg}
        color={"red"}
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
          //   color={"red"}
        >
          <Container
            width="95%"
            height="90%"
            align="center"
            justify="center"
            direction="row"
            color={
              isSelected ? theme.colors.ui.success : theme.colors.bg.elements_bg
            }
            // color={theme.colors.bg.elements_bg}
          >
            {language === "ES" && (
              <Text
                variant={
                  isSelected
                    ? "copied_message_tile_caption"
                    : "summary_tile_caption"
                }
              >
                {!isSelected ? summary_es : message_es}
              </Text>
            )}
            {language === "EN" && (
              <Text
                variant={
                  isSelected
                    ? "copied_message_tile_caption"
                    : "summary_tile_caption"
                }
              >
                {!isSelected ? summary_en : message_en}
              </Text>
            )}
          </Container>
        </Container>
        {/* ********************************* */}
        {!isSelected && (
          <Container
            width="100%"
            height="30%"
            align="center"
            justify="center"
            direction="row"
            //   color={theme.colors.bg.elements_bg}
            color={
              isSelected ? theme.colors.ui.success : theme.colors.bg.elements_bg
            }
          >
            <Container
              width="30%"
              height="75%"
              align="flex-start"
              justify="flex-start"
              direction="row"
              // color={theme.colors.bg.elements_bg}
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
              // color={theme.colors.bg.elements_bg}
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
              // color={theme.colors.bg.elements_bg}
            >
              <Action_Container
                width="65px"
                onPress={() => copy_message_action(item)}
                //   color={theme.colors.bg.elements_bg}
                color={
                  isSelected
                    ? theme.colors.ui.success
                    : theme.colors.bg.elements_bg
                }
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
        {isSelected && (
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
    </>
  );
};
