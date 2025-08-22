import React, { createContext, useState, useContext, useEffect } from "react";
import "react-native-get-random-values";

import { GlobalContext } from "../global/global.context.js";
import { get_User_Data_Request } from "./text_clips.requests.js";

import { Spacer } from "../../../components/global_components/optimized.spacer.component.js";
import { Stored_Clips_Tile } from "../../../components/tiles/stored_clip.tile.js";

export const TextClipsContext = createContext();

export const TextClipsContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [introAdded, setIntroAdded] = useState(false);
  // const [intro, setIntro] = useState("");

  const { userToDB, globalLanguage } = useContext(GlobalContext);
  const { user_id } = userToDB || {}; // Ensure userToDB is not undefined or null
  console.log("USER ID AT HOME CONTEXT:", user_id);

  useEffect(() => {
    gettingUserData(user_id);
  }, []);

  const gettingUserData = async (user_id) => {
    try {
      const user_data = await get_User_Data_Request(user_id);
      setUserData(user_data.data);
    } catch (error) {
      console.error("ERROR GETTING USER DATA AT HOME CONTEXT:", error.message);
    }
  };

  // const recordingRef = useRef(null);
  console.log("USER DATA AT STATE:", JSON.stringify(userData, null, 2));

  const renderStoredMessagesTile = ({ item }) => {
    return (
      <Spacer position="bottom" size="medium">
        <Stored_Clips_Tile
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

  return (
    <TextClipsContext.Provider
      value={{
        userData,
        gettingUserData,
        renderStoredMessagesTile,
        setSelectedItemId,
        isLoading,
        setIsLoading,
        introAdded,
        setIntroAdded,
        // globalLanguage,
      }}
    >
      {children}
    </TextClipsContext.Provider>
  );
};
