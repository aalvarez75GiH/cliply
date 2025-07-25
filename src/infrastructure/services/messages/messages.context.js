import React, { useState, createContext } from "react";
import * as Clipboard from "expo-clipboard";

import { Spacer } from "../../../components/global_components/optimized.spacer.component";
import { Recents_Stored_Messages_Tile } from "../../../components/messages_tiles/recents_stored_messages.tile";
export const MessagesContext = createContext();

export const MessagesContextProvider = ({ children }) => {
  const [copiedText, setCopiedText] = useState("");
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [language, setLanguage] = useState("EN");
  const [languageSelected, setLanguageSelected] = useState(null);

  const copy_message_action = async (item) => {
    const { summary_en, id, summary_es, message_en, message_es } = item;
    // console.log("MESSAGE ID:", id);
    // console.log(`SUMMARY EN!:, ${summary_en}`);
    // console.log(`SUMMARY ES!:, ${summary_es}`);
    // console.log(`MESSAGE EN!:, ${message_en}`);
    // console.log(`MESSAGE ES!:, ${message_es}`);
    await Clipboard.setStringAsync(language === "EN" ? message_en : message_es);
    console.log(`Copied to clipboard: ${message_en}`);
    // setCopiedText(summary_en);
    setSelectedItemId(id);
  };

  const uncopy_message_action = async (item) => {
    const { summary_en, id, summary_es, message_en, message_es } = item;
    // console.log("MESSAGE ID:", id);
    // console.log(`SUMMARY EN!:, ${summary_en}`);
    // console.log(`SUMMARY ES!:, ${summary_es}`);
    // console.log(`MESSAGE EN!:, ${message_en}`);
    // console.log(`MESSAGE ES!:, ${message_es}`);
    await Clipboard.setStringAsync("");
    console.log(`Copied to clipboard: ${message_en}`);
    // setCopiedText(summary_en);
    setSelectedItemId(null);
  };

  const changeLanguage = (item) => {
    const { summary_en, id, summary_es, message_en, message_es } = item;

    setLanguage((prevLanguage) => (prevLanguage === "EN" ? "ES" : "EN"));
    setLanguageSelected(id);

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
  // This context is currently empty, but can be expanded in the future
  return (
    <MessagesContext.Provider
      value={{
        changeLanguage,
        selectedItemId,
        setSelectedItemId,
        language,
        setLanguage,
        languageSelected,
        setLanguageSelected,
        renderItem,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
};
