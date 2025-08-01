import React, { useContext } from "react";
import { FlatList } from "react-native-gesture-handler";

import { ExitHeader } from "../../../components/headers/exit_header.component";
import {
  Flex_Container,
  MainContent,
} from "../../../components/global_components/containers/general_containers";
import { SafeArea } from "../../../components/global_components/safe-area.component";
import { theme } from "../../../infrastructure/theme/index";
import { Stage_Sub_Header } from "../../../components/headers/stage_message_sub_header";
import { stage_2_messages } from "../../../infrastructure/data.dummy";
import { MessagesContext } from "../../../infrastructure/services/messages/messages.context";
import { Spacer } from "../../../components/global_components/optimized.spacer.component";

export default function Stage_2_Screen({ navigation }) {
  const { renderItem } = useContext(MessagesContext);

  return (
    <SafeArea background_color="#FFFFFF">
      <Flex_Container color={"red"}>
        <ExitHeader navigation={navigation} />
        <Stage_Sub_Header number="2" label="Arriving to location" />
        <MainContent
          color={theme.colors.bg.screens_bg}
          width={"100%"}
          height={"85%"}
          align="center"
          justify="center"
        >
          <Spacer position="top" size="large" />
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={stage_2_messages}
            renderItem={renderItem}
            keyExtractor={(item, id) => {
              return item.message_id;
            }}
          />
          <Spacer position="top" size="large" />
        </MainContent>
      </Flex_Container>
    </SafeArea>
  );
}
