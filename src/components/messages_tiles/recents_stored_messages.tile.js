import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";

import { Text } from "../../infrastructure/typography/text.component.js";
import { EN_ES_CTA_component } from "../calls_to_action/en_es.cta.js";
import {
  Container,
  Action_Container,
} from "../global_components/containers/general_containers.js";
import CopyPaste_icon from "../../../assets/my-icons/copy_paste.svg";
import { theme } from "../../infrastructure/theme/index.js";
import {
  Recents_Stored_Messages_Summary_Caption,
  Recents_Stored_Messages_Summary_Footer,
  Recents_Stored_Message_Caption,
  Recents_Stored_Message_Footer,
} from "./recents_stored_messages.elements.js";

export const Recents_Stored_Messages_Tile = ({
  item,
  action,
  isSelected,
  uncopy_action,
  // language,
  changeLanguage,
  // languageSelected,
}) => {
  const [language, setLanguage] = useState("EN");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "EN" ? "ES" : "EN"));
  };

  const copy_message_action = async (item) => {
    const { id, message_en, message_es } = item;

    await Clipboard.setStringAsync(language === "EN" ? message_en : message_es);
    console.log(`Copied to clipboard: ${message_en}`);
    setSelectedItemId(id);
  };

  const { summary_en, summary_es, message_en, message_es, id } = item;
  console.log("IS SELECTED:", isSelected);
  // console.log("LANGUAGE SELECTED:", languageSelected);
  // console.log("MESSAGE ES:", message_es);
  console.log("LANGUAGE:", language);

  return (
    <>
      <Container
        width="410px"
        height="210px"
        align="center"
        justify="flex-start"
        // color={theme.colors.bg.elements_bg}
        color={"red"}
        style={{
          shadowColor: "#000", // iOS shadow color
          shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
          shadowOpacity: 0.25, // iOS shadow opacity
          shadowRadius: 3.84, // iOS shadow radius
          elevation: 5, // Android shadow
        }}
      >
        {/* ****************** SUMMARY ************************ */}
        {language === "EN" && (
          <>
            {!isSelected && (
              <Recents_Stored_Messages_Summary_Caption
                summary_caption={summary_en}
              />
            )}

            {!isSelected && (
              <Recents_Stored_Messages_Summary_Footer
                action={copy_message_action}
                changeLanguage={toggleLanguage}
                language={language}
              />
            )}

            {isSelected && (
              <>
                <Recents_Stored_Message_Caption message_caption={message_en} />
              </>
            )}

            {isSelected && (
              <Recents_Stored_Message_Footer uncopy_action={uncopy_action} />
            )}
          </>
        )}
        {language === "ES" && (
          <>
            {!isSelected && (
              <Recents_Stored_Messages_Summary_Caption
                summary_caption={summary_es}
              />
            )}

            {!isSelected && (
              <Recents_Stored_Messages_Summary_Footer
                action={copy_message_action}
                changeLanguage={toggleLanguage}
                language={language}
              />
            )}

            {isSelected && (
              <Recents_Stored_Message_Caption summary_caption={message_es} />
            )}

            {isSelected && (
              <Recents_Stored_Message_Footer uncopy_action={uncopy_action} />
            )}
          </>
        )}

        {/* ****************************************** */}
      </Container>
    </>
  );
};
