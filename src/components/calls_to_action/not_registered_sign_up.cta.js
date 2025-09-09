import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Action_Container,
} from "../global_components/containers/general_containers";
import { Text } from "../../infrastructure/typography/text.component";

import { theme } from "../../infrastructure/theme";

export const Not_Registered_Sign_Up_CTA = () => {
  const navigation = useNavigation();
  return (
    <Container
      width="60%"
      height="45%"
      justify="center"
      align="center"
      color="transparent"
      direction="row"
    >
      <Container
        width="60%"
        height="30%"
        justify="center"
        align="center"
        color="transparent"
      >
        <Text variant="dm_sans_bold_16">Not registered?</Text>
      </Container>
      <Action_Container
        width="30%"
        height="30%"
        justify="center"
        align="center"
        color="transparent"
        onPress={() => {
          navigation.navigate("Register_user_View");
        }}
      >
        <Text
          variant="dm_sans_bold_16"
          style={{
            textDecorationLine: "underline",
          }}
        >
          Sign up
        </Text>
      </Action_Container>
    </Container>
  );
};
