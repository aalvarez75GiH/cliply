import React, { createContext, useState, useContext } from "react";

import { Spacer } from "../../../components/global_components/optimized.spacer.component";
import { Stored_Messages_Tile } from "../../../components/messages_tiles/stored_messages.tile";
import { Recent_clips_Tile } from "../../../components/tiles/recent_clips.tile";

import { GlobalContext } from "../global/global.context";
export const VoiceRecentClipsContext = createContext();

export const VoiceRecentClipsContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const { globalLanguage } = useContext(GlobalContext);

  const renderRecentClipsTile = ({ item }) => {
    return (
      <Spacer position="bottom" size="medium">
        <Recent_clips_Tile
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
    <VoiceRecentClipsContext.Provider
      value={{
        globalLanguage,
        isLoading,
        setIsLoading,
        renderRecentClipsTile,
      }}
    >
      {children}
    </VoiceRecentClipsContext.Provider>
  );
};
