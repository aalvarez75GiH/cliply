import React, { useState, useContext, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";

import { ExitHeader } from "../../components/headers/exit_header.component";
import {
  Flex_Container,
  MainContent,
} from "../../components/global_components/containers/general_containers";
import { SafeArea } from "../../components/global_components/safe-area.component";
import { theme } from "../../infrastructure/theme/index";
import { Spacer } from "../../components/global_components/optimized.spacer.component";
import { Container } from "../../components/global_components/containers/general_containers";
import { Text } from "../../infrastructure/typography/text.component";
import { Categories_Messages_Sub_Header } from "../../components/headers/categories_messages_sub.header";
import {
  food_delivery_operation_data,
  ride_share_operation_data,
} from "../../infrastructure/local_data/clips_by_operations.data";

import { HomeContext } from "../../infrastructure/services/home/home.context";
import { MessagesContext } from "../../infrastructure/services/messages/messages.context";

export default function Clips_by_Operations_And_Status_View({
  navigation,
  route,
}) {
  const { renderStoredMessagesTile } = useContext(MessagesContext);
  const { operation, status_name, caption } = route.params;
  console.log("OPERATION COMING:", operation);
  console.log("STATUS COMING:", status_name);
  console.log("CAPTION COMING:", caption);
  console.log("DATA FOUND:", food_delivery_operation_data);
  //   console.log("DATA1 FOUND:", food_delivery_operation_data[0]);
  console.log(
    "DATA1 FOUND:",
    food_delivery_operation_data.food_delivery_operation[0]
  );
  const { food_delivery_operation } = food_delivery_operation_data;
  const { ride_share_operation } = ride_share_operation_data;

  const operationDataMap =
    operation === "food_delivery"
      ? food_delivery_operation
      : ride_share_operation;

  const [dataToRender, setDataToRender] = useState([]);
  const [headers_caption, set_Headers_Caption] = useState("");

  useEffect(() => {
    if (
      operationDataMap &&
      operationDataMap[0] &&
      operationDataMap[0].operation_status
    ) {
      const operationStatuses = operationDataMap[0].operation_status;

      const statusData = operationStatuses.find(
        (st) => st.status_name === status_name
      );

      console.log("STATUS DATA FOUND:", statusData);

      if (statusData) {
        setDataToRender(statusData.stored_messages || []);
        set_Headers_Caption(caption);
      } else {
        console.warn(`Status "${status_name}" not found in user data.`);
        setDataToRender([]);
        set_Headers_Caption("Category Not Found");
      }
    } else {
      console.warn("User data or operation_status is missing.");
    }
  }, [food_delivery_operation, status_name]);

  return (
    <SafeArea background_color="#FFFFFF">
      <Flex_Container color={theme.colors.bg.screens_bg}>
        <ExitHeader navigation={navigation} />
        <Categories_Messages_Sub_Header caption={headers_caption} />
        <MainContent
          color={theme.colors.bg.screens_bg}
          // color={"red"}
          width={"100%"}
          height={"85%"}
          align="center"
          justify="center"
        >
          <Spacer position="top" size="large" />
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
        </MainContent>
      </Flex_Container>
    </SafeArea>
  );
}
