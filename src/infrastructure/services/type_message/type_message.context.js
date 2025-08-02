import React, { createContext, useState } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import { post_a_typed_message_Request } from "./type_message.requests";
import { recent_messages } from "../../data.dummy";
export const TypeMessageContext = createContext();

export const Type_Message_ContextProvider = ({ children }) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [messageTranslated, setMessageTranslated] = useState({});

  const type_message_request = async (text_to_operate) => {
    setIsLoading(true);
    try {
      const encodedText = encodeURIComponent(text_to_operate);
      console.log("TEXT INPUT VALUE AT CONTEXT:", text_to_operate);
      const response = await post_a_typed_message_Request(encodedText);
      console.log("RESPONSE FROM API:", JSON.stringify(response.data, null, 2));
      const recent_message_to_add = {
        original_message: response.data.original_message,
        summary_en: response.data.summary_en,
        summary_es: response.data.summary_es,
        message_en: response.data.message_en,
        message_es: response.data.message_es,
        language_detected: response.data.language_detected,
        used: 0,
        message_id: uuidv4(),
      };
      console.log(
        "RECENT_MESSAGE_TO_ADD:",
        JSON.stringify(recent_message_to_add, null, 2)
      );
      recent_messages.push(recent_message_to_add);
      if (response.data) {
        setMessageTranslated(recent_message_to_add);
        setResponse(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Error in type_message_request:", error);
    }
  };

  return (
    <TypeMessageContext.Provider
      value={{
        type_message_request,
        setResponse,
        response,
        isLoading,
        messageTranslated,
      }}
    >
      {children}
    </TypeMessageContext.Provider>
  );
};
