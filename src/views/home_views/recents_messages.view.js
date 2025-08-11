import React, { use, useContext, useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import {
  Flex_Container,
  MainContent,
} from "../../components/global_components/containers/general_containers.js";
import { Go_Back_Header } from "../../components/headers/goBack.header.js";
import { SafeArea } from "../../components/global_components/safe-area.component.js";
import { theme } from "../../infrastructure/theme/index.js";
import { Container } from "../../components/global_components/containers/general_containers.js";
import { Spacer } from "../../components/global_components/optimized.spacer.component.js";
import { Text } from "../../infrastructure/typography/text.component.js";
import { Global_activity_indicator } from "../../components/global_components/global_activity_indicator_screen.component.js";
import { get_User_Data_Request } from "../../infrastructure/services/home/home.requests.js";

import { MessagesContext } from "../../infrastructure/services/messages/messages.context.js";
import { HomeContext } from "../../infrastructure/services/home/home.context";

export default function RecentMessagesScreen({ navigation }) {
  const { renderRecentMessagesTile } = useContext(MessagesContext);

  const { userData, gettingUserData } = useContext(HomeContext);
  const { recent_messages } = userData[0] || { recent_messages: [] };

  return (
    <SafeArea background_color={theme.colors.bg.elements_bg}>
      <Flex_Container color={theme.colors.bg.screens_bg}>
        <>
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
            {recent_messages.length === 0 && (
              <Container
                width="100%"
                height="100%"
                justify="center"
                align="center"
                color={theme.colors.bg.screens_bg}
              >
                <Text variant="middle_screens_caption" style={{ fontSize: 28 }}>
                  No recent Messages!!
                </Text>
              </Container>
            )}

            {recent_messages.length > 0 && (
              <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={recent_messages}
                renderItem={renderRecentMessagesTile}
                keyExtractor={(item, id) => {
                  return item.message_id;
                }}
              />
            )}
          </MainContent>
        </>
        {/* )} */}
      </Flex_Container>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  updatingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    zIndex: 1, // Ensure it appears above the FlatList
  },
  updatingText: {
    marginTop: 10,
    fontSize: 18,
    color: "white",
  },
});
