import React, { useContext, useEffect, useRef } from "react";
import { Platform } from "react-native";
import { KeyboardAvoidingView, ActivityIndicator } from "react-native";

import { Spacer } from "../../components/global_components/optimized.spacer.component.js";
import { Text } from "../../infrastructure/typography/text.component.js";
import { PinDotsInput } from "../../components/inputs/pin_dots.input.js";
import { FormInput } from "../../components/inputs/form.input.js";
import { Container } from "../../components/global_components/containers/general_containers.js";
import { SafeArea } from "../../components/global_components/safe-area.component.js";
import { theme } from "../../infrastructure/theme/index.js";
import { Not_Registered_Sign_Up_CTA } from "../../components/calls_to_action/not_registered_sign_up.cta.js";
import { Outlined_CTA } from "../../components/calls_to_action/outlined.cta.js";

import { GlobalContext } from "../../infrastructure/services/global/global.context.js";

export default function Login_User({ route }) {
  const {
    errorInAuthentication,
    setPin,
    pin,
    loginUser,
    isLoading,
    setErrorInAuthentication,
    checkAuthentication,
    logAsyncStorage,
    temporaryAuthentication,
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
                onFulfill={(pin) => loginUser(pin)}
                themeColor="#000000" // idle dot color (the gray you showed)
                digitColor="#000000"
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
              {isLoading && (
                <Container
                  width={"100%"}
                  height={"100%"}
                  justify="center"
                  align="center"
                  color={"transparent"}
                  // color={"red"}
                  direction="row"
                >
                  <ActivityIndicator size="small" color={"#000000"} />
                </Container>
              )}
              {!isLoading && errorInAuthentication && (
                <Spacer position="left" size="small">
                  <Text
                    variant="dm_sans_bold_12_error_cancel"
                    style={{ padding: 10, textAlign: "center" }}
                  >
                    {errorInAuthentication}
                  </Text>
                </Spacer>
              )}
            </Container>
          </Container>

          {/* <FormInput
            ref={inputRef}
            style={{ opacity: 0, height: 0 }} // keep invisible
            autoFocus
            keyboardType="numeric"
          /> */}
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
            <Outlined_CTA
              width={"70%"}
              height={"25%"}
              label="Forgot pin number"
              border_radius="30px"
              border_width="2px"
              label_variant="dm_sans_bold_16"
              action={() => null}
            />
            <Not_Registered_Sign_Up_CTA />
          </Container>

          <Spacer size="large" />
        </Container>
      </KeyboardAvoidingView>
    </SafeArea>
  );
}
