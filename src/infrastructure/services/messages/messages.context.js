import React, { createContext, useState, useContext } from "react";

import { Spacer } from "../../../components/global_components/optimized.spacer.component";
import { Recents_Messages_Tile } from "../../../components/messages_tiles/recents_messages.tile";
import { Stored_Messages_Tile } from "../../../components/messages_tiles/stored_messages.tile";

import { GlobalContext } from "../global/global.context";
export const MessagesContext = createContext();

export const MessagesContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const { globalLanguage } = useContext(GlobalContext);

  const renderRecentsMessagesTile = ({ item }) => {
    return (
      <Spacer position="bottom" size="medium">
        <Recents_Messages_Tile
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
  const renderStoredMessagesTile = ({ item }) => {
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
        globalLanguage,
        isLoading,
        setIsLoading,
        renderRecentsMessagesTile,
        renderStoredMessagesTile,
        // setting_data_and_captions_to_messages,
        // dataTorender,
        // headers_caption,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
};
