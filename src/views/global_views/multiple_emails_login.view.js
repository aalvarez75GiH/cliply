import React, { useState, useContext, act } from "react";
import { FlatList } from "react-native";

import { Spacer } from "../../components/global_components/optimized.spacer.component.js";
import { Text } from "../../infrastructure/typography/text.component.js";
import { Text_Tile } from "../../components/tiles/text.tile.js";
import { FormInput } from "../../components/inputs/form.input.js";
import { Loading_Spinner_area } from "../../components/global_components/global_loading_spinner_area.component.js";
import { Container } from "../../components/global_components/containers/general_containers.js";
import { SafeArea } from "../../components/global_components/safe-area.component.js";
import { theme } from "../../infrastructure/theme/index.js";
import { ExitHeader } from "../../components/headers/exit_header.component.js";

import { GlobalContext } from "../../infrastructure/services/global/global.context.js";

export default function Multiple_Emails_LoginIn_View({ navigation, route }) {
  const [error, setError] = useState(null);
  const { data, action_type } = route.params;
  const {
    signingInWithEmailAndPasswordFunction,
    pin,
    renderEmailForLoginTile,
    errorInAuthentication,
    isLoading,
    setFirst_name,
    setLast_name,
    login_action_for_multiple_emails,
    generate_PIN_action_for_multiple_emails,
  } = useContext(GlobalContext);
  const action =
    action_type === "login"
      ? login_action_for_multiple_emails
      : action_type === "regenerate_pin"
      ? generate_PIN_action_for_multiple_emails
      : null;
  //   : regenerate_PIN_action_for_multiple_emails;
  console.log(
    "DATA PASSED TO MULTIPLE EMAILS VIEW:",
    JSON.stringify(data, null, 2)
  );

  console.log("ACTION TYPE:", action_type);

  return (
    <SafeArea backgroundColor={theme.colors.bg.elements_bg}>
      {isLoading && (
        <>
          <Container
            width={"100%"}
            height={"40%"}
            justify="center"
            align="center"
            color={theme.colors.bg.elements_bg}
          />
          <Loading_Spinner_area
            color={theme.colors.bg.elements_bg}
            height="10%"
          />
          <Container
            width={"100%"}
            height={"10%"}
            justify="center"
            align="center"
            // color="red"
            color={theme.colors.bg.elements_bg}
          >
            <Text variant="dm_sans_bold_18">Wait, we are sining you in...</Text>
          </Container>
        </>
      )}
      {!isLoading && (
        <Container
          width={"100%"}
          height={"100%"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          color={theme.colors.bg.elements_bg}
          // color="yellow"
        >
          <Container
            width="100%"
            height="100%"
            color={theme.colors.bg.screens_bg}
            justify="flex-start"
            align="center"
            //   color="lightblue"
          >
            <ExitHeader
              action={() => {
                setFirst_name("");
                setLast_name("");
                setError(null);
                navigation.goBack();
              }}
            />
            <Spacer position="top" size="small" />

            <Text_Tile
              caption_1={"Select the email"}
              caption_2={"you want to log in with"}
              color={theme.colors.ui.highlight_color_2}
              // color={"#0D965B"}
              height={"10%"}
            />
            <Spacer position="top" size="small" />
            <Container
              width={"100%"}
              height={"70%"}
              color={theme.colors.bg.screens_bg}
            >
              <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={data}
                //   renderItem={(item) => renderEmailForLoginTile(item, pin)}
                renderItem={({ item }) =>
                  renderEmailForLoginTile({
                    item,
                    pin,
                    action,
                  })
                }
                keyExtractor={(item, id) => {
                  return item.toString() + id.toString();
                }}
              />
            </Container>

            <Spacer position="top" size="small" />
            <Spacer position="top" size="small" />
            <Spacer position="top" size="small" />
            {errorInAuthentication && (
              <Text
                variant="dm_sans_bold_12_error_cancel"
                style={{ textAlign: "center", paddingHorizontal: 20 }}
              >
                {errorInAuthentication}
              </Text>
            )}
          </Container>
          <Spacer position="top" size="small" />
          <Spacer position="top" size="small" />
          <Spacer position="top" size="small" />
          <Spacer position="top" size="small" />
        </Container>
      )}
    </SafeArea>
  );
}
