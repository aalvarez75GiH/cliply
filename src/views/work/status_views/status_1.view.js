import React, { useState, useContext, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";

import { SafeArea } from "../../../components/global_components/safe-area.component";
import { theme } from "../../../infrastructure/theme/index";
import { Spacer } from "../../../components/global_components/optimized.spacer.component";
import {
  Container,
  Action_Container,
} from "../../../components/global_components/containers/general_containers";
import { Text } from "../../../infrastructure/typography/text.component";
import { Restart_flow_operation_status_process_header } from "../../../components/headers/restart_flow_operation_status_process.header";
import { Add_intro_CTA } from "../../../components/calls_to_action/add_intro.cta";
import { Operations_Status_Step_Component } from "../../../components/operations_components/operations_status_step.component";

import { TextClipsContext } from "../../../infrastructure/services/home/text_clips.context";
import { Shared_logic } from "../../../infrastructure/services/home/shared_logic";

export default function Text_Clips_by_Status_View_1({ route }) {
  const { operation_name, status_name, dataForUsedCountUpdate } = route.params;
  const isFoodDelivery = operation_name === "food_delivery";

  const {
    renderStoredMessagesTile,
    setSelectedItemId,
    setIntroAdded,
    userData,
    setNextStep,
    setDataForUsedCountUpdate,
    selectedItemId,
  } = useContext(TextClipsContext);

  const [dataToRender, setDataToRender] = useState([]);
  const [headers_caption, set_Headers_Caption] = useState("");

  console.log(
    "DATA FOR USED COUNT UPDATE IN STATUS 1 VIEW:",
    JSON.stringify(dataForUsedCountUpdate, null, 2)
  );

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

    const { global_operations } = userData;
    const { statuses } = global_operations.find(
      (op) => op.operation_name === operation_name
    ) || { statuses: [] };
    const status_to_render = statuses.find(
      (st) => st.status_name === status_name
    );

    setDataToRender(status_to_render.stored_messages || []);
    setDataForUsedCountUpdate({
      ...dataForUsedCountUpdate,
      status_name: status_name,
    });

    // Cleanup function to set state when leaving the view
    return () => {
      setDataToRender([]); // Reset data or set any state you want
      set_Headers_Caption(""); // Reset headers or perform other cleanup
      setSelectedItemId(null); // Clear selected item ID on exit
      setIntroAdded(false); // Reset intro added state
    };
  }, []);

  const image_source_1 = require("../../../../assets/illustrations/heading_to_pickup.png");
  const image_source_2 = require("../../../../assets/illustrations/heading to passenger.png");

  return (
    <SafeArea background_color={theme.colors.bg.elements_bg}>
      <Container
        width="100%"
        height={"100%"}
        color={theme.colors.bg.screens_bg}
      >
        <Restart_flow_operation_status_process_header />
        <Spacer position="top" size="small" />
        <Container
          width="100%"
          height={"15%"}
          //color={"red"}
          color={theme.colors.bg.elements_bg}
          justify="center"
          align="center"
        >
          <Spacer position="top" size="small" />
          <Operations_Status_Step_Component
            caption_1={isFoodDelivery ? "Heading to" : "Heading to"}
            caption_2={isFoodDelivery ? "pickup/shop" : "passenger"}
            caption_3={"1"}
            image_source_1={isFoodDelivery ? image_source_1 : image_source_2}
            step_indicator_color={theme.colors.ui.food_delivery_theme_color}
            inverted={false}
            status={
              isFoodDelivery ? "heading_to_pickup_shop" : "heading_to_passenger"
            }
            step_number={"1"}
          />
          <Spacer position="top" size="small" />
        </Container>

        {/* <Add_intro_CTA introAdded={introAdded} setIntroAdded={setIntroAdded} /> */}
        <Container
          width="100%"
          height={"75%"}
          color={theme.colors.bg.screens_bg}
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
              renderItem={({ item }) =>
                renderStoredMessagesTile({
                  item,
                  globalLanguage,
                  setIsLoading,
                  selectedItemId,
                  setSelectedItemId,
                  isLoading,
                  dataForUsedCountUpdate,
                })
              }
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
