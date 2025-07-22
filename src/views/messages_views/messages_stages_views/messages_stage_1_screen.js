import React from "react";
import { FlatList } from "react-native-gesture-handler";

import { ExitHeader } from "../../../components/headers/exit_header.component";
import {
  Container,
  Flex_Container,
  Scrollabe_MainContent,
  MainContent,
} from "../../../components/global_components/containers/general_containers";
import { SafeArea } from "../../../components/global_components/safe-area.component";
import { theme } from "../../../infrastructure/theme/index";
import { Stage_Sub_Header } from "../../../components/headers/stage_message_sub_header";
import { Summary_Tile } from "../../../components/messages_tiles/summary.tile";
import { stage_1_messages } from "../../../infrastructure/data.dummy";
import { Spacer } from "../../../components/global_components/optimized.spacer.component";

export default function Stage_1_Screen({ navigation }) {
  const renderItem = ({ item }) => {
    const { summary_en } = item;

    return (
      <Spacer position="bottom" size="medium">
        <Summary_Tile caption={summary_en} />
      </Spacer>
    );
  };

  return (
    <SafeArea background_color="#FFFFFF">
      <Flex_Container color={"red"}>
        <ExitHeader navigation={navigation} />
        <Stage_Sub_Header number="1" label="On my way to location" />
        <MainContent
          color={theme.colors.bg.screens_bg}
          width={"100%"}
          height={"85%"}
          align="center"
          justify="flex-start"
        >
          {/* <Summary_Tile caption="En route, delayed by traffic." /> */}
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={stage_1_messages}
            renderItem={renderItem}
            keyExtractor={(item, id) => {
              return item.id;
            }}
            // itemSeparatorComponent={() => <Container style={{ height: 10 }} />} // Adds 5px vertical spacing
          />
        </MainContent>
      </Flex_Container>
    </SafeArea>
  );
}
