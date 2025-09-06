import React from "react";
import { Spacer } from "../../../components/global_components/optimized.spacer.component";
import { Stored_Clips_Tile } from "../../../components/tiles/stored_clip.tile";

// export const Shared_logic = ({
//     globalLanguage,
//     setIsLoading,
//     selectedItemId,
//     setSelectedItemId,
//     isLoading,
//     dataForUsedCountUpdate,
//   }) => {
//     const renderStoredMessagesTile = ({ item }) => {
//       return (
//         <Spacer position="bottom" size="medium">
//           <Stored_Clips_Tile
//             item={item}
//             globalLanguage={globalLanguage}
//             setIsLoading={setIsLoading}
//             selectedItemId={selectedItemId}
//             onSelect={setSelectedItemId}
//             isLoading={isLoading}
//             dataForUsedCountUpdate={dataForUsedCountUpdate}
//           />
//         </Spacer>
//       );
//     };

//     return renderStoredMessagesTile; // Return the function if it's meant to be used elsewhere
//   };

export const renderStoredMessagesTile = ({
  item,
  globalLanguage,
  setIsLoading,
  selectedItemId,
  setSelectedItemId,
  isLoading,
  dataForUsedCountUpdate,
}) => {
  return (
    <Spacer position="bottom" size="medium">
      <Stored_Clips_Tile
        item={item}
        globalLanguage={globalLanguage}
        setIsLoading={setIsLoading}
        selectedItemId={selectedItemId}
        onSelect={setSelectedItemId}
        isLoading={isLoading}
        dataForUsedCountUpdate={dataForUsedCountUpdate}
      />
    </Spacer>
  );
};
