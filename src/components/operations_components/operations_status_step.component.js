import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Status_CTA_PNG } from "../calls_to_action/status_cta_png.cta";
import { theme } from "../../infrastructure/theme/index";
import { Container } from "../global_components/containers/general_containers";
import { Spacer } from "../global_components/optimized.spacer.component.js";
import { Circular_Step_Indicator } from "../../components/global_components/small_circular_step_indicator.component.js";

export const Operations_Status_Step_Component = ({
  caption_1,
  caption_2,
  caption_3,
  image_source_1,
  step_indicator_color,
  inverted,
  action,
}) => {
  return !inverted ? (
    <>
      <Container
        width="100%"
        height={"auto"}
        justify="flex-start"
        color={theme.colors.bg.elements_bg}
        //color={"green"}
        align="center"
        direction="row"
      >
        <Spacer position="left" size="medium">
          <Status_CTA_PNG
            caption_1={caption_1}
            caption_2={caption_2}
            action={action}
            inverted={inverted}
            image_source={image_source_1}
          />
        </Spacer>

        <Container
          width="20%"
          height={"100%"}
          justify="center"
          color={theme.colors.bg.elements_bg}
          align="center"
          direction="row"
        >
          <Circular_Step_Indicator
            width={"47%"}
            height={"35%"}
            caption={caption_3}
            color={step_indicator_color}
          />
        </Container>
      </Container>
    </>
  ) : (
    <>
      <Container
        width="100%"
        height={"auto"}
        justify="flex-start"
        color={theme.colors.bg.elements_bg}
        //color={"green"}
        align="center"
        direction="row"
      >
        <Container
          width="20%"
          height={"100%"}
          justify="center"
          color={theme.colors.bg.elements_bg}
          align="center"
          direction="row"
        >
          <Circular_Step_Indicator
            width={"47%"}
            height={"35%"}
            caption={caption_3}
            color={step_indicator_color}
          />
        </Container>
        <Spacer position="left" size="medium">
          <Status_CTA_PNG
            caption_1={caption_1}
            caption_2={caption_2}
            action={action}
            inverted={inverted}
            image_source={image_source_1}
          />
        </Spacer>
      </Container>
    </>
  );
};
