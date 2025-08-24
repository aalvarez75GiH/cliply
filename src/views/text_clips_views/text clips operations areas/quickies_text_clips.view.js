import React, { useContext, useEffect } from "react";
import { FlatList } from "react-native";

import { ExitHeader } from "../../../components/headers/exit_header.component.js";

import { SafeArea } from "../../../components/global_components/safe-area.component.js";
import { theme } from "../../../infrastructure/theme/index.js";
import { Container } from "../../../components/global_components/containers/general_containers.js";
import { Spacer } from "../../../components/global_components/optimized.spacer.component.js";
import { Text_Tile } from "../../../components/tiles/text.tile.js";
import { Text } from "../../../infrastructure/typography/text.component.js";
import { quickies_food_delivery } from "../../../infrastructure/local_data/clips_by_operations.data.js";
import { quickies_ride_share } from "../../../infrastructure/local_data/clips_by_operations.data.js";

import { GlobalContext } from "../../../infrastructure/services/global/global.context.js";
import { TextClipsContext } from "../../../infrastructure/services/home/text_clips.context.js";
export default function Quickies_Text_Clips_View({ navigation, route }) {
  const { globalLanguage, togglingGlobalLanguage, isLoading } =
    useContext(GlobalContext);
  const { renderQuickiesTile, setSelectedItemId } =
    useContext(TextClipsContext);
  const { operation } = route.params;

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
        <ExitHeader />
        {operation === "ride_share" && (
          <Container
            width="100%"
            height="90%"
            color={theme.colors.bg.screens_bg}
          >
            <Spacer position="top" size="medium" />
            <FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={quickies_ride_share}
              renderItem={renderQuickiesTile}
              keyExtractor={(item, id) => {
                return item.quicky_id;
              }}
            />
            <Spacer position="top" size="medium" />
          </Container>
        )}
        {operation === "food_delivery" && (
          <Container
            width="100%"
            height="90%"
            color={theme.colors.bg.screens_bg}
          >
            <Spacer position="top" size="medium" />
            <FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={quickies_food_delivery}
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
