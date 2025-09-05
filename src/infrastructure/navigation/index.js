import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./app.navigator";
import { GlobalContext } from "../services/global/global.context";
import Login_User from "../../views/global_views/login_user.view";
import { Login_Register_Navigator } from "./login_register.navigator";

// import { AuthenticationContext } from "../services/authentication/authentication.context";

export const Navigation = () => {
  //   const { isAuthenticated, guest_authenticated, isGuestUser } = useContext(
  //     AuthenticationContext
  //   );
  //   console.log(isAuthenticated);
  const { isAuthenticated } = useContext(GlobalContext);
  console.log("IS AUTHENTICATED AT NAVIGATION INDEX:", isAuthenticated);
  return (
    <NavigationContainer>
      {/* {isAuthenticated ? <AppNavigator /> : <Login_Register_Navigator />} */}
      {/* <HomeNavigator /> */}
      <AppNavigator />
    </NavigationContainer>
  );
};
