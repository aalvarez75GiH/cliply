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
import { stage_4_messages } from "../../../infrastructure/data.dummy";
import { MessagesContext } from "../../../infrastructure/services/messages/messages.context";
import { Spacer } from "../../../components/global_components/optimized.spacer.component";

export default function Stage_4_Screen({ navigation }) {
  const { renderStoredMessagesTile } = useContext(MessagesContext);

  return (
    <SafeArea background_color="#FFFFFF">
      <Flex_Container color={"red"}>
        <ExitHeader navigation={navigation} />
        <Stage_Sub_Header number="4" label="On my way to destination" />
        <MainContent
          color={theme.colors.bg.screens_bg}
          width={"100%"}
          height={"85%"}
          align="center"
          justify="flex-start"
        >
          <Spacer position="top" size="large" />
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={stage_4_messages}
            renderItem={renderStoredMessagesTile}
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
