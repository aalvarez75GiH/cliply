import React from "react";
import { useNavigation } from "@react-navigation/native";

import { ExitHeader } from "../../components/headers/exit_header.component.js";

import { SafeArea } from "../../components/global_components/safe-area.component.js";
import { theme } from "../../infrastructure/theme/index.js";
import {
  Action_Container,
  Container,
} from "../../components/global_components/containers/general_containers.js";
import { Spacer } from "../../components/global_components/optimized.spacer.component.js";
import { Text } from "../../infrastructure/typography/text.component.js";

export default function Delete_Item_View({ route }) {
  const { item_id, user_id, item_to_delete } = route.params;
  console.log("Delete_Item_View: item_id:", item_id);
  console.log("USER ID AT DELETE VIEW:", user_id);

  const navigation = useNavigation();
  return (
    <SafeArea background_color={theme.colors.bg.elements_bg}>
      <Container
        // color={"lightyellow"}
        width={"100%"}
        height={"100%"}
        align="center"
        justify="flex-start"
        // color={theme.colors.bg.elements_bg}
        color={theme.colors.bg.screens_bg}
      >
        <ExitHeader />

        <Container
          color={theme.colors.bg.elements_bg}
          //   color={"lightyellow"}
          width={"100%"}
          height={"92%"}
          align="center"
          justify="center"
        >
          <Container
            width={"100%"}
            height={"20%"}
            color={theme.colors.bg.elements_bg}
          >
            {/* <Spacer position="left" size="small"> */}
            <Text variant="dm_sans_bold_20">
              Are you sure you want to delete
            </Text>
            <Text variant="dm_sans_bold_20">this {item_to_delete}? </Text>
            {/* </Spacer> */}
          </Container>
          <Action_Container
            width={"60%"}
            height={"10%"}
            align="center"
            justify="center"
            color={theme.colors.ui.error}
            border_radius="60px"
            onPress={null}
          >
            <Text variant="dm_sans_bold_20_white">Yes</Text>
          </Action_Container>
          <Spacer position="top" size="large" />
          <Action_Container
            width={"60%"}
            height={"5%"}
            align="center"
            justify="center"
            color={theme.colors.bg.elements_bg}
            // color={"blue"}
            onPress={() => navigation.goBack()}
          >
            <Text
              variant="dm_sans_bold_14"
              style={{
                textDecorationLine: "underline",
              }}
            >
              No, take me back
            </Text>
          </Action_Container>
        </Container>
      </Container>
    </SafeArea>
  );
}
