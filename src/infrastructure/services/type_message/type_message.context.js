import React, { createContext, useState } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import { post_a_typed_message_Request } from "./type_message.requests";
import { recent_messages } from "../../data.dummy";
export const TypeMessageContext = createContext();

export const Type_Message_ContextProvider = ({ children }) => {
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [messageTranslated, setMessageTranslated] = useState({});

  const type_message_request = async (text_to_operate) => {
    setIsLoading(true);
    const encodedText = encodeURIComponent(text_to_operate);
    console.log("TEXT INPUT VALUE AT CONTEXT:", text_to_operate);
    // Here you would typically make an API call to send the message
    // For now, we will just log the value

    const response = await post_a_typed_message_Request(encodedText);
    console.log("Response from API:", JSON.stringify(response.data, null, 2));
    if (response.data) {
      setMessageTranslated(recent_message_to_add);
      setResponse(response.data);
      setIsLoading(false);
      const recent_message_to_add = {
        original_message: response.data.original_message,
        summary_en: response.data.summary.en,
        summary_es: response.data.summary.es,
        message_en: response.data.translation.en,
        message_es: response.data.translation.es,
        language_detected: response.data.language_detected,
        used: 0,
        message_id: uuidv4(),
      };
      recent_messages.push(recent_message_to_add);
      console.log(
        "RECENT MESSAGE TO ADD:",
        JSON.stringify(recent_message_to_add, null, 2)
      );
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
