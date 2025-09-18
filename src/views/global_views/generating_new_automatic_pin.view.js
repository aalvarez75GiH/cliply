import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import { SafeArea } from "../../components/global_components/safe-area.component";
import { theme } from "../../infrastructure/theme";
import { ExitHeader } from "../../components/headers/exit_header.component";
import { Container } from "../../components/global_components/containers/general_containers.js";
import { Squared_action_CTA_component } from "../../components/calls_to_action/squared_action.cta.js";
import { Spacer } from "../../components/global_components/optimized.spacer.component.js";
import { Text } from "../../infrastructure/typography/text.component.js";
import { Loading_Spinner_area } from "../../components/global_components/global_loading_spinner_area.component.js";

import { GlobalContext } from "../../infrastructure/services/global/global.context.js";
// import { isLoading } from "expo-font";

export default function Generating_New_Automatic_Pin_View() {
  const navigation = useNavigation();

  const {
    generatingNewPINAndUpdatingUserAtFB,
    automaticPIN,
    isLoading,
    setAutomaticPIN,
    login_action_for_multiple_emails,
  } = useContext(GlobalContext);
  console.log("PIN GENERATED:", automaticPIN);
  return (
    <SafeArea backGroundColor={theme.colors.bg.elements_bg}>
      {isLoading && (
        <>
          <Container
            width={"100%"}
            height={"100%"}
            justify="center"
            align="center"
            color={theme.colors.bg.elements_bg}
          >
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
              <Text variant="dm_sans_bold_18">Generating a PIN number</Text>
            </Container>
          </Container>
        </>
      )}
      {!isLoading && (
        <>
          <ExitHeader
            action={() => {
              setAutomaticPIN("");
              navigation.goBack();
            }}
          />
          <Container
            width="100%"
            height={"100%"}
            // color={"lightblue"}
            color={theme.colors.bg.elements_bg}
            justify="center"
            align="center"
          >
            <Container
              width="100%"
              height={"50%"}
              //   color={"red"}
              color={theme.colors.bg.elements_bg}
              justify="center"
              align="center"
            >
              {!isLoading && automaticPIN.length === 0 && (
                <>
                  <Text variant="dm_sans_bold_22">Tap generate new PIN</Text>
                  <Spacer position="top" size="large" />
                  {/* <Text variant="dm_sans_bold_18">
                    We'll show you a new PIN number
                  </Text>
                  <Text variant="dm_sans_bold_18">
                    We'll send it to you by email too{" "}
                  </Text> */}
                </>
              )}

              {!isLoading && automaticPIN.length > 0 && (
                <>
                  <Text variant="dm_sans_bold_22">
                    This is your new PIN number
                  </Text>
                  <Spacer position="top" size="small" />
                  <Text variant="dm_sans_bold_40" style={{ marginTop: 20 }}>
                    {automaticPIN}
                  </Text>
                  <Spacer position="top" size="small" />
                  <Text variant="dm_sans_bold_18">
                    We sent it to your email as well
                  </Text>
                </>
              )}
              {/* <Text variant="dm_sans_bold_18">by email too... </Text> */}
            </Container>
            <Container
              width="100%"
              height={"50%"}
              //   color={"blue"}
              color={theme.colors.bg.elements_bg}
              justify="flex-end"
              align="center"
            >
              <Squared_action_CTA_component
                label="Generate new PIN"
                icon_visible={false}
                height="15%"
                // action={generatingNewPINAndUpdatingUserAtFB}
                action={async () => {
                  try {
                    const res = await generatingNewPINAndUpdatingUserAtFB();
                    if (res?.ok && res?.next) {
                      console.log("DATA WE PASS TO NEXT VIEW:", res.data);
                      navigation.navigate(res.next, {
                        data: res.data,
                        action_type: "regenerate_pin", // Ensure 'data' is defined
                      });
                    } else {
                      //   console.error("Login failed or invalid response:", res);
                    }
                  } catch (error) {
                    console.error("An error occurred during login:", error);
                  }
                }}
              />
              {/* <Spacer position="bottom" size="large" /> */}
              <Spacer position="bottom" size="large" />
              <Spacer position="bottom" size="extraLarge" />
            </Container>
          </Container>
        </>
      )}
    </SafeArea>
  );
}
