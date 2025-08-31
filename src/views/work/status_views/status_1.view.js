import React, { useState, useContext, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";

import { ExitHeader } from "../../../components/headers/exit_header.component";
import { SafeArea } from "../../../components/global_components/safe-area.component";
import { theme } from "../../../infrastructure/theme/index";
import { Spacer } from "../../../components/global_components/optimized.spacer.component";
import {
  Container,
  Action_Container,
} from "../../../components/global_components/containers/general_containers";
import { Text } from "../../../infrastructure/typography/text.component";
import { Text_Clips_By_Status_Sub_Header } from "../../../components/headers/text_clips_by_operations_and_status.header";
import { Add_intro_CTA } from "../../../components/calls_to_action/add_intro.cta";

import { TextClipsContext } from "../../../infrastructure/services/home/text_clips.context";

export default function Text_Clips_by_Status_View_1({ navigation, route }) {
  const { operation_name, status_name, caption } = route.params;

  const {
    renderStoredMessagesTile,
    setSelectedItemId,
    introAdded,
    setIntroAdded,
    userData,
    nextStep,
    setNextStep,
  } = useContext(TextClipsContext);

  const { global_operations } = userData;
  const { statuses } = global_operations.find(
    (op) => op.operation_name === operation_name
  ) || { statuses: [] };
  const status_to_render = statuses.find(
    (st) => st.status_name === status_name
  );
  console.log(
    "GLOBAL OPERATIONS AT TEXT CLIPS VIEW:",
    JSON.stringify(global_operations, null, 2)
  );
  console.log(
    "STATUSES AT TEXT CLIPS VIEW:",
    JSON.stringify(statuses, null, 2)
  );
  console.log(
    "STATUS NAME AT TEXT CLIPS VIEW:",
    JSON.stringify(status_to_render, null, 2)
  );

  const [dataToRender, setDataToRender] = useState([]);
  const [headers_caption, set_Headers_Caption] = useState("");

  useEffect(() => {
    setNextStep({
      status_view: "Clips_by_Status_View_2",
      operation_name:
        operation_name === "food_delivery" ? "food_delivery" : "ride_share",
      status_name:
        operation_name === "food_delivery"
          ? "picking_up/shopping"
          : "close_to_passenger",
      caption:
        operation_name === "food_delivery"
          ? "Picking up / Shopping"
          : "Close to passenger",
      bottom_bar_caption:
        operation_name === "food_delivery"
          ? "Picking up / Shopping"
          : "Close to passenger",
    });
    // setNextStep({
    //   status_view: "Clips_by_Status_View_2",
    //   operation_name: "food_delivery",
    //   status_name: "picking_up/shopping",
    //   caption: "Picking up / Shopping",
    //   bottom_bar_caption: "Picking up / Shopping",
    // });
    //   onPress={() =>
    //     navigation.navigate("Clips_by_Status_View_2", {
    //       operation_name: "food_delivery",
    //       status_name: "picking_up/shopping",
    //       caption: "Picking up / Shopping",
    //     })
    //   }
    const { global_operations } = userData;
    const { statuses } = global_operations.find(
      (op) => op.operation_name === operation_name
    ) || { statuses: [] };
    const status_to_render = statuses.find(
      (st) => st.status_name === status_name
    );
    console.log(
      "GLOBAL OPERATIONS AT TEXT CLIPS VIEW:",
      JSON.stringify(global_operations, null, 2)
    );
    console.log(
      "STATUSES AT TEXT CLIPS VIEW:",
      JSON.stringify(statuses, null, 2)
    );
    console.log(
      "STATUS NAME AT TEXT CLIPS VIEW:",
      JSON.stringify(status_to_render, null, 2)
    );

    setDataToRender(status_to_render.stored_messages || []);

    // Cleanup function to set state when leaving the view
    return () => {
      setDataToRender([]); // Reset data or set any state you want
      set_Headers_Caption(""); // Reset headers or perform other cleanup
      setSelectedItemId(null); // Clear selected item ID on exit
      setIntroAdded(false); // Reset intro added state
    };
  }, []);

  return (
    <SafeArea background_color={theme.colors.bg.elements_bg}>
      <Container
        width="100%"
        height={"100%"}
        //color={theme.colors.bg.screens_bg}
        color="green"
        // style={{ flex: 1, paddingBottom: insets.bottom || 50 }}
      >
        <ExitHeader navigation={navigation} />
        <Text_Clips_By_Status_Sub_Header caption={caption} />
        <Add_intro_CTA introAdded={introAdded} setIntroAdded={setIntroAdded} />

        <Container
          width="100%"
          height={"75%"}
          color={theme.colors.bg.screens_bg}
          //   color={"lightblue"}
        >
          <Spacer position="top" size="medium" />
          {dataToRender.length === 0 && (
            <Container
              width="100%"
              height="100%"
              justify="center"
              align="center"
              color={theme.colors.bg.screens_bg}
            >
              <Text variant="middle_screens_caption" style={{ fontSize: 28 }}>
                No Messages!!
              </Text>
            </Container>
          )}

          {dataToRender.length > 0 && (
            <FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={dataToRender}
              renderItem={renderStoredMessagesTile}
              keyExtractor={(item, id) => {
                return item.message_id;
              }}
            />
          )}
          <Spacer position="top" size="large" />
        </Container>
      </Container>
    </SafeArea>
  );
}
