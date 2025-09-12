import React, { useState, useContext, use } from "react";
import * as Clipboard from "expo-clipboard";
import { ActivityIndicator, Platform } from "react-native";

// import { Text } from "../../infrastructure/typography/text.component.js";
import { EN_ES_CTA_component } from "../calls_to_action/en_es.cta.js";
import {
  Container,
  Action_Container,
} from "../global_components/containers/general_containers.js";
import CopyPaste_icon from "../../../assets/my-icons/copy_paste.svg";
import { theme } from "../../infrastructure/theme/index.js";
import { useNavigation } from "@react-navigation/native";
import { Text } from "../../infrastructure/typography/text.component.js";

// import { TextClipsContext } from "../../infrastructure/services/home/text_clips.context.js";
import { GlobalContext } from "../../infrastructure/services/global/global.context.js";
import { Spacer } from "../global_components/optimized.spacer.component.js";

export const Email_For_Login_Tile = ({
  item,
  action,
  globalLanguage,
  //   action_1,
  data,
  pin,
  //   selectedItemId,
  //   onSelect,
  //   dataForUsedCountUpdate,
}) => {
  console.log("DATA PASSED TO EMAIL FOR LOGIN TILE:", item);
  const navigation = useNavigation();
  //   *******************************************************
  //   const [language, setLanguage] = useState(globalLanguage);
  //   const [isLoading, setIsLoading] = useState(false);
  //   const { summary, body, message_id } = item;

  const { signingInWithEmailAndPasswordFunction } = useContext(GlobalContext);
  //   const { introAdded, setIntroAdded, updatingTextClipsUsedCount } =
  //     useContext(TextClipsContext);

  //   const isSelected = selectedItemId === message_id;
  //   *******************************************************

  return (
    <>
      {/* {isLoading && (
        <Container
          width={Platform.OS === "ios" ? "400px" : "100%"}
          height="210px"
          color={"#FFFFFF"}
          justify="center"
          align="center"
        >
          <ActivityIndicator size="small" color="#000000" />
        </Container>
      )} */}
      <Action_Container
        width="410px"
        height="100px"
        justify="center"
        align="flex-start"
        // color={"blue"}
        color={theme.colors.bg.elements_bg}
        onPress={() => action(item)}
        // onPress={
        //   async () => {
        //     const res = await signingInWithEmailAndPasswordFunction(
        //       data[1],
        //       pin
        //     );
        //     if (res?.ok && res?.next) {
        //       console.log("AHhhHHHHHHHH:", res.data);
        //       navigation.navigate(res.next, {
        //         data: res.data, // Ensure 'data' is defined
        //       });
        //     } else {
        //       console.error("Login failed or invalid response:", res);
        //     }
        //   } // TODO: Replace "dummyPassword" with actual password handling
        // }
      >
        <Spacer position="left" size="extraLarge">
          <Text variant="dm_sans_bold_20">{item}</Text>
        </Spacer>
      </Action_Container>
    </>
  );
};
