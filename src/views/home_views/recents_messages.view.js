import React, { useContext } from "react";
import { Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { HomeHeader } from "../../components/headers/home_header.component.js";
import {
  Flex_Container,
  MainContent,
} from "../../components/global_components/containers/general_containers.js";
import { Go_Back_Header } from "../../components/headers/goBack.header.js";
import { recent_messages } from "../../infrastructure/data.dummy.js";
import { MessagesContext } from "../../infrastructure/services/messages/messages.context.js";

import { SafeArea } from "../../components/global_components/safe-area.component.js";
import { theme } from "../../infrastructure/theme/index.js";
import { HomeContext } from "../../infrastructure/services/home/home.context";
import { Container } from "../../components/global_components/containers/general_containers.js";
import { Spacer } from "../../components/global_components/optimized.spacer.component.js";

export default function RecentMessagesScreen({ navigation }) {
  const { renderRecentsMessagesTile } = useContext(MessagesContext);
  const array = recent_messages;

  return (
    <SafeArea background_color={theme.colors.bg.elements_bg}>
      <Flex_Container color={theme.colors.bg.screens_bg}>
        <Go_Back_Header action={() => navigation.goBack()} />
        <MainContent
          color={theme.colors.bg.screens_bg}
          //color={"red"}
          width={"100%"}
          height={"92%"}
          align="center"
          justify="center"
        >
          <Spacer position="top" size="medium" />
          {!array.length && (
            <Container
              width="100%"
              height="100%"
              justify="center"
              align="center"
              color={theme.colors.bg.screens_bg}
            >
              <Text
                variant="middle_screens_caption"
                style={{
                  color: "#000000",
                }}
              >
                There are no Recents Messages
              </Text>
            </Container>
          )}
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={recent_messages}
            renderItem={renderRecentsMessagesTile}
            keyExtractor={(item, id) => {
              return item.message_id;
            }}
          />
        </MainContent>
      </Flex_Container>
    </SafeArea>
  );
}
