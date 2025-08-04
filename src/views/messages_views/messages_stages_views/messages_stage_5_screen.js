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
import { stage_5_messages } from "../../../infrastructure/data.dummy";
import { MessagesContext } from "../../../infrastructure/services/messages/messages.context";
import { Spacer } from "../../../components/global_components/optimized.spacer.component";
import { Container } from "../../../components/global_components/containers/general_containers";
import { Text } from "../../../infrastructure/typography/text.component";

export default function Stage_5_Screen({ navigation }) {
  const { renderStoredMessagesTile } = useContext(MessagesContext);

  return (
    <SafeArea background_color="#FFFFFF">
      <Flex_Container color={"red"}>
        <ExitHeader navigation={navigation} />
        <Stage_Sub_Header number="5" label="Arriving to destination" />
        <MainContent
          color={theme.colors.bg.screens_bg}
          width={"100%"}
          height={"85%"}
          align="center"
          justify="flex-start"
        >
          <Spacer position="top" size="large" />
          {stage_5_messages.length === 0 && (
            <Container
              width="100%"
              height="100%"
              justify="center"
              align="center"
              color={theme.colors.bg.screens_bg}
            >
              <Text variant="middle_screens_caption" style={{ fontSize: 28 }}>
                No Stage 5 Messages!!
              </Text>
            </Container>
          )}
          {stage_5_messages.length > 0 && (
            <FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={stage_5_messages}
              renderItem={renderStoredMessagesTile}
              keyExtractor={(item, id) => {
                return item.message_id;
              }}
            />
          )}
          <Spacer position="top" size="large" />
        </MainContent>
      </Flex_Container>
    </SafeArea>
  );
}
