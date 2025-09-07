import React, { useState, useContext, useEffect, useRef } from "react";
import { Platform } from "react-native";
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

import { SafeArea } from "../../components/global_components/safe-area.component.js";
import { theme } from "../../infrastructure/theme/index.js";

import { GlobalContext } from "../../infrastructure/services/global/global.context.js";
import { KeyboardAvoidingView } from "react-native";

export default function Login_User({ route }) {
  const navigation = useNavigation();
  const {
    setIsAuthenticated,
    loginUser,
    errorInAuthentication,
    temporaryAuthentication,
    setPin,
    pin,
  } = useContext(GlobalContext);

  const inputRef = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 100); // slight delay ensures focus sticks

    const logAsyncStorage = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const items = await AsyncStorage.multiGet(keys);

        console.log("AsyncStorage contents:");
        items.forEach(([key, value]) => {
          console.log(`${key}: ${value}`);
        });
      } catch (error) {
        console.error("Error reading AsyncStorage:", error);
      }
    };
    // const checkAuthentication = async () => {
    //   try {
    //     const isAuthenticated = await AsyncStorage.getItem("isAuthenticated");

    //     if (isAuthenticated === "true") {
    //       console.log("USER IS AUTHENTICATED:", isAuthenticated);
    //       setIsAuthenticated(true);
    //     } else {
    //       console.log("USER NOT AUTHENTICATED:", isAuthenticated);
    //       setIsAuthenticated(false);
    //     }
    //   } catch (error) {
    //     console.error("Error checking authentication:", error);
    //   }
    // };

    // checkAuthentication();
    logAsyncStorage();

    return () => clearTimeout(timer);
  }, []);

  //   useEffect(() => {
  //     const checkAuthentication = async () => {
  //       try {
  //         const isAuthenticated = await AsyncStorage.getItem("isAuthenticated");

  //         if (isAuthenticated === "true") {
  //           console.log("USER IS AUTHENTICATED:", isAuthenticated);
  //           setIsAuthenticated(true);
  //         } else {
  //           console.log("USER NOT AUTHENTICATED:", isAuthenticated);
  //           setIsAuthenticated(false);
  //         }
  //       } catch (error) {
  //         console.error("Error checking authentication:", error);
  //       }
  //     };

  //     checkAuthentication();
  //   }, []);

  // const submit = () => {
  //   if (!/^\d{4}$/.test(pin)) {
  //     setError("Enter your 4-digit PIN.");
  //     return;
  //   }
  //   setError(null);
  //   // TODO: your auth logic with `pin`
  // };

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
            // color={"yellow"}
          >
            <PinDotsInput
              length={6}
              value={pin}
              onChange={setPin}
              onFulfill={temporaryAuthentication} // enable to auto-submit once 4 digits entered
              themeColor="#000000" // idle dot color (the gray you showed)
              digitColor="#000000"
              size={18}
            />
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
            <Action_Container
              width="70%"
              height="25%"
              justify="center"
              align="center"
              color="transparent"
              //   border_radius={8}
              border_radius_top_left={"30px"}
              border_radius_top_right={"30px"}
              border_radius_bottom_left={"30px"}
              border_radius_bottom_right={"30px"}
              border={"3px"}
              onPress={() => null}
            >
              <Text variant="dm_sans_bold_16">Forgot pin number</Text>
            </Action_Container>
            <Container
              width="60%"
              height="45%"
              justify="center"
              align="center"
              color="transparent"
              //   border_radius={8}
              border_radius_top_left={30}
              border_radius_top_right={30}
              border_radius_bottom_left={30}
              border_radius_bottom_right={30}
              direction="row"
            >
              <Container
                width="60%"
                height="30%"
                justify="center"
                align="center"
                color="transparent"
              >
                <Text variant="dm_sans_bold_16">Nor registered?</Text>
              </Container>
              <Action_Container
                width="30%"
                height="30%"
                justify="center"
                align="center"
                color="transparent"
                onPress={() => {
                  // setEmail("");
                  // setFirst_name("");
                  // setLast_name("");
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
          </Container>

          <Spacer size="large" />

          {errorInAuthentication && (
            <Container
              width="100%"
              height="5%"
              justify="center"
              align="flex-start"
              // color="red"
              // backgroundColor="red"
              paddingLeft="5%"
            >
              <Text variant="dm_sans_bold_24">{errorInAuthentication}</Text>
            </Container>
          )}
        </Container>
      </KeyboardAvoidingView>
    </SafeArea>
  );
}
