import React, { useState, useContext, useEffect, useRef } from "react";
import { Platform, KeyboardAvoidingView } from "react-native";
import { ActivityIndicator, TextInput } from "react-native-paper";

import { Spacer } from "../../components/global_components/optimized.spacer.component.js";
import { Text } from "../../infrastructure/typography/text.component.js";
import { FormInput } from "../../components/inputs/form.input.js";
import EmailIcon from "../../../assets/my-icons/email_icon.svg";
import { Container } from "../../components/global_components/containers/general_containers.js";
import { Squared_action_CTA_component } from "../../components/calls_to_action/squared_action.cta.js";
import { SafeArea } from "../../components/global_components/safe-area.component.js";
import { theme } from "../../infrastructure/theme/index.js";
import { ExitHeader } from "../../components/headers/exit_header.component.js";
import { Loading_Spinner_area } from "../../components/global_components/global_loading_spinner_area.component.js";

import { GlobalContext } from "../../infrastructure/services/global/global.context.js";
// import eye_on_icon from "../../../assets/pictures/ui/eye_on_icon.png";
// import eye_off_icon from "../../../assets/pictures/ui/eye_off_icon.png";

export default function Register_User_View_2({ navigation, route }) {
  const {
    setEmail,
    email,
    emailError,
    validatingEmail,
    setEmailError,
    registerUser,
    user_added_successfully,
    isLoading,
  } = useContext(GlobalContext);

  const inputRef = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 100); // slight delay ensures focus sticks
    return () => clearTimeout(timer);
  }, []);

  const handleBlur = () => {
    setTimeout(() => inputRef.current?.focus(), 60);
  };

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
      {!isLoading &&
        user_added_successfully &&
        navigation.navigate("Successful_View")}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        {/* <KeyboardAwareScrollView enableOnAndroid={true} extraHeight={590}> */}
        <Container
          width={"100%"}
          height={"100%"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          color={theme.colors.bg.elements_bg}
          //   color="red"
        >
          <Spacer position="top" size="large" />
          <Spacer position="top" size="large" />
          <Spacer position="top" size="large" />
          <ExitHeader action={() => navigation.goBack()} />
          <Container
            width="100%"
            height="15%"
            // color={"lightblue"}
            color={theme.colors.bg.elements_bg}
            justify="center"
            align="center"
          >
            {/* <Spacer position="top" size="large" />
            <Spacer position="top" size="large" />*/}
            <Spacer position="left" size="large">
              <Text variant="dm_sans_bold_28">Sign Up</Text>
            </Spacer>
          </Container>
          <Container
            width="100%"
            height="55%"
            //color={"lightyellow"}
            color={theme.colors.bg.elements_bg}
            justify="flex-start"
            align="center"
          >
            <Container
              //color={theme.colors.bg.elements_bg}
              width="100%"
              height="15%"
              //   color={"brown"}
              color={theme.colors.bg.elements_bg}
              justify="flex-start"
              align="center"
            />
            <Spacer size="large" />
            <FormInput
              label="Email"
              value={email}
              textContentType={"emailAddress"}
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(value) => {
                setEmailError(null);
                setEmail(value);
              }}
              theme={{ colors: { primary: theme.colors.brand.primary } }}
              //   underlineColor={theme.colors.brand.primary}
              underlineColor={"#dedede"}
              right={<TextInput.Icon icon={EmailIcon} width={35} height={35} />}
              onFocus={() => setEmailError(null)}
              style={{
                height: 80,
              }}
              onBlur={handleBlur}
            />
            {emailError && (
              <Container
                width="100%"
                height="20%"
                justify="center"
                align="flex-start"
                color={theme.colors.bg.elements_bg}
              >
                <Spacer position="left" size="small">
                  <Text
                    variant="dm_sans_bold_12_error_cancel"
                    style={{ padding: 10, textAlign: "center" }}
                  >
                    {emailError}
                  </Text>
                </Spacer>
              </Container>
            )}
            <FormInput
              ref={inputRef}
              style={{ opacity: 0, height: 0 }} // keep invisible
              autoFocus
              keyboardType="default"
            />
          </Container>

          <Squared_action_CTA_component
            label="Register"
            action={async () => {
              const emailValidated = validatingEmail(email);
              console.log("EMAIL_VALIDATED:", emailValidated);
              if (emailValidated) {
                try {
                  await registerUser();
                } catch (error) {
                  console.log("REGISTER_USER_ERROR:", error);
                }
                navigation.navigate("Successful_View");
              }
              //   registerUser(email, password);
            }}
            icon_visible={false}
            height="12%"
          />
        </Container>
      </KeyboardAvoidingView>
    </SafeArea>
  );
}
