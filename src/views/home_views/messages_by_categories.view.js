import React, { useState, useContext, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";

import { ExitHeader } from "../../components/headers/exit_header.component";
import {
  Flex_Container,
  MainContent,
} from "../../components/global_components/containers/general_containers";
import { SafeArea } from "../../components/global_components/safe-area.component";
import { theme } from "../../infrastructure/theme/index";
import { Stage_Sub_Header } from "../../components/headers/stage_message_sub_header";
import { stage_1_messages } from "../../infrastructure/data.dummy";
import { MessagesContext } from "../../infrastructure/services/messages/messages.context";
import { Spacer } from "../../components/global_components/optimized.spacer.component";
import { Container } from "../../components/global_components/containers/general_containers";
import { Text } from "../../infrastructure/typography/text.component";
import {
  issues_at_store,
  traffic_and_delays,
  issues_at_restaurant,
  car_integrity,
  long_distances,
  passenger_location,
  dinners_location,
  multiple_orders,
} from "../../infrastructure/local_data/messages_by_catgories.data";
import { Categories_Messages_Sub_Header } from "../../components/headers/categories_messages_sub.header";

export default function Message_by_Categories_Screen({ navigation, route }) {
  const {
    renderStoredMessagesTile,
    // setting_data_and_captions_to_messages,
    // dataTorender,
    // headers_caption,
  } = useContext(MessagesContext);
  const { category } = route.params;
  console.log("CATEGORY COMING:", category);

  const [dataTorender, setDataToRender] = useState([]);
  const [headers_caption, set_Headers_Caption] = useState("");
  //   useEffect(() => {
  //     if (typeof setting_data_and_captions_to_messages === "function") {
  //       setting_data_and_captions_to_messages(category);
  //     } else {
  //       console.error("setting_data_and_captions_to_messages is not a function");
  //     }
  //   }, []);

  console.log("DATA TO RENDER:", dataTorender);

  useEffect(() => {
    switch (category) {
      case "issues_at_store":
        console.log("issues_at_store");
        setDataToRender(issues_at_store);
        set_Headers_Caption("Issues at store");
        break;
      case "traffic_and_delays":
        console.log("traffic_and_delays");
        setDataToRender(traffic_and_delays);
        set_Headers_Caption("Traffic and Delays");
        break;
      case "issues_at_restaurant":
        console.log("issues_at_restaurant");
        setDataToRender(issues_at_restaurant);
        set_Headers_Caption("Issues at restaurant");
        break;
      case "car_integrity":
        console.log("car_integrity");
        setDataToRender(car_integrity);
        set_Headers_Caption("Car Integrity");
        break;
      case "long_distances":
        console.log("long_distances");
        setDataToRender(long_distances);
        set_Headers_Caption("Long Distances");
        break;
      case "passenger_location":
        console.log("passenger_location");
        setDataToRender(passenger_location);
        set_Headers_Caption("Passenger Location");
        break;
      case "dinners_location":
        console.log("dinners_location");
        setDataToRender(dinners_location);
        set_Headers_Caption("Dinners Location");
        break;
      case "multiple_orders":
        console.log("multiple_orders");
        setDataToRender(multiple_orders);
        set_Headers_Caption("Multiple Orders");
        break;

      default:
        break;
    }
  }, [category, headers_caption]);

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
          {issues_at_store.length === 0 && (
            <Container
              width="100%"
              height="100%"
              justify="center"
              align="center"
              color={theme.colors.bg.screens_bg}
            >
              <Text variant="middle_screens_caption" style={{ fontSize: 28 }}>
                No Stage 1 Messages!!
              </Text>
            </Container>
          )}
          {issues_at_store.length > 0 && (
            <FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={dataTorender}
              renderItem={renderStoredMessagesTile}
              keyExtractor={(item, id) => {
                return item.message_id;
              }}
            />
            // <FlatList
            //   showsHorizontalScrollIndicator={false}
            //   showsVerticalScrollIndicator={false}
            //   data={issues_at_store}
            //   renderItem={renderStoredMessagesTile}
            //   keyExtractor={(item, id) => {
            //     return item.message_id;
            //   }}
            // />
          )}
          <Spacer position="top" size="large" />
        </MainContent>
      </Flex_Container>
    </SafeArea>
  );
}
