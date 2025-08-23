import React, { useState, useContext, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ExitHeader } from "../../components/headers/exit_header.component";
import {
  Flex_Container,
  MainContent,
} from "../../components/global_components/containers/general_containers";
import { SafeArea } from "../../components/global_components/safe-area.component";
import { theme } from "../../infrastructure/theme/index";
import { Spacer } from "../../components/global_components/optimized.spacer.component";
import {
  Container,
  Action_Container,
} from "../../components/global_components/containers/general_containers";
import { Text } from "../../infrastructure/typography/text.component";
import { Text_Clips_By_Status_Sub_Header } from "../../components/headers/text_clips_by_operations_and_status.header";
import {
  food_delivery_operation_data,
  ride_share_operation_data,
} from "../../infrastructure/local_data/clips_by_operations.data";
import { Add_intro_CTA } from "../../components/calls_to_action/add_intro.cta";

// import { MessagesContext } from "../../infrastructure/services/messages/messages.context";
import { TextClipsContext } from "../../infrastructure/services/home/text_clips.context";

export default function Text_Clips_by_Status_View({ navigation, route }) {
  const insets = useSafeAreaInsets();
  const { operation, status_name, caption } = route.params;

  const {
    renderStoredMessagesTile,
    setSelectedItemId,
    introAdded,
    setIntroAdded,
  } = useContext(TextClipsContext);

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

    // Cleanup function to set state when leaving the view
    return () => {
      setDataToRender([]); // Reset data or set any state you want
      set_Headers_Caption(""); // Reset headers or perform other cleanup
      setSelectedItemId(null); // Clear selected item ID on exit
      setIntroAdded(false); // Reset intro added state
    };
  }, [food_delivery_operation, status_name]);

  return (
    <SafeArea background_color={theme.colors.bg.elements_bg}>
      <Container
        width="100%"
        height={"100%"}
        //color={theme.colors.bg.screens_bg}
        color="green"
        // style={{ flex: 1, paddingBottom: insets.bottom || 50 }}
      >
        <ExitHeader navigation={navigation} />
        <Text_Clips_By_Status_Sub_Header caption={headers_caption} />
        <Add_intro_CTA introAdded={introAdded} setIntroAdded={setIntroAdded} />

        <Container
          width="100%"
          height={"75%"}
          color={theme.colors.bg.screens_bg}
          //   color={"lightblue"}
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
              renderItem={renderStoredMessagesTile}
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
