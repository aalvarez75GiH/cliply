import React from "react";
import useCustomFonts from "../../hooks/useFonts.js";

import { Rounded_Ctas_Belt } from "../../components/belts/rounded_ctas_belt.component.js";
import { Main_mic_CTA_component } from "../../components/calls_to_action/main_mic_cta.component.js";
import {
  Container,
  Flex_Container,
  Scrollabe_MainContent,
} from "../../components/global_components/containers/general_containers.js";
// import { Scrollabe_MainContent } from "../../src/components/global_components/containers/main_content.js";
import { HomeHeader } from "../../components/headers/home_header.component.js";
import { SafeArea } from "../../components/global_components/safe-area.component.js";
import { theme } from "../../infrastructure/theme/index.js";

export default function HomeScreen() {
  //   const fontsLoaded = useCustomFonts();
  //   if (!fontsLoaded) return null;

  const action = () => {
    console.log("Action pressed!");
  };
  return (
    <SafeArea background_color="#FFFFFF">
      <Flex_Container
        align="center"
        color={theme.colors.ui.secondary}
        // flex={1}
      >
        <HomeHeader />
        <Container
          width={"100%"}
          height={"99%"}
          // justify="center"
          align="center"
          color={theme.colors.bg.screens_bg}
        >
          <Rounded_Ctas_Belt action={action} />
          <Scrollabe_MainContent
            width={"100%"}
            height={"89%"}
            color={theme.colors.bg.screens_bg}
          >
            <Main_mic_CTA_component />
          </Scrollabe_MainContent>
        </Container>
      </Flex_Container>
    </SafeArea>
  );
}

// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";

// export default function Home_View() {
//   return (
//     <View style={styles.container}>
//       <Text>I am Home View</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
