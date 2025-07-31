import React, { createContext, useState } from "react";

import { post_a_typed_message_Request } from "./type_message.requests";
import { recent_messages } from "../../data.dummy";
export const TypeMessageContext = createContext();

export const Type_Message_ContextProvider = ({ children }) => {
  const [response, setResponse] = useState(null);
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
    const recent_message_to_add = {
      summary_en: response.data.summary.en,
      summary_es: response.data.summary.es,
      message_en: response.data.translation.en,
      message_es: response.data.translation.es,
      original_message: text_to_operate,
      used: 0,
    };
    recent_messages.push(recent_message_to_add);
    setMessageTranslated(recent_message_to_add);

    if (response.data) {
      setResponse(response.data);
      setIsLoading(false);
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
