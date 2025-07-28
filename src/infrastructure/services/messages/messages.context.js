import React, { createContext, useState } from "react";

import { Spacer } from "../../../components/global_components/optimized.spacer.component";
import { Stored_Messages_Tile } from "../../../components/messages_tiles/stored_message.tile";

export const MessagesContext = createContext();

export const MessagesContextProvider = ({ children }) => {
  const [globalLanguage, setGlobalLanguage] = useState("EN");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const renderItem = ({ item }) => {
    return (
      <Spacer position="bottom" size="medium">
        <Stored_Messages_Tile
          item={item}
          globalLanguage={globalLanguage}
          setIsLoading={setIsLoading}
          selectedItemId={selectedItemId}
          onSelect={setSelectedItemId}
          isLoading={isLoading}
        />
      </Spacer>
    );
  };
  // This context is currently empty, but can be expanded in the future
  return (
    <MessagesContext.Provider
      value={{
        renderItem,
        globalLanguage,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
};
