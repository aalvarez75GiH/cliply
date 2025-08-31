// import MenuIcon from "../../../assets/my-icons/two_stripes_menu.svg";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Text } from "../../infrastructure/typography/text.component";
import {
  Action_Container,
  Container,
} from "../global_components/containers/general_containers";
import QuickIcon from "../../../assets/my-icons/time_icon.svg";
import { Spacer } from "../global_components/optimized.spacer.component";
import { theme } from "../../infrastructure/theme";

import LeftArrow from "../../../assets/my-icons/arrow_back_icon.svg";
import NextArrowIcon from "../../../assets/my-icons/arrow_next_icon.svg";

import { TextClipsContext } from "../../infrastructure/services/home/text_clips.context";
import { GlobalContext } from "../../infrastructure/services/global/global.context";

export const Status_Next_Step_Bottom_Bar = ({
  language,
  action,
  isSelected,
}) => {
  const { operation_name, nextStep, setNextStep } =
    useContext(TextClipsContext);
  //   console.log("operation at Quickie", operation);
  const navigation = useNavigation();
  console.log("nextStep at Next Step Bar", nextStep);

  const { globalLanguage } = useContext(GlobalContext);
  return (
    <Action_Container
      width="100%"
      height="10%"
      justify="center"
      align="center"
      color={theme.colors.ui.food_delivery_theme_color}
      //   color={"red"}
      direction="row"
      //   onPress={() => navigation.goBack()}
      //   onPress={() => navigation.navigate(nextStep.status_view, nextStep)}
      onPress={() => {
        if (nextStep.bottom_bar_caption === "Restart") {
          navigation.navigate("Home_View");
          setNextStep({
            status_view: "Clips_by_Status_View_1",
            operation_name: "food_delivery",
            status_name: "heading_to_pickup/shop",
            caption: "Heading to pickup/shop",
            bottom_bar_caption: "Heading to pickup/shop",
          });
        } else {
          navigation.navigate(nextStep.status_view, nextStep);
        }
      }}

      //   onPress={() =>
      //     navigation.navigate("Clips_by_Status_View_2", {
      //       status_view: "Clips_by_Status_View_3",
      //       operation_name: "food_delivery",
      //       status_name: "picking_up/shopping",
      //       caption: "Picking up / Shopping",
      //     })
      //   }
    >
      <Container
        width="80%"
        height="100%"
        justify="center"
        align="center"
        direction="row"
        // color={theme.colors.bg.elements_bg}
        color={
          operation_name === "food_delivery"
            ? theme.colors.ui.food_delivery_theme_color
            : theme.colors.ui.ride_share_theme_color
        }
        // color={"red"}
      >
        <Spacer position="left" size="extraLarge" />
        <Spacer position="left" size="extraLarge" />
        <Spacer position="left" size="extraLarge" />

        <Text variant="dm_sans_bold_16_white">
          {nextStep.bottom_bar_caption}
        </Text>
      </Container>
      <Container
        width="20%"
        height="100%"
        // color={theme.colors.bg.elements_bg}
        // color={theme.colors.ui.food_delivery_theme_color}
        color={
          operation_name === "food_delivery"
            ? theme.colors.ui.food_delivery_theme_color
            : theme.colors.ui.ride_share_theme_color
        }
        //color={"blue"}
        onPress={() => null}
      >
        {/* <LeftArrow width={24} height={24} fill={theme.colors.ui.primary} /> */}
        <NextArrowIcon
          width={24}
          height={24}
          fill={theme.colors.ui.secondary}
        />
      </Container>
    </Action_Container>
  );
};
