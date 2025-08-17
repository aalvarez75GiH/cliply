import React, { useState } from "react";
import * as Clipboard from "expo-clipboard";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Text } from "../../infrastructure/typography/text.component.js";
import {
  Container,
  Action_Container,
} from "../global_components/containers/general_containers.js";
import { theme } from "../../infrastructure/theme/index.js";
import { Spacer } from "../global_components/optimized.spacer.component.js";

export const Recent_clips_Tile = ({
  item,
  globalLanguage,
  selectedItemId,
  onSelect,
}) => {
  //   *******************************************************
  const { summary_en, summary_es, message_id, specific } = item;
  console.log("ITEM:", JSON.stringify(item, null, 2));

  const isSelected = selectedItemId === message_id;
  const navigation = useNavigation();
  //   *******************************************************

  return (
    <>
      <Action_Container
        width={Platform.OS === "ios" ? "400px" : "90%"}
        height="130px"
        align="center"
        justify="flex-start"
        color={theme.colors.bg.elements_bg}
        //color={"#FFE299"}
        //color={"red"}
        style={{
          shadowColor: "#000", // iOS shadow color
          shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
          shadowOpacity: 0.25, // iOS shadow opacity
          shadowRadius: 3.84, // iOS shadow radius
          elevation: 5, // Android shadow
        }}
        onPress={() => navigation.navigate("Recent_Text_Clip_View", { item })}
      >
        <Container
          width="100%"
          height="50%"
          align="center"
          justify="center"
          direction="row"
          color={theme.colors.bg.elements_bg}
          //color={"#FFE299"}
        >
          <Container
            width="100%"
            height="100%"
            align="flex-end"
            justify="center"
            direction="row"
            color={theme.colors.bg.elements_bg}
            //color={"red"}
          >
            {globalLanguage === "ES" && (
              <Text
                variant="dm_sans_bold_24"
                numberOfLines={1}
                style={{ textAlign: "right" }}
              >
                "{summary_es}"
              </Text>
            )}
            {globalLanguage === "EN" && (
              <Text
                variant="dm_sans_bold_24"
                numberOfLines={1}
                style={{ textAlign: "right" }}
              >
                "{summary_en}"
              </Text>
            )}
          </Container>
        </Container>
        {/* {specific === "specific" && (
          <Container
            width="100%"
            height="50%"
            align="center"
            justify="center"
            // color={theme.colors.bg.elements_bg}
            color={"green"}
            direction="row"
          >
            <Text
              variant="dm_sans_bold_14"
              numberOfLines={1}
              style={{ textAlign: "right", textDecorationLine: "underline" }}
            >
              Specific
            </Text>
          </Container>
        )} */}
        <Container
          width="100%"
          height="50%"
          align="center"
          justify="space-around"
          color={theme.colors.bg.elements_bg}
          //   color={"blue"}
          direction="row"
        >
          {specific === "specific" ? (
            <>
              <Container
                width="20%"
                height="50%"
                align="center"
                justify="center"
                color={theme.colors.ui.primary}
                //color={"purple"}
              >
                <Text
                  variant="dm_sans_bold_14_white"
                  style={{ textAlign: "right" }}
                >
                  Specific
                </Text>
              </Container>
            </>
          ) : (
            <Container
              width="20%"
              height="100%"
              align="center"
              justify="center"
              //color={"purple"}
              color={theme.colors.bg.elements_bg}
            />
          )}
          <Container
            width="20%"
            height="100%"
            align="center"
            justify="center"
            color={theme.colors.bg.elements_bg}
          >
            <Text
              variant="dm_sans_bold_14_disable_not_active"
              numberOfLines={1}
              style={{ textAlign: "right", textDecorationLine: "underline" }}
            >
              View
            </Text>
          </Container>
          <Container
            width="30%"
            height="100%"
            align="center"
            justify="center"
            //            color={"lightblue"}
            color={theme.colors.bg.elements_bg}
          >
            <Text
              variant="dm_sans_bold_14_disable_not_active"
              //numberOfLines={1}
              style={{ textAlign: "right", textDecorationLine: "underline" }}
            >
              08/21/2023
            </Text>
          </Container>
        </Container>
      </Action_Container>
    </>
  );
};
