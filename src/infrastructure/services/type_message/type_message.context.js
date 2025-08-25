import React, { createContext, useState, useContext } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import { post_a_typed_message_Request } from "./type_message.requests";

import { TextClipsContext } from "../home/text_clips.context";

export const TypeMessageContext = createContext();

export const Type_Message_ContextProvider = ({ children }) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [messageTranslated, setMessageTranslated] = useState({});

  const { gettingUserData } = useContext(TextClipsContext);
  const type_message_request = async (text_to_operate, user_id) => {
    setIsLoading(true);
    try {
      const encodedText = encodeURIComponent(text_to_operate);
      const response = await post_a_typed_message_Request(encodedText, user_id);

      if (response.data) {
        setMessageTranslated(response.data);
        setResponse(response.data);
        setIsLoading(false);
        gettingUserData(user_id);
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
