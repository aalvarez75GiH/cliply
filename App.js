import React from "react";
import "react-native-reanimated";
import { ThemeProvider } from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Navigation } from "./src/infrastructure/navigation";
import { theme } from "./src/infrastructure/theme";
import { MessagesContextProvider } from "./src/infrastructure/services/messages/messages.context";
import { VoiceRecentClipsContextProvider } from "./src/infrastructure/services/voice_recents/voice_recent.context";
import { HomeContextProvider } from "./src/infrastructure/services/home/home.context";
import { Type_Message_ContextProvider } from "./src/infrastructure/services/type_message/type_message.context";
import { GlobalContextProvider } from "./src/infrastructure/services/global/global.context";
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
        <GlobalContextProvider>
          <HomeContextProvider>
            <VoiceRecentClipsContextProvider>
              <MessagesContextProvider>
                <Type_Message_ContextProvider>
                  <Navigation />
                </Type_Message_ContextProvider>
              </MessagesContextProvider>
            </VoiceRecentClipsContextProvider>
          </HomeContextProvider>
        </GlobalContextProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
