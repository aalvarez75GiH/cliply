import React from "react";

import { Text } from "../../infrastructure/typography/text.component.js";
import { Container } from "../global_components/containers/general_containers.js";
import { theme } from "../../infrastructure/theme/index.js";
import { Spacer } from "../global_components/optimized.spacer.component.js";

export const Text_Tile = ({ caption_1, caption_2 }) => {
  return (
    <>
      <Container
        width="100%"
        height={"20%"}
        color={theme.colors.bg.screens_bg}
        //color={"blue"}
        direction="row"
      >
        <Container
          width="70%"
          height="100%"
          // color="yellow"
          justify="center"
          align="flex-start"
          color={theme.colors.bg.elements_bg}
        >
          <Spacer position="left" size="large">
            <Spacer position="top" size="large" />
            <Text variant="dm_sans_bold_20">{caption_1}</Text>
            <Text variant="dm_sans_bold_14_disable_not_active">
              {caption_2}
            </Text>
          </Spacer>
        </Container>
        <Container
          width="30%"
          height="100%"
          color={theme.colors.bg.elements_bg}
        ></Container>
      </Container>
    </>
  );
};
