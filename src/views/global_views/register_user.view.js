import React, { useState, useContext, useRef, useEffect } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
// import {
//   EmailAuthProvider,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";
import { ActivityIndicator, TextInput } from "react-native-paper";

import { Spacer } from "../../components/global_components/optimized.spacer.component.js";
import { Text } from "../../infrastructure/typography/text.component.js";
import { FormInput } from "../../components/inputs/form.input.js";
import EmailIcon from "../../../assets/my-icons/email_icon.svg";
import UserIcon from "../../../assets/my-icons/account_icon.svg";
import EyeIcon from "../../../assets/my-icons/open_eye_icon.png";
import ClosedEyeIcon from "../../../assets/my-icons/closed_eye_icon.png";
import { Container } from "../../components/global_components/containers/general_containers.js";
import { Squared_action_CTA_component } from "../../components/calls_to_action/squared_action.cta.js";

import { SafeArea } from "../../components/global_components/safe-area.component.js";
import { theme } from "../../infrastructure/theme/index.js";
import { ExitHeader } from "../../components/headers/exit_header.component.js";

import { GlobalContext } from "../../infrastructure/services/global/global.context.js";

export default function Register_User({ navigation, route }) {
  const [error, setError] = useState(null);

  const {
    first_name,
    setFirst_name,
    last_name,
    setLast_name,
    validatingEmail,
  } = useContext(GlobalContext);

  const inputRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 100); // slight delay ensures focus sticks
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeArea backgroundColor={theme.colors.bg.elements_bg}>
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
          <ExitHeader action={() => navigation.goBack()} />
          <Container
            width="100%"
            height="12%"
            color={"lightblue"}
            //color={theme.colors.bg.elements_bg}
            justify="center"
            align="center"
          >
            <Spacer position="left" size="large">
              <Text variant="dm_sans_bold_28">Sign Up</Text>
            </Spacer>
          </Container>
          <Container
            width="100%"
            height="65%"
            //   color={"lightyellow"}
            color={theme.colors.bg.elements_bg}
            justify="flex-start"
            align="center"
          >
            <Container
              width="100%"
              height="10%"
              // color={"brown"}
              justify="flex-start"
              align="center"
              color={theme.colors.bg.elements_bg}
            />
            <FormInput
              label="First name"
              value={first_name}
              textContentType={""}
              keyboardType="default"
              autoCapitalize="none"
              onChangeText={(value) => setFirst_name(value)}
              theme={{
                colors: { primary: theme.colors.brand.primary },
              }}
              style={{
                height: 80,
              }}
              //   underlineColor={theme.colors.brand.primary}
              underlineColor={"#dedede"}
              // right={<TextInput.Icon icon={UserIcon} />}
              onFocus={() => setError(null)}
            />
            <Container
              color={theme.colors.bg.elements_bg}
              width="100%"
              height="5%"
              // color={"brown"}
              justify="flex-start"
              align="center"
            />
            <Spacer size="large" />
            <FormInput
              label="Last name"
              value={last_name}
              textContentType=""
              style={{
                height: 80,
              }}
              secureTextEntry={false}
              autoCapitalize="none"
              secure
              onChangeText={(value) => setLast_name(value)}
              theme={{ colors: { primary: theme.colors.brand.primary } }}
              underlineColor={"#dedede"}
              onFocus={() => setError(null)}
            />
            <FormInput
              ref={inputRef}
              style={{ opacity: 0, height: 0 }} // keep invisible
              autoFocus
              keyboardType="default"
            />
          </Container>

          <Squared_action_CTA_component
            label="Next"
            action={() => navigation.navigate("Register_User_View_2")}
            icon_visible={false}
            height="12%"
          />
        </Container>
        {/* </KeyboardAwareScrollView> */}
      </KeyboardAvoidingView>
    </SafeArea>
  );
}
