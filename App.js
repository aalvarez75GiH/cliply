import React from "react";
import "react-native-reanimated";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { ThemeProvider } from "styled-components/native";
// import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Navigation } from "./src/infrastructure/navigation";
import { theme } from "./src/infrastructure/theme";
// ***************************************************

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

// ***************************************************

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  // const [loaded] = useFonts({
  //   DM_Sans_regular: require("./assets/fonts/DMSans-Regular.ttf"),
  //   DM_Sans_semi_bold: require("./assets/fonts/DMSans-SemiBold.ttf"),
  //   DM_Sans_semi_medium: require("./assets/fonts/DMSans-Medium.ttf"),
  //   DM_Sans_bold: require("./assets/fonts/DMSans-Bold.ttf"),
  // });

  // if (!loaded) {
  //   // Async font loading only occurs in development.
  //   return null;
  // }

  // if (!loaded) {
  //   return (
  //     <View style={styles.loaderContainer}>
  //       <ActivityIndicator size="large" color="#0000ff" />
  //     </View>
  //   );
  // }

  // if (__DEV__ && originalConsole && Platform.OS !== "android") {
  //   // Console wrapping logic here
  //   const [dmSansRegularLoaded] = useRegDMS({
  //     DMSans_400Regular,
  //   });
  //   const [dmSansMediumLoaded] = useMediumDMS({
  //     DMSans_500Medium,
  //   });
  //   const [dmSansBoldLoaded] = useBoldDMS({
  //     DMSans_700Bold,
  //   });

  //   if (!dmSansRegularLoaded || !dmSansMediumLoaded || !dmSansBoldLoaded) {
  //     return null;
  //   }

  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Navigation />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

// const styles = StyleSheet.create({
//   loaderContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
