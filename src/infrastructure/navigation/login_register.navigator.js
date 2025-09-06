import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import Register_User_View from "../../views/global_views/register_user.view";
// import Register_User_View_2 from "../../views/global_views/register_user_2.view";
import Login_User from "../../views/global_views/login_user.view";
// import Successful_Process_View from "../../views/global_views/successfull_process.view";
const LoginRegisterStack = createNativeStackNavigator();

export const Login_Register_Navigator = () => {
  return (
    <LoginRegisterStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <LoginRegisterStack.Screen
        name="Login_user_View"
        component={Login_User}
      />
      {/* <LoginRegisterStack.Screen
        name="Register_user_View"
        component={Register_User_View}
      />
      <LoginRegisterStack.Screen
        name="Register_User_View_2"
        component={Register_User_View_2}
      /> */}
      {/* <LoginRegisterStack.Screen
        name="Successful_View"
        component={Successful_Process_View}
      /> */}
    </LoginRegisterStack.Navigator>
  );
};
