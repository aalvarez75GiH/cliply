import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./app.navigator";
import { GlobalContext } from "../services/global/global.context";
import { Login_Register_Navigator } from "./login_register.navigator";

// import { AuthenticationContext } from "../services/authentication/authentication.context";

export const Navigation = () => {
  const { isAuthenticated } = useContext(GlobalContext);
  console.log("IS AUTHENTICATED AT NAVIGATION INDEX:", isAuthenticated);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <Login_Register_Navigator />}
      {/* <AppNavigator /> */}
    </NavigationContainer>
  );
};
