import React, { createContext, useState } from "react";

import { Spacer } from "../../../components/global_components/optimized.spacer.component";
import { Stored_Messages_Tile } from "../../../components/messages_tiles/stored_copied_message.tile";

export const MessagesContext = createContext();

export const MessagesContextProvider = ({ children }) => {
  const [globalLanguage, setGlobalLanguage] = useState("EN");
  const renderItem = ({ item }) => {
    return (
      <Spacer position="bottom" size="medium">
        <Stored_Messages_Tile item={item} globalLanguage={globalLanguage} />
      </Spacer>
    );
  };
  // This context is currently empty, but can be expanded in the future
  return (
    <MessagesContext.Provider
      value={{
        renderItem,
        globalLanguage,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
};
