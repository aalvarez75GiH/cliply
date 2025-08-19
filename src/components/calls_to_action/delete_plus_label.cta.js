import React from "react";

import { theme } from "../../infrastructure/theme";
import {
  Container,
  Action_Container,
} from "../global_components/containers/general_containers.js";
import { Text } from "../../infrastructure/typography/text.component.js";
import { Spacer } from "../global_components/optimized.spacer.component.js";
import { Loading_Spinner_Component } from "../global_components/loading_spinner.component.js";

export const Delete_Plus_Label_CTA = ({
  item_to_delete_label,
  action_1,
  action_2,
  item_id,
  user_id,
  isLoading = false,
}) => {
  console.log(
    "ITEM TO DELETE LABEL AT DELETE PLUS LABEL CTA:",
    item_to_delete_label
  );
  console.log("ITEM ID AT DELETE PLUS LABEL CTA:", item_id);
  console.log("USER ID AT DELETE PLUS LABEL CTA:", user_id);

  return (
    <>
      <Container
        width={"100%"}
        height={"20%"}
        color={theme.colors.bg.elements_bg}
        // color={"lightyellow"}
      >
        <Text variant="dm_sans_bold_20">Are you sure you want to delete</Text>
        <Text variant="dm_sans_bold_20">this {item_to_delete_label}? </Text>
      </Container>
      <Container
        width={"100%"}
        height={"10%"}
        color={theme.colors.bg.elements_bg}
        // color={"lightblue"}
        direction="column"
      >
        <Action_Container
          width={"60%"}
          height={"100%"}
          align="center"
          justify="center"
          color={theme.colors.ui.error}
          //   border_radius="60px"
          onPress={action_1}
          style={{
            shadowColor: "#000", // iOS shadow color
            shadowOffset: { width: 1, height: 2 }, // iOS shadow offset
            shadowOpacity: 0.25, // iOS shadow opacity
            shadowRadius: 3.84, // iOS shadow radius
            elevation: 10, // Android shadow
          }}
        >
          {isLoading ? (
            <Loading_Spinner_Component
              bg_color={theme.colors.ui.error}
              spinner_color={theme.colors.ui.secondary}
            />
          ) : (
            <Text variant="dm_sans_bold_20_white">Yes</Text>
          )}
        </Action_Container>
      </Container>
      <Spacer position="top" size="large" />
      <Action_Container
        width={"60%"}
        height={"5%"}
        align="center"
        justify="center"
        color={theme.colors.bg.elements_bg}
        // color={"blue"}
        onPress={isLoading ? null : action_2}
      >
        <Text
          variant={
            isLoading ? "dm_sans_bold_14_disable_not_active" : "dm_sans_bold_14"
          }
          style={{
            textDecorationLine: "underline",
          }}
        >
          No, take me back
        </Text>
      </Action_Container>
    </>
  );
};
