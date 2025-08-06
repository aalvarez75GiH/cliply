import React from "react";

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

export const Categories_Area = () => {
  return (
    <Container
      width="100%"
      height={"67%"}
      justify="center"
      //   color={theme.colors.bg.screens_bg}
      color={"lightblue"}
      align="center"
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
      <Container
        width="100%"
        height={"85%"}
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
            action={null}
          />
          <Category_CTA_component
            Icon={TrafficIcon}
            width="60px"
            height="60px"
            caption1={"Traffic &"}
            caption2={"delays"}
            action={null}
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
            action={null}
          />
          <Category_CTA_component
            Icon={CarIntegrity}
            width="45px"
            height="45px"
            caption1={"Car"}
            caption2={"integrity"}
            action={null}
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
            action={null}
          />
          <Category_CTA_component
            Icon={LocationIcon}
            width="40px"
            height="40px"
            caption1={"Passenger"}
            caption2={"location"}
            action={null}
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
            caption1={"Issues at"}
            caption2={"store"}
            width="40px"
            height="40px"
            action={null}
          />
          <Category_CTA_component
            Icon={MultipleOrdersIcon}
            width="40px"
            height="40px"
            caption1={"Multiple"}
            caption2={"orders/rides"}
            action={null}
          />
        </Container>
      </Container>
    </Container>
  );
};
