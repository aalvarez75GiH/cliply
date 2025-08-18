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

import { HomeContext } from "../../infrastructure/services/home/text_clips.context";
import { MessagesContext } from "../../infrastructure/services/messages/messages.context";

export default function Messages_by_Categories_Screen({ navigation, route }) {
  const { renderStoredMessagesTile } = useContext(MessagesContext);
  const { category, caption } = route.params;
  console.log("CATEGORY COMING:", category);

  const [dataToRender, setDataToRender] = useState([]);
  const [headers_caption, set_Headers_Caption] = useState("");

  const { userData } = useContext(HomeContext);
  //   console.log("USER DATA AT SCREEN :", userData[0]);

  useEffect(() => {
    if (userData && userData[0] && userData[0].messages_categories) {
      const categoryData = userData[0].messages_categories.find(
        (cat) => cat.category_name === category
      );

      if (categoryData) {
        setDataToRender(categoryData.stored_messages);
        set_Headers_Caption(caption);
      } else {
        console.warn(`Category "${category}" not found in user data.`);
        setDataToRender([]);
        set_Headers_Caption("Category Not Found");
      }
    } else {
      console.warn("User data or messages_categories is missing.");
    }
  }, [userData, category]);

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
