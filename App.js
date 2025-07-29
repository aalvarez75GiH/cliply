import React from "react";
import "react-native-reanimated";
import { ThemeProvider } from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Navigation } from "./src/infrastructure/navigation";
import { theme } from "./src/infrastructure/theme";
import { MessagesContextProvider } from "./src/infrastructure/services/messages/messages.context";
import { HomeContext } from "./src/infrastructure/services/home/home.context";
import { HomeContextProvider } from "./src/infrastructure/services/home/home.context";
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
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <HomeContextProvider>
          <MessagesContextProvider>
            <Navigation />
          </MessagesContextProvider>
        </HomeContextProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
