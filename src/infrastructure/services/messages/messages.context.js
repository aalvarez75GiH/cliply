import React, { createContext, useState, useContext } from "react";

import { Spacer } from "../../../components/global_components/optimized.spacer.component";
import { Recents_Messages_Tile } from "../../../components/messages_tiles/recents_messages.tile";
import { Stored_Messages_Tile } from "../../../components/messages_tiles/stored_messages.tile";
import {
  issues_at_store,
  traffic_and_delays,
  issues_at_restaurant,
  car_integrity,
  long_distances,
  passenger_location,
  dinners_location,
  multiple_orders,
} from "../../../infrastructure/local_data/messages_by_catgories.data";

import { GlobalContext } from "../global/global.context";
export const MessagesContext = createContext();

export const MessagesContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const { globalLanguage } = useContext(GlobalContext);
  const [dataTorender, setDataToRender] = useState([]);
  const [headers_caption, set_Headers_Caption] = useState("");

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

  // useEffect(() => {
  //   switch (category) {
  //     case "issues_at_store":
  //       console.log("issues_at_store");
  //       setDataToRender(issues_at_store);
  //       set_Headers_Caption("Issues at store");
  //       break;
  //     case "traffic_and_delays":
  //       console.log("traffic_and_delays");
  //       setDataToRender(traffic_and_delays);
  //       set_Headers_Caption("Traffic and Delays");
  //       break;
  //     case "issues_at_restaurant":
  //       console.log("issues_at_restaurant");
  //       setDataToRender(issues_at_restaurant);
  //       set_Headers_Caption("Issues at restaurant");
  //       break;
  //     case "car_integrity":
  //       console.log("car_integrity");
  //       setDataToRender(car_integrity);
  //       set_Headers_Caption("Car Integrity");
  //       break;
  //     case "long_distances":
  //       console.log("long_distances");
  //       setDataToRender(long_distances);
  //       set_Headers_Caption("Long Distances");
  //       break;
  //     case "passenger_location":
  //       console.log("passenger_location");
  //       setDataToRender(passenger_location);
  //       set_Headers_Caption("Passenger Location");
  //       break;
  //     case "dinners_location":
  //       console.log("dinners_location");
  //       setDataToRender(dinners_location);
  //       set_Headers_Caption("Dinners Location");
  //       break;
  //     case "multiple_orders":
  //       console.log("multiple_orders");
  //       setDataToRender(multiple_orders);
  //       set_Headers_Caption("Multiple Orders");
  //       break;

  //     default:
  //       break;
  //   }
  // }, [category, headers_caption]);

  const setting_data_and_captions_to_messages = (category) => {
    switch (category) {
      case "issues_at_store":
        console.log("issues_at_store");
        setDataToRender(issues_at_store);
        set_Headers_Caption("Issues at store");
        break;
      case "traffic_and_delays":
        console.log("traffic_and_delays");
        setDataToRender(traffic_and_delays);
        set_Headers_Caption("Traffic and Delays");
        break;
      case "issues_at_restaurant":
        console.log("issues_at_restaurant");
        setDataToRender(issues_at_restaurant);
        set_Headers_Caption("Issues at restaurant");
        break;
      case "car_integrity":
        console.log("car_integrity");
        setDataToRender(car_integrity);
        set_Headers_Caption("Car Integrity");
        break;
      case "long_distances":
        console.log("long_distances");
        setDataToRender(long_distances);
        set_Headers_Caption("Long Distances");
        break;
      case "passenger_location":
        console.log("passenger_location");
        setDataToRender(passenger_location);
        set_Headers_Caption("Passenger Location");
        break;
      case "dinners_location":
        console.log("dinners_location");
        setDataToRender(dinners_location);
        set_Headers_Caption("Dinners Location");
        break;
      case "multiple_orders":
        console.log("multiple_orders");
        setDataToRender(multiple_orders);
        set_Headers_Caption("Multiple Orders");
        break;

      default:
        break;
    }
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
        setting_data_and_captions_to_messages,
        dataTorender,
        headers_caption,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
};
