import React, { useState, useContext, useEffect, useRef } from "react";
import { Platform } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { validatingEmail } from "../../infrastructure/services/global/global.context.js";

import { Spacer } from "../../components/global_components/optimized.spacer.component.js";
import { Text } from "../../infrastructure/typography/text.component.js";
import { PinDotsInput } from "../../components/inputs/pin_dots.input.js";
import { FormInput } from "../../components/inputs/form.input.js";
import {
  Container,
  Action_Container,
} from "../../components/global_components/containers/general_containers.js";
import { Loading_Spinner_area } from "../../components/global_components/global_loading_spinner_area.component.js";

import { SafeArea } from "../../components/global_components/safe-area.component.js";
import { theme } from "../../infrastructure/theme/index.js";
import { Forgot_PIN_CTA } from "../../components/calls_to_action/forgot_pin.cta.js";
import { Not_Registered_Sign_Up_CTA } from "../../components/calls_to_action/not_registered_sign_up.cta.js";
import { GlobalContext } from "../../infrastructure/services/global/global.context.js";

export default function Login_User({ route }) {
  const navigation = useNavigation();
  const {
    errorInAuthentication,
    setPin,
    pin,
    loginUser,
    isLoading,
    setErrorInAuthentication,
    checkAuthentication,
    logAsyncStorage,
  } = useContext(GlobalContext);

  const inputRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 100); // slight delay ensures focus sticks

    checkAuthentication();
    logAsyncStorage();

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeArea backgroundColor={theme.colors.bg.elements_bg}>
      {isLoading && (
        <Container
          width="100%"
          height={"81%"}
          color={"lightblue"}
          justify="center"
          align="center"
        >
          <Loading_Spinner_area />
        </Container>
      )}

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
          <Container
            width="100%"
            height="40%"
            justify="flex-end"
            align="center"
            // color={"blue"}
            color={theme.colors.bg.elements_bg}
          >
            <Text variant="dm_sans_bold_40">Cliply</Text>
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
            // color={"yellow"}
          >
            <PinDotsInput
              length={6}
              value={pin}
              onChange={(newPin) => {
                setPin(newPin); // Update the pin state
                if (newPin.length === 6) {
                  loginUser(newPin); // Pass the updated pin directly
                }
                if (newPin === "") {
                  setErrorInAuthentication(null); // Set error when PIN is cleared
                } else {
                  setErrorInAuthentication(null); // Clear error when PIN is not empty
                }
              }}
              onFulfill={(pin) => loginUser(pin)} // enable to auto-submit once 4 digits entered
              themeColor="#000000" // idle dot color (the gray you showed)
              digitColor="#000000"
              size={18}
            />
            {errorInAuthentication && (
              <Spacer position="left" size="small">
                <Text
                  variant="dm_sans_bold_12_error_cancel"
                  style={{ padding: 10, textAlign: "center" }}
                >
                  {errorInAuthentication}
                </Text>
              </Spacer>
            )}
            <FormInput
              ref={inputRef}
              style={{ opacity: 0, height: 0 }} // keep invisible
              autoFocus
              keyboardType="numeric"
            />
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
            <Forgot_PIN_CTA />
            <Not_Registered_Sign_Up_CTA />
          </Container>

          <Spacer size="large" />
        </Container>
      </KeyboardAvoidingView>
    </SafeArea>
  );
}
