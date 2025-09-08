import React, { useState, useContext, useRef, useEffect } from "react";
import { KeyboardAvoidingView, Platform, Keyboard } from "react-native";
// import {
//   EmailAuthProvider,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";
import { ActivityIndicator, TextInput } from "react-native-paper";

import { Spacer } from "../../components/global_components/optimized.spacer.component.js";
import { Text } from "../../infrastructure/typography/text.component.js";
import { FormInput } from "../../components/inputs/form.input.js";
import { Container } from "../../components/global_components/containers/general_containers.js";
import { Squared_action_CTA_component } from "../../components/calls_to_action/squared_action.cta.js";

import { SafeArea } from "../../components/global_components/safe-area.component.js";
import { theme } from "../../infrastructure/theme/index.js";
import { ExitHeader } from "../../components/headers/exit_header.component.js";

import { GlobalContext } from "../../infrastructure/services/global/global.context.js";

export default function Register_User({ navigation, route }) {
  const [error, setError] = useState(null);

  const { first_name, setFirst_name, last_name, setLast_name } =
    useContext(GlobalContext);

  const firstNameRef = useRef(null);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     inputRef.current?.focus();
  //   }, 100); // slight delay ensures focus sticks
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      if (firstNameRef.current) {
        firstNameRef.current.focus();
        // Keyboard.show(); // extra guarantee
      }
    }, 100);
    return () => clearTimeout(t);
  }, []);

  const handleBlur = () => {
    setTimeout(() => firstNameRef.current?.focus(), 60);
  };

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
              ref={firstNameRef}
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
              underlineColor={"#dedede"}
              onFocus={() => setError(null)}
              autoFocus
              // onBlur={handleBlur}
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
              ref={firstNameRef}
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
              onBlur={handleBlur}
            />
            <FormInput
              ref={firstNameRef}
              style={{ opacity: 0, height: 0 }} // keep invisible
              autoFocus
              keyboardType="default"
              // onBlur={handleBlur}
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
