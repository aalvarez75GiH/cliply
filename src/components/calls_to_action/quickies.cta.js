// import MenuIcon from "../../../assets/my-icons/two_stripes_menu.svg";
import React, { useContext } from "react";

import { Text } from "../../infrastructure/typography/text.component";
import RightArrowIcon from "../../../assets/my-icons/arrow_next_icon.svg";

import { theme } from "../../infrastructure/theme/index";
import {
  Action_Container,
  Container,
} from "../global_components/containers/general_containers";
import { TextClipsContext } from "../../infrastructure/services/home/text_clips.context";

export const Quickies_CTA = ({ language, action, isSelected }) => {
  const { operation } = useContext(TextClipsContext);
  console.log("operation at Quickie", operation);
  return (
    <Action_Container
      width="100%"
      height="10%"
      justify="center"
      align="center"
      //   color={theme.colors.ui.food_delivery_op_color}
      color={
        operation === "food_delivery"
          ? theme.colors.ui.food_delivery_op_color
          : theme.colors.ui.ride_share_op_color
      }
      direction="row"
      onPress={() => null}
    >
      <Container
        width="20%"
        height="100%"
        // color={theme.colors.ui.food_delivery_op_color}
        color={
          operation === "food_delivery"
            ? theme.colors.ui.food_delivery_op_color
            : theme.colors.ui.ride_share_op_color
        }
      />
      <Container
        width="60%"
        height="100%"
        color={
          operation === "food_delivery"
            ? theme.colors.ui.food_delivery_op_color
            : theme.colors.ui.ride_share_op_color
        }
      >
        <Text variant="dm_sans_bold_16_white">Quickies</Text>
      </Container>
      <Container
        width="20%"
        height="100%"
        color={
          operation === "food_delivery"
            ? theme.colors.ui.food_delivery_op_color
            : theme.colors.ui.ride_share_op_color
        }
      >
        <RightArrowIcon
          width={20}
          height={20}
          fill={theme.colors.ui.secondary}
          onPress={() => null}
        />
      </Container>
    </Action_Container>
  );
};
