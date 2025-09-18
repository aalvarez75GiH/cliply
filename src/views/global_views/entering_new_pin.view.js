import React, { useContext, useEffect, useRef } from "react";
import { Platform } from "react-native";
import {
  KeyboardAvoidingView,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Spacer } from "../../components/global_components/optimized.spacer.component.js";
import { Text } from "../../infrastructure/typography/text.component.js";
import { PinDotsInput } from "../../components/inputs/pin_dots.input.js";
import { FormInput } from "../../components/inputs/form.input.js";
import { Container } from "../../components/global_components/containers/general_containers.js";
import { SafeArea } from "../../components/global_components/safe-area.component.js";
import { theme } from "../../infrastructure/theme/index.js";
import { Not_Registered_Sign_Up_CTA } from "../../components/calls_to_action/not_registered_sign_up.cta.js";
import { Outlined_CTA } from "../../components/calls_to_action/outlined.cta.js";
import { ExitHeader } from "../../components/headers/exit_header.component.js";
import { GlobalContext } from "../../infrastructure/services/global/global.context.js";
import { Loading_Spinner_area } from "../../components/global_components/global_loading_spinner_area.component.js";
import { Squared_action_CTA_component } from "../../components/calls_to_action/squared_action.cta.js";

export default function Entering_New_PIN_View({ route }) {
  const {
    isLoading,
    checkAuthentication,
    logAsyncStorage,
    updatingPINOnDemandAndUpdatingUserAtFB,
    new_pin,
    setNew_pin,
    errorInUpdatingPIN,
    setErrorInUpdatingPIN,
    setIsLoading,
  } = useContext(GlobalContext);
  const navigation = useNavigation();

  const inputRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 100); // slight delay ensures focus sticks

    // checkAuthentication();
    // logAsyncStorage();

    return () => clearTimeout(timer);
  }, []);
  let isProcessing = false; // Add a flag to prevent duplicate execution

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
            <Text variant="dm_sans_bold_18">Wait, we are updating</Text>
            <Spacer position="bottom" size="small" />
            <Text variant="dm_sans_bold_18">your Pin number...</Text>
          </Container>
        </>
      )}
      {!isLoading && (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <Container
            width={"100%"}
            height={"100%"}
            justify={"flex-start"}
            align={"center"}
            color={theme.colors.bg.elements_bg}
            //   color="red"
          >
            <ExitHeader
              action={() => {
                setIsLoading(false);
                navigation.goBack();
              }}
            />
            <Container
              width="100%"
              height="40%"
              justify="flex-end"
              align="center"
              // color={"blue"}
              color={theme.colors.bg.elements_bg}
            >
              <Text variant="dm_sans_bold_28">Enter your new PIN</Text>
              <Spacer position="bottom" size="large" />
              <Spacer position="bottom" size="large" />
              <Spacer position="bottom" size="large" />
            </Container>

            <Container
              width="80%"
              height="20%"
              justify="center"
              align="center"
              color={theme.colors.bg.elements_bg}
              //color={"yellow"}
            >
              <Container
                width="100%"
                height="50%"
                justify="center"
                align="center"
                color={theme.colors.bg.elements_bg}
                //color={"green"}
              >
                <PinDotsInput
                  length={6}
                  value={new_pin}
                  onChange={(newPin) => {
                    setNew_pin(newPin); // Update the pin state
                    if (newPin.length === 6) {
                      updatingPINOnDemandAndUpdatingUserAtFB(newPin); // Pass the updated pin directly
                    }
                    if (newPin === "") {
                      setErrorInUpdatingPIN(null); // Set error when PIN is cleared
                    } else {
                      setErrorInUpdatingPIN(null); // Clear error when PIN is not empty
                    }
                  }}
                  //   onFulfill={async (new_pin) => {
                  //     if (isProcessing) {
                  //       console.warn(
                  //         "onFulfill is already processing. Please wait."
                  //       );
                  //       return;
                  //     }
                  //     isProcessing = true;
                  //     console.log("NEW PIN AT ON FUL FILL:", new_pin);
                  //     try {
                  //       const res = await updatingPINOnDemandAndUpdatingUserAtFB(
                  //         new_pin
                  //       );
                  //       console.log("RES AT FULFILL:", res);
                  //       if (res?.success) {
                  //         Keyboard.dismiss();
                  //         // setTimeout(() => {
                  //         //   setNew_pin("");
                  //         navigation.navigate("Successful_View");
                  //         isProcessing = false; // Reset the flag after processing
                  //         // }, 500); // Add a slight delay to ensure the keyboard is dismissed
                  //         // setNew_pin("");
                  //         // navigation.navigate("Successful_View");
                  //       } else {
                  //         isProcessing = false; // Reset the flag if not successful
                  //       }
                  //     } catch (error) {
                  //       console.error(
                  //         "An error occurred during updating pin:",
                  //         error
                  //       );
                  //       isProcessing = false;
                  //     }
                  //   }}
                  onFulfill={async (new_pin) => {
                    if (isProcessing) {
                      console.warn(
                        "onFulfill is already processing. Please wait."
                      );
                      return;
                    }
                    isProcessing = true;
                    console.log("NEW PIN AT ON FULFILL:", new_pin);
                    try {
                      const res = await updatingPINOnDemandAndUpdatingUserAtFB(
                        new_pin
                      );
                      console.log("RES AT FULFILL:", res);
                      if (res?.success) {
                        Keyboard.dismiss();
                        // setTimeout(() => {
                        navigation.navigate("Successful_View");
                        isProcessing = false; // Reset the flag after processing
                        // }, 300); // Add a slight delay to ensure the keyboard is dismissed
                      } else {
                        isProcessing = false; // Reset the flag if not successful
                      }
                    } catch (error) {
                      console.error(
                        "An error occurred during updating pin:",
                        error
                      );
                      //   isProcessing = false;
                    } finally {
                      isProcessing = false; // Ensure the flag is reset in case of an error
                    }
                  }}
                  themeColor={theme.colors.ui.primary} // idle dot color (the gray you showed)
                  digitColor={theme.colors.ui.primary}
                  size={18}
                />
              </Container>
              <Container
                width="100%"
                height="50%"
                justify="center"
                align="center"
                color={theme.colors.bg.elements_bg}
                //color={"lightblue"}
              >
                {!isLoading && errorInUpdatingPIN && (
                  <Spacer position="left" size="small">
                    <Text
                      variant="dm_sans_bold_12_error_cancel"
                      style={{ padding: 10, textAlign: "center" }}
                    >
                      {errorInUpdatingPIN}
                    </Text>
                  </Spacer>
                )}
              </Container>
            </Container>

            <Container
              width="100%"
              height="40%"
              justify="center"
              align="center"
              color={theme.colors.bg.elements_bg}
              // color={"yellow"}
            >
              <Spacer position="bottom" size="large" />
              <Spacer position="bottom" size="large" />
              <Spacer position="bottom" size="extraLarge" />
            </Container>

            <Spacer size="large" />
          </Container>
        </KeyboardAvoidingView>
      )}
    </SafeArea>
  );
}
