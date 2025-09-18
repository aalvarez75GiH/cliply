import React, { useContext, useEffect } from "react";
import { FlatList } from "react-native";

import { ExitHeader } from "../../../components/headers/exit_header.component.js";

import { SafeArea } from "../../../components/global_components/safe-area.component.js";
import { theme } from "../../../infrastructure/theme/index.js";
import { Container } from "../../../components/global_components/containers/general_containers.js";
import { Spacer } from "../../../components/global_components/optimized.spacer.component.js";
import { quickies_food_delivery } from "../../../infrastructure/local_data/clips_by_operations.data.js";
import { quickies_ride_share } from "../../../infrastructure/local_data/clips_by_operations.data.js";

import { GlobalContext } from "../../../infrastructure/services/global/global.context.js";
import { TextClipsContext } from "../../../infrastructure/services/home/text_clips.context.js";

export default function Quickies_Text_Clips_View({ navigation, route }) {
  useContext(GlobalContext);
  const { renderQuickiesTile, setSelectedItemId } =
    useContext(TextClipsContext);
  const { operation, status } = route.params;

  const { heading_to_pickup_shop, picking_up_shopping, heading_to_drop_off } =
    quickies_food_delivery;
  const { heading_to_passenger, close_to_passenger, at_passenger_location } =
    quickies_ride_share;
  useEffect(() => {
    return () => {
      setSelectedItemId(null);
    };
  }, []);
  return (
    <SafeArea background_color={theme.colors.bg.elements_bg}>
      <Container
        // color={"lightyellow"}
        width={"100%"}
        height={"100%"}
        align="center"
        justify="flex-start"
        // color={theme.colors.bg.elements_bg}
        color={theme.colors.bg.screens_bg}
      >
        <ExitHeader action={() => navigation.goBack()} />
        {/* ******************* FOOD DELIVERY ***************************** */}
        {operation === "food_delivery" &&
          status === "heading_to_pickup_shop" && (
            <Container
              width="100%"
              height="90%"
              color={theme.colors.bg.screens_bg}
            >
              <Spacer position="top" size="medium" />
              <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={heading_to_pickup_shop}
                renderItem={renderQuickiesTile}
                keyExtractor={(item, id) => {
                  return item.quicky_id;
                }}
              />
              <Spacer position="top" size="medium" />
            </Container>
          )}
        {operation === "food_delivery" && status === "picking_up_shopping" && (
          <Container
            width="100%"
            height="90%"
            color={theme.colors.bg.screens_bg}
          >
            <Spacer position="top" size="medium" />
            <FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={picking_up_shopping}
              renderItem={renderQuickiesTile}
              keyExtractor={(item, id) => {
                return item.quicky_id;
              }}
            />
            <Spacer position="top" size="medium" />
          </Container>
        )}
        {operation === "food_delivery" && status === "heading_to_drop_off" && (
          <Container
            width="100%"
            height="90%"
            color={theme.colors.bg.screens_bg}
          >
            <Spacer position="top" size="medium" />
            <FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={heading_to_drop_off}
              renderItem={renderQuickiesTile}
              keyExtractor={(item, id) => {
                return item.quicky_id;
              }}
            />
            <Spacer position="top" size="medium" />
          </Container>
        )}
        {/* ************** RIDE SHARE ***************************** */}
        {operation === "ride_share" && status === "heading_to_passenger" && (
          <Container
            width="100%"
            height="90%"
            color={theme.colors.bg.screens_bg}
          >
            <Spacer position="top" size="medium" />
            <FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={heading_to_passenger}
              renderItem={renderQuickiesTile}
              keyExtractor={(item, id) => {
                return item.quicky_id;
              }}
            />
            <Spacer position="top" size="medium" />
          </Container>
        )}
        {operation === "ride_share" && status === "close_to_passenger" && (
          <Container
            width="100%"
            height="90%"
            color={theme.colors.bg.screens_bg}
          >
            <Spacer position="top" size="medium" />
            <FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={close_to_passenger}
              renderItem={renderQuickiesTile}
              keyExtractor={(item, id) => {
                return item.quicky_id;
              }}
            />
            <Spacer position="top" size="medium" />
          </Container>
        )}
        {operation === "ride_share" && status === "at_passenger_location" && (
          <Container
            width="100%"
            height="90%"
            color={theme.colors.bg.screens_bg}
          >
            <Spacer position="top" size="medium" />
            <FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={at_passenger_location}
              renderItem={renderQuickiesTile}
              keyExtractor={(item, id) => {
                return item.quicky_id;
              }}
            />
            <Spacer position="top" size="medium" />
          </Container>
        )}
      </Container>
    </SafeArea>
  );
}
