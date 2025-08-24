// import MenuIcon from "../../../assets/my-icons/two_stripes_menu.svg";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Text } from "../../infrastructure/typography/text.component";
import RightArrowIcon from "../../../assets/my-icons/arrow_next_icon.svg";

import { theme } from "../../infrastructure/theme/index";
import {
  Action_Container,
  Container,
} from "../global_components/containers/general_containers";
import { TextClipsContext } from "../../infrastructure/services/home/text_clips.context";
import QuickIcon from "../../../assets/my-icons/time_icon.svg";
import MicIcon from "../../../assets/my-icons/micIcon.svg";
import { Spacer } from "../global_components/optimized.spacer.component";

export const Quickies_CTA = ({ language, action, isSelected }) => {
  const { operation } = useContext(TextClipsContext);
  console.log("operation at Quickie", operation);
  const navigation = useNavigation();

  return (
    <Action_Container
      width="100%"
      height="10%"
      justify="center"
      align="center"
      //   color={
      //     operation === "food_delivery"
      //       ? theme.colors.ui.food_delivery_op_color
      //       : theme.colors.ui.ride_share_op_color
      //   }
      //   color={theme.colors.bg.elements_bg}
      color={"#DEDEDE"}
      direction="row"
      onPress={() =>
        navigation.navigate("Quickies_Text_Clips_View", {
          operation: operation,
        })
      }
    >
      {/* <Action_Container
        width="50%"
        height="100%"
        color={theme.colors.bg.screens_bg}
        borderTopWidth="2px"
        borderTopColor={"#EBEBEB"}
        borderTopStyle="solid"
      >
        <MicIcon width="30px" height="30px" fill="#000000" />
        <Spacer position="top" size="small" />
        <Text variant="dm_sans_bold_14">Voice</Text>
      </Action_Container> */}
      {/* <Container width="0.13%" height="10%" color={theme.colors.ui.disabled} /> */}
      {/* <Container
        width="60%"
        height="100%"
        color={
          operation === "food_delivery"
            ? theme.colors.ui.food_delivery_op_color
            : theme.colors.ui.ride_share_op_color
        }
      >
        <Text variant="dm_sans_bold_16_white">Quickies</Text>
      </Container> */}
      <Action_Container
        width="50%"
        height="100%"
        borderTopWidth="2px"
        borderTopColor={"#EBEBEB"}
        borderTopStyle="solid"
        // color={
        //   operation === "food_delivery"
        //     ? theme.colors.ui.food_delivery_op_color
        //     : theme.colors.ui.ride_share_op_color
        // }
        //color={theme.colors.bg.elements_bg}
        color={"#DEDEDE"}
        onPress={() =>
          navigation.navigate("Quickies_Text_Clips_View", {
            operation: operation,
          })
        }
      >
        <QuickIcon width={25} height={25} />
        <Spacer position="top" size="small" />
        <Text variant="dm_sans_bold_14">Quickies</Text>
      </Action_Container>
    </Action_Container>
  );
};

// return (
//     <Action_Container
//       width="100%"
//       height="10%"
//       justify="center"
//       align="center"
//       color={
//         operation === "food_delivery"
//           ? theme.colors.ui.food_delivery_op_color
//           : theme.colors.ui.ride_share_op_color
//       }
//       direction="row"
//       onPress={() =>
//         navigation.navigate("Quickies_Text_Clips_View", {
//           operation: operation,
//         })
//       }
//     >
//       <Container
//         width="20%"
//         height="100%"
//         color={
//           operation === "food_delivery"
//             ? theme.colors.ui.food_delivery_op_color
//             : theme.colors.ui.ride_share_op_color
//         }
//       />
//       <Container
//         width="60%"
//         height="100%"
//         color={
//           operation === "food_delivery"
//             ? theme.colors.ui.food_delivery_op_color
//             : theme.colors.ui.ride_share_op_color
//         }
//       >
//         <Text variant="dm_sans_bold_16_white">Quickies</Text>
//       </Container>
//       <Container
//         width="20%"
//         height="100%"
//         color={
//           operation === "food_delivery"
//             ? theme.colors.ui.food_delivery_op_color
//             : theme.colors.ui.ride_share_op_color
//         }
//       >
//         <RightArrowIcon
//           width={20}
//           height={20}
//           fill={theme.colors.ui.secondary}
//           onPress={() => null}
//         />
//       </Container>
//     </Action_Container>
//   );
