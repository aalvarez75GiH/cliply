import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import { theme } from "../../../infrastructure/theme";
import { Container } from "../../../components/global_components/containers/general_containers";
import { Text } from "../../../infrastructure/typography/text.component";
import { Spacer } from "../../../components/global_components/optimized.spacer.component";
import { Status_CTA_component } from "../../../components/calls_to_action/status.cta";

import AutoIcon from "../../../../assets/my_colored_icons/auto_icon.svg";
import ShopIcon from "../../../../assets/my_colored_icons/merchant_store.svg";
import DropOffIcon from "../../../../assets/my_colored_icons/dropoff_icon.svg";
import PassengerIcon from "../../../../assets/my_colored_icons/passenger.svg";
import locationIcon from "../../../../assets/my_colored_icons/location_icon.svg";
import { Scrollable_Container } from "../../../components/global_components/containers/general_containers";
import { Flex_Container } from "../../../components/global_components/containers/general_containers";
import { Loading_Spinner_area } from "../../home_views/home operations views/loading_spinner.area";

export const Operations_Status_Area = ({ operation, isLoading }) => {
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
      {isLoading ? (
        <Container
          width="100%"
          height={"81%"}
          color={"lightblue"}
          justify="center"
          align="center"
        >
          <Loading_Spinner_area />
        </Container>
      ) : operation === "food_delivery" ? (
        <Scrollable_Container
          width="100%"
          // height={"85%"}
          justify="flex-start"
          color={theme.colors.bg.elements_bg}
          // color={"blue"}
          align="center"
        >
          {/* <Spacer position="top" size="small" /> */}
          {/* ******************************************* */}
          <Container
            width="100%"
            height={"08%"}
            justify="space-around"
            color={theme.colors.bg.elements_bg}
            //   color={"blue"}
            align="center"
            direction="row"
          />

          {/* ****************************************************************** */}
          <Container
            width="100%"
            height={"25%"}
            justify="flex-start"
            color={theme.colors.bg.elements_bg}
            //color={"red"}
            align="center"
            direction="row"
          >
            <Spacer position="left" size="extraLarge">
              <Status_CTA_component
                Icon={AutoIcon}
                caption1={"Heading to"}
                caption2={"pickup/shop"}
                width="70px"
                height="70px"
                action={() =>
                  navigation.navigate("Messages_by_categories_View", {
                    category: "issues_at_store",
                    caption: "Issues at store",
                  })
                }
              />
            </Spacer>
          </Container>
          <Spacer position="top" size="small" />
          <Spacer position="top" size="small" />
          <Spacer position="top" size="small" />
          <Spacer position="top" size="small" />
          {/* ****************************************************************** */}
          <Container
            width="100%"
            height={"25%"}
            justify="flex-end"
            color={theme.colors.bg.elements_bg}
            //color={"red"}
            align="center"
            direction="row"
          >
            <Spacer position="right" size="extraLarge">
              <Status_CTA_component
                Icon={ShopIcon}
                caption1={"Heading to"}
                caption2={"pickup/shop"}
                width="45px"
                height="45px"
                action={() =>
                  navigation.navigate("Messages_by_categories_View", {
                    category: "issues_at_store",
                    caption: "Issues at store",
                  })
                }
                icon_bg_color={theme.colors.ui.primary}
              />
            </Spacer>
          </Container>
          <Spacer position="top" size="small" />
          <Spacer position="top" size="small" />
          <Spacer position="top" size="small" />
          <Spacer position="top" size="small" />
          {/* ****************************************************************** */}
          <Container
            width="100%"
            height={"25%"}
            justify="flex-start"
            color={theme.colors.bg.elements_bg}
            //color={"red"}
            align="center"
            direction="row"
          >
            <Spacer position="left" size="extraLarge">
              <Status_CTA_component
                Icon={DropOffIcon}
                caption1={"Heading to"}
                caption2={"pickup/shop"}
                width="70px"
                height="70px"
                action={() =>
                  navigation.navigate("Messages_by_categories_View", {
                    category: "issues_at_store",
                    caption: "Issues at store",
                  })
                }
              />
            </Spacer>
          </Container>
          <Spacer position="top" size="small" />
          <Spacer position="top" size="small" />
          <Spacer position="top" size="small" />
        </Scrollable_Container>
      ) : operation === "ride_share" ? (
        <Scrollable_Container
          width="100%"
          justify="flex-start"
          color={theme.colors.bg.elements_bg}
          // color={"blue"}
          align="center"
        >
          <Container
            width="100%"
            height={"08%"}
            justify="space-around"
            color={theme.colors.bg.elements_bg}
            //   color={"blue"}
            align="center"
            direction="row"
          />

          {/* ****************************************************************** */}
          <Container
            width="100%"
            height={"25%"}
            justify="flex-start"
            color={theme.colors.bg.elements_bg}
            //color={"red"}
            align="center"
            direction="row"
          >
            <Spacer position="left" size="extraLarge">
              <Status_CTA_component
                Icon={AutoIcon}
                caption1={"Heading to"}
                caption2={"Passenger"}
                width="70px"
                height="70px"
                action={() =>
                  navigation.navigate("Messages_by_categories_View", {
                    category: "issues_at_store",
                    caption: "Issues at store",
                  })
                }
              />
            </Spacer>
          </Container>
          <Spacer position="top" size="small" />
          <Spacer position="top" size="small" />
          <Spacer position="top" size="small" />
          <Spacer position="top" size="small" />
          {/* ****************************************************************** */}
          <Container
            width="100%"
            height={"25%"}
            justify="flex-end"
            color={theme.colors.bg.elements_bg}
            //color={"red"}
            align="center"
            direction="row"
          >
            <Spacer position="right" size="extraLarge">
              <Status_CTA_component
                Icon={PassengerIcon}
                caption1={"Close to"}
                caption2={"Passenger"}
                width="50px"
                height="50px"
                action={() =>
                  navigation.navigate("Messages_by_categories_View", {
                    category: "issues_at_store",
                    caption: "Issues at store",
                  })
                }
                icon_bg_color={theme.colors.ui.primary}
              />
            </Spacer>
          </Container>
          <Spacer position="top" size="small" />
          <Spacer position="top" size="small" />
          <Spacer position="top" size="small" />
          <Spacer position="top" size="small" />
          {/* ****************************************************************** */}
          <Container
            width="100%"
            height={"25%"}
            justify="flex-start"
            color={theme.colors.bg.elements_bg}
            //color={"red"}
            align="center"
            direction="row"
          >
            <Spacer position="left" size="extraLarge">
              <Status_CTA_component
                Icon={locationIcon}
                caption1={"At pickup"}
                caption2={"location"}
                width="45px"
                height="45px"
                action={() =>
                  navigation.navigate("Messages_by_categories_View", {
                    category: "issues_at_store",
                    caption: "Issues at store",
                  })
                }
                color="red"
              />
            </Spacer>
          </Container>
          <Spacer position="top" size="small" />
          <Spacer position="top" size="small" />
          <Spacer position="top" size="small" />
        </Scrollable_Container>
      ) : null}
    </Flex_Container>
  );
};
