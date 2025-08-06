import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import { theme } from "../../../infrastructure/theme";
import { Container } from "../../../components/global_components/containers/general_containers";
import { Text } from "../../../infrastructure/typography/text.component";
import { Spacer } from "../../../components/global_components/optimized.spacer.component";
import { Category_CTA_component } from "../../../components/calls_to_action/category.cta";
import FoodCatIcon from "../../../../assets/my_colored_icons/food_color_icon.svg";
import StoreIcon from "../../../../assets/my_colored_icons/store_icon.svg";
import TrafficIcon from "../../../../assets/my_colored_icons/traffic_color_icon.svg";
import CarIntegrity from "../../../../assets/my_colored_icons/car_integrity_color_icon.svg";
import LongDistanceIcon from "../../../../assets/my_colored_icons/long_distance_icon.svg";
import LocationIcon from "../../../../assets/my_colored_icons/finding_color_icon.svg";
import DinnersLocIcon from "../../../../assets/my_colored_icons/dinner_location_icon.svg";
import MultipleOrdersIcon from "../../../../assets/my_colored_icons/multiple_color_icon.svg";
import { Scrollable_Container } from "../../../components/global_components/containers/general_containers";
import { Flex_Container } from "../../../components/global_components/containers/general_containers";

export const Categories_Area = () => {
  const navigation = useNavigation();
  return (
    <Flex_Container
      width="100%"
      height={"67%"}
      justify="center"
      //   color={"lightblue"}
      align="center"
      color={theme.colors.bg.screens_bg}
    >
      <Container
        width="100%"
        height={"15%"}
        // width="430px"
        // height={"67px"}
        justify="center"
        align="flex-start"
        color={theme.colors.bg.elements_bg}
        // color={"red"}
      >
        <Spacer position="left" size="large">
          <Text variant="dm_sans_bold_18">Find messages by...</Text>
        </Spacer>
      </Container>
      <Scrollable_Container
        width="100%"
        // height={"85%"}
        justify="flex-start"
        color={theme.colors.bg.elements_bg}
        // color={"blue"}
        align="center"
      >
        <Spacer position="top" size="small" />
        {/* ******************************************* */}
        <Container
          width="100%"
          height={"20%"}
          justify="space-around"
          color={theme.colors.bg.elements_bg}
          align="center"
          direction="row"
        >
          <Category_CTA_component
            Icon={StoreIcon}
            caption1={"Issues at"}
            caption2={"store"}
            width="40px"
            height="40px"
            action={() =>
              navigation.navigate("Messages_by_categories_View", {
                category: "issues_at_store",
              })
            }
          />
          <Category_CTA_component
            Icon={TrafficIcon}
            width="60px"
            height="60px"
            caption1={"Traffic &"}
            caption2={"delays"}
            action={() =>
              navigation.navigate("Messages_by_categories_View", {
                category: "traffic_and_delays",
              })
            }
          />
        </Container>
        <Spacer position="top" size="small" />
        {/* ******************************************* */}
        <Container
          width="100%"
          height={"20%"}
          justify="space-around"
          color={theme.colors.bg.elements_bg}
          align="center"
          direction="row"
        >
          <Category_CTA_component
            Icon={FoodCatIcon}
            caption1={"Issues at"}
            caption2={"restaurant"}
            width="40px"
            height="40px"
            action={() =>
              navigation.navigate("Messages_by_categories_View", {
                category: "issues_at_restaurant",
              })
            }
            // action={null}
          />
          <Category_CTA_component
            Icon={CarIntegrity}
            width="45px"
            height="45px"
            caption1={"Car"}
            caption2={"integrity"}
            action={() =>
              navigation.navigate("Messages_by_categories_View", {
                category: "car_integrity",
              })
            }
          />
        </Container>
        <Spacer position="top" size="small" />
        {/* ******************************************* */}
        <Container
          width="100%"
          height={"20%"}
          justify="space-around"
          color={theme.colors.bg.elements_bg}
          align="center"
          direction="row"
        >
          <Category_CTA_component
            Icon={LongDistanceIcon}
            caption1={"Long"}
            caption2={"distances"}
            width="40px"
            height="40px"
            action={() =>
              navigation.navigate("Messages_by_categories_View", {
                category: "long_distances",
              })
            }
          />
          <Category_CTA_component
            Icon={LocationIcon}
            width="40px"
            height="40px"
            caption1={"Passenger"}
            caption2={"location"}
            action={() =>
              navigation.navigate("Messages_by_categories_View", {
                category: "passenger_location",
              })
            }
          />
        </Container>
        {/* ******************************************* */}
        <Spacer position="top" size="small" />
        <Container
          width="100%"
          height={"20%"}
          justify="space-around"
          color={theme.colors.bg.elements_bg}
          align="center"
          direction="row"
        >
          <Category_CTA_component
            Icon={DinnersLocIcon}
            caption1={"Dinner's"}
            caption2={"location"}
            width="40px"
            height="40px"
            action={() =>
              navigation.navigate("Messages_by_categories_View", {
                category: "dinners_location",
              })
            }
          />
          <Category_CTA_component
            Icon={MultipleOrdersIcon}
            width="40px"
            height="40px"
            caption1={"Multiple"}
            caption2={"orders/rides"}
            action={() =>
              navigation.navigate("Messages_by_categories_View", {
                category: "multiple_orders",
              })
            }
          />
        </Container>
      </Scrollable_Container>
    </Flex_Container>
  );
};
