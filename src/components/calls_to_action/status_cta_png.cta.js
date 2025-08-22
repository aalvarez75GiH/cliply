// import MenuIcon from "../../../assets/my-icons/two_stripes_menu.svg";
import React from "react";
// import { Image } from "react-native";
import { Image } from "expo-image";

import { Text } from "../../infrastructure/typography/text.component";

import { theme } from "../../infrastructure/theme/index";
import {
  Action_Container,
  Container,
} from "../global_components/containers/general_containers";
import { Spacer } from "../global_components/optimized.spacer.component";

export const Status_CTA_PNG = ({
  caption_1,
  caption_2,
  action,
  inverted = false,
  aspectRatio = 1024 / 650,
  radius = 16,
  image_source,
}) => {
  return !inverted ? (
    <Action_Container
      width="320px"
      height="110px"
      justify="center"
      align="center"
      color={theme.colors.ui.primary} // Fallback to "red" if theme is undefined
      direction="row"
      onPress={action}
      borderRadius="20px"
      border_radius_top_left="20px"
      border_radius_bottom_left="20px"
      border_radius_top_right="10px"
      border_radius_bottom_right="10px"
    >
      <Container
        width="55%"
        height="100%"
        color={theme.colors.ui.primary} // Fallback to "red" if theme is undefined
        justify="center"
        align="center"
        // color="lightblue"
        direction="row"
        border_radius_top_left="15px"
        border_radius_bottom_left="15px"
        style={{ overflow: "hidden" }}
      >
        <Image
          source={image_source}
          style={{
            width: "100%",
            height: "100%",
            aspectRatio,
            borderRadius: radius,
            borderRadiusTopLeft: 10,
            borderRadiusBottomLeft: 10,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }}
          resizeMode="cover"
        />
      </Container>
      <Container
        width="45%"
        height="100%"
        justify="center"
        align="center"
        color="transparent"
        direction="row"
        border_radius="10px"
      >
        <Spacer position="left" size="medium">
          <Text variant="dm_sans_bold_16_white">{caption_1}</Text>
          <Text variant="dm_sans_bold_16_white">{caption_2}</Text>
        </Spacer>
      </Container>
    </Action_Container>
  ) : (
    <Action_Container
      width="320px"
      height="110px"
      justify="center"
      align="center"
      color={theme.colors.ui.primary} // Fallback to "red" if theme is undefined
      direction="row"
      onPress={action}
      border_radius_top_right="20px"
      border_radius_bottom_right="20px"
      border_radius_top_left="10px"
      border_radius_bottom_left="10px"
    >
      <Container
        width="45%"
        height="100%"
        justify="center"
        align="center"
        color="transparent"
        direction="row"
        border_radius="10px"
      >
        <Spacer position="left" size="medium">
          <Text variant="dm_sans_bold_16_white">{caption_1}</Text>
          <Text variant="dm_sans_bold_16_white">{caption_2}</Text>
        </Spacer>
      </Container>
      <Container
        width="55%"
        height="100%"
        justify="center"
        align="center"
        color="lightblue"
        direction="row"
        border_radius_top_right="10px"
        border_radius_bottom_right="10px"
      >
        <Image
          source={image_source}
          style={{
            width: "100%",
            height: "100%",
            aspectRatio,
            // borderRadius: radius,
            borderRadiusTopLeft: 10,
            borderRadiusBottomLeft: 10,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }}
        />
      </Container>
    </Action_Container>
  );
};
