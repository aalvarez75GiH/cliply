import React, { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import * as Clipboard from "expo-clipboard";

import { ExitHeader } from "../../../components/headers/exit_header.component";
import {
  Flex_Container,
  MainContent,
} from "../../../components/global_components/containers/general_containers";
import { SafeArea } from "../../../components/global_components/safe-area.component";
import { theme } from "../../../infrastructure/theme/index";
import { Stage_Sub_Header } from "../../../components/headers/stage_message_sub_header";
import { Recents_Stored_Messages_Tile } from "../../../components/messages_tiles/recents_stored_messages.tile";
import { stage_1_messages } from "../../../infrastructure/data.dummy";
import { Spacer } from "../../../components/global_components/optimized.spacer.component";

export default function Stage_1_Screen({ navigation }) {
  // *********************************************************
  const [copiedText, setCopiedText] = useState("");
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [language, setLanguage] = useState("EN");
  const [languageSelected, setLanguageSelected] = useState(null);
  // *********************************************************
  const copy_message_action = async (item) => {
    const { summary_en, id, summary_es, message_en, message_es } = item;
    console.log("MESSAGE ID:", id);
    console.log(`SUMMARY EN!:, ${summary_en}`);
    console.log(`SUMMARY ES!:, ${summary_es}`);
    console.log(`MESSAGE EN!:, ${message_en}`);
    console.log(`MESSAGE ES!:, ${message_es}`);
    await Clipboard.setStringAsync(language === "EN" ? message_en : message_es);
    console.log(`Copied to clipboard: ${message_en}`);
    // setCopiedText(summary_en);
    setSelectedItemId(id);
  };

  const uncopy_message_action = async (item) => {
    const { summary_en, id, summary_es, message_en, message_es } = item;
    console.log("MESSAGE ID:", id);
    console.log(`SUMMARY EN!:, ${summary_en}`);
    console.log(`SUMMARY ES!:, ${summary_es}`);
    console.log(`MESSAGE EN!:, ${message_en}`);
    console.log(`MESSAGE ES!:, ${message_es}`);
    await Clipboard.setStringAsync("");
    console.log(`Copied to clipboard: ${message_en}`);
    // setCopiedText(summary_en);
    setSelectedItemId(null);
  };

  const changeLanguage = (item) => {
    const { summary_en, id, summary_es, message_en, message_es } = item;
    console.log("MESSAGE ID:", id);
    console.log(`SUMMARY EN!:, ${summary_en}`);
    console.log(`SUMMARY ES!:, ${summary_es}`);
    console.log(`MESSAGE EN!:, ${message_en}`);
    console.log(`MESSAGE ES!:, ${message_es}`);

    if (language === "EN") {
      setLanguage("ES");
      setLanguageSelected(id);
    }
    if (language === "ES") {
      setLanguage("EN");
      setLanguageSelected(id);
    }
    console.log("Language changed to:", language);
  };

  const renderItem = ({ item }) => {
    return (
      <Spacer position="bottom" size="medium">
        <Recents_Stored_Messages_Tile
          item={item}
          action={() => copy_message_action(item)}
          isSelected={selectedItemId === item.id}
          uncopy_action={() => uncopy_message_action(item)}
          language={language}
          changeLanguage={() => changeLanguage(item)}
          languageSelected={languageSelected === item.id}
        />
      </Spacer>
    );
  };

  return (
    <SafeArea background_color="#FFFFFF">
      <Flex_Container color={"red"}>
        <ExitHeader navigation={navigation} />
        <Stage_Sub_Header number="1" label="On my way to location" />
        <MainContent
          color={theme.colors.bg.screens_bg}
          width={"100%"}
          height={"85%"}
          align="center"
          justify="flex-start"
        >
          {/* <Summary_Tile caption="En route, delayed by traffic." /> */}
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={stage_1_messages}
            renderItem={renderItem}
            keyExtractor={(item, id) => {
              return item.id;
            }}
            // itemSeparatorComponent={() => <Container style={{ height: 10 }} />} // Adds 5px vertical spacing
          />
        </MainContent>
      </Flex_Container>
    </SafeArea>
  );
}
