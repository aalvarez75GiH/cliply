import React, { createContext, useState, useContext, useEffect } from "react";
import "react-native-get-random-values";

import { GlobalContext } from "../global/global.context.js";
import { get_User_Data_Request } from "./text_clips.requests.js";

import { Spacer } from "../../../components/global_components/optimized.spacer.component.js";
import { Stored_Clips_Tile } from "../../../components/tiles/stored_clip.tile.js";
import { Quickies_Tile } from "../../../components/tiles/quickies.tile.js";

export const TextClipsContext = createContext();

const nextStepInitialState = {
  status_view: "Clips_by_Status_View_1",
  operation_name: "food_delivery",
  status_name: "heading_to_pickup/shop",
  caption: "Heading to pickup/shop",
  bottom_bar_caption: "Heading to pickup/shop",
};
const nextStepInitialState_RS = {
  status_view: "Clips_by_Status_View_1",
  operation_name: "ride_share",
  status_name: "heading_to_passenger",
  caption: "Heading to passenger",
  bottom_bar_caption: "Heading to passenger",
};

export const TextClipsContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [introAdded, setIntroAdded] = useState(false);
  const [operation, setOperation] = useState("food_delivery");
  const [nextStep, setNextStep] = useState(nextStepInitialState);
  const [nextStepRS, setNextStepRS] = useState(nextStepInitialState_RS);
  console.log("NEXT STEP AT HOME CONTEXT:", nextStep);

  const resetNextStepState = (bottom_bar_caption) => {
    if (bottom_bar_caption === "Restart") {
      navigation.navigate("Home_View");
      setNextStep(nextStepInitialState);
    } else {
      navigation.navigate(nextStep.status_view, nextStep);
    }
  };

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
  const renderQuickiesTile = ({ item }) => {
    return (
      <Spacer position="bottom" size="medium">
        <Quickies_Tile
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
        renderQuickiesTile,
        nextStep,
        setNextStep,
        nextStepInitialState,
        nextStepRS,
        setNextStepRS,
        resetNextStepState,
        operation,
        setOperation,
      }}
    >
      {children}
    </TextClipsContext.Provider>
  );
};
