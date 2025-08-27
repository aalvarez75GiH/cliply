import React, { useState } from "react";
import * as Clipboard from "expo-clipboard";
import { Platform } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { Text } from "../../infrastructure/typography/text.component.js";
import {
  Container,
  Action_Container,
} from "../global_components/containers/general_containers.js";
import { theme } from "../../infrastructure/theme/index.js";
import { Spacer } from "../global_components/optimized.spacer.component.js";
import CopyPaste_icon from "../../../assets/my-icons/copy_paste.svg";

export const Quickies_Tile = ({
  item,
  globalLanguage,
  selectedItemId,
  onSelect,
}) => {
  //   *******************************************************
  const { quicky_en, quicky_es, quicky_id } = item;
  console.log("ITEM:", JSON.stringify(item, null, 2));

  const isSelected = selectedItemId === quicky_id;
  const [isLoading, setIsLoading] = useState(false);
  //   *******************************************************
  const copy_quicky_action = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      await Clipboard.setStringAsync(
        globalLanguage === "EN" ? quicky_en : quicky_es
      );

      console.log(`Copied to clipboard: ${quicky_en}`);
      //   setIsSelected(id);
      onSelect(quicky_id);
      setIsLoading(false);
      setIntroAdded(false);
    }, 300);
  };

  return (
    <>
      {isLoading && (
        <Container
          // style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
          //   width="410px"
          width={Platform.OS === "ios" ? "400px" : "400px"}
          height="130px"
          color={"#FFFFFF"}
          justify="center"
          align="center"
        >
          <ActivityIndicator size="small" color="#000000" />
        </Container>
      )}
      {!isLoading && (
        <>
          <Spacer position="left" size="small">
            <Action_Container
              width={"99%"}
              height="130px"
              align="center"
              justify="flex-start"
              //   color={theme.colors.bg.elements_bg}
              color={
                isSelected
                  ? theme.colors.ui.success
                  : theme.colors.bg.elements_bg
              }
              //color={"#FFE299"}
              //color={"red"}
              style={{
                shadowColor: "#000", // iOS shadow color
                shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
                shadowOpacity: 0.25, // iOS shadow opacity
                shadowRadius: 3.84, // iOS shadow radius
                elevation: 5, // Android shadow
              }}
              onPress={() => copy_quicky_action(item)}
            >
              <Container
                width="100%"
                height="50%"
                align="center"
                justify="center"
                direction="row"
                // color={theme.colors.bg.elements_bg}
                color={
                  isSelected
                    ? theme.colors.ui.success
                    : theme.colors.bg.elements_bg
                }
                //color={"#FFE299"}
              >
                <Container
                  width="100%"
                  height="100%"
                  align="flex-end"
                  justify="center"
                  direction="row"
                  //   color={theme.colors.bg.elements_bg}
                  color={
                    isSelected
                      ? theme.colors.ui.success
                      : theme.colors.bg.elements_bg
                  }
                  //color={"red"}
                >
                  {globalLanguage === "ES" && (
                    <Text
                      //   variant="dm_sans_bold_24"
                      variant={
                        isSelected ? "dm_sans_bold_20_white" : "dm_sans_bold_20"
                      }
                      numberOfLines={1}
                      style={{ textAlign: "right" }}
                    >
                      "{quicky_es}"
                    </Text>
                  )}
                  {globalLanguage === "EN" && (
                    <Text
                      variant={
                        isSelected ? "dm_sans_bold_20_white" : "dm_sans_bold_20"
                      }
                      numberOfLines={1}
                      style={{ textAlign: "right" }}
                    >
                      "{quicky_en}"
                    </Text>
                  )}
                </Container>
              </Container>

              <Container
                width="100%"
                height="50%"
                align="center"
                justify="flex-end"
                color={
                  isSelected
                    ? theme.colors.ui.success
                    : theme.colors.bg.elements_bg
                }
                // color={"blue"}
                direction="row"
              >
                {!isSelected && (
                  <CopyPaste_icon
                    width="30px"
                    height="30px"
                    fill={theme.colors.text.middle_screens_text}
                  />
                )}
                <Spacer position="right" size="large" />
              </Container>
            </Action_Container>
          </Spacer>
        </>
      )}
    </>
  );
};
