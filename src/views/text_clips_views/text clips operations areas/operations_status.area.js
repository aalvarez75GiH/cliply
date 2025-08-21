import React from "react";
import { useNavigation } from "@react-navigation/native";

import { theme } from "../../../infrastructure/theme";
import { Container } from "../../../components/global_components/containers/general_containers";
import { Spacer } from "../../../components/global_components/optimized.spacer.component";
import { Status_CTA_PNG } from "../../../components/calls_to_action/status_cta_png.cta";

import { Scrollable_Container } from "../../../components/global_components/containers/general_containers";
import { Flex_Container } from "../../../components/global_components/containers/general_containers";
import { Loading_Spinner_area } from "../../../components/global_components/global_loading_spinner_area.component";
import { Operations_Status_Connector_Line } from "../../../components/global_components/operations_status_connector_line.component";

export const Operations_Status_Area = ({ operation, isLoading }) => {
  const navigation = useNavigation();

  const image_source_1 = require("../../../../assets/illustrations/heading_to_pickup.png");
  const image_source_2 = require("../../../../assets/illustrations/at restaurant-shopping.png");
  const image_source_3 = require("../../../../assets/illustrations/heading to drop off.png");
  const image_source_4 = require("../../../../assets/illustrations/heading to passenger.png");
  const image_source_5 = require("../../../../assets/illustrations/close to passenger.png");
  const image_source_6 = require("../../../../assets/illustrations/at pickUp location.png");

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
          <Spacer position="top" size="small" />
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
            height={"auto"}
            justify="flex-start"
            color={theme.colors.bg.elements_bg}
            //color={"green"}
            align="center"
            direction="row"
          >
            <Spacer position="left" size="medium">
              <Status_CTA_PNG
                caption1={"Heading to"}
                caption2={"pickup/shop"}
                action={() =>
                  navigation.navigate("Clips_by_Operations_And_Status_View", {
                    operation: "food_delivery",
                    status_name: "Heading to pickup/shop",
                    caption: "Heading to pickup/shop",
                  })
                }
                inverted={false}
                image_source={image_source_1}
              />
            </Spacer>
          </Container>
          <Operations_Status_Connector_Line side="right" />

          {/* ****************************************************************** */}
          <Container
            width="100%"
            height={"auto"}
            justify="flex-end"
            color={theme.colors.bg.elements_bg}
            //color={"blue"}
            align="center"
            direction="row"
          >
            <Spacer position="right" size="medium">
              <Status_CTA_PNG
                caption1={"Picking up"}
                caption2={"Shopping"}
                width="45px"
                height="45px"
                action={() =>
                  navigation.navigate("Clips_by_Operations_And_Status_View", {
                    operation: "food_delivery",
                    status_name: "Picking up / Shopping",
                    caption: "Picking up / Shopping",
                  })
                }
                icon_bg_color={theme.colors.ui.primary}
                inverted={true}
                image_source={image_source_2}
              />
            </Spacer>
          </Container>

          <Operations_Status_Connector_Line side="left" />

          {/* ****************************************************************** */}
          <Container
            width="100%"
            height={"auto"}
            justify="flex-start"
            color={theme.colors.bg.elements_bg}
            //color={"red"}
            align="center"
            direction="row"
          >
            <Spacer position="left" size="medium">
              <Status_CTA_PNG
                caption1={"Heading to"}
                caption2={"dropp off"}
                width="70px"
                height="70px"
                action={() =>
                  navigation.navigate("Clips_by_Operations_And_Status_View", {
                    operation: "food_delivery",
                    status_name: "Heading to drop off",
                    caption: "Heading to drop off",
                  })
                }
                image_source={image_source_3}
                //image_source={require("../../../../assets/illustrations/heading to drop off.png")}
              />
            </Spacer>
          </Container>
          <Container
            width="100%"
            height={"5%"}
            justify="center"
            color={theme.colors.bg.elements_bg}
            //color={"red"}
            align="center"
            direction="row"
          />
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
            height={"auto"}
            justify="flex-start"
            color={theme.colors.bg.elements_bg}
            //color={"red"}
            align="center"
            direction="row"
          >
            <Spacer position="left" size="medium">
              <Status_CTA_PNG
                caption1={"Heading to"}
                caption2={"Passenger"}
                width="70px"
                height="70px"
                action={() =>
                  navigation.navigate("Clips_by_Operations_And_Status_View", {
                    operation: "ride_share",
                    status_name: "Heading to Passenger",
                    caption: "Heading to Passenger",
                  })
                }
                image_source={image_source_4}
              />
            </Spacer>
          </Container>

          <Operations_Status_Connector_Line side="right" />
          {/* ****************************************************************** */}
          <Container
            width="100%"
            height={"auto"}
            justify="flex-end"
            color={theme.colors.bg.elements_bg}
            //color={"red"}
            align="center"
            direction="row"
          >
            <Spacer position="right" size="medium">
              <Status_CTA_PNG
                caption1={"Close to"}
                caption2={"Passenger"}
                width="50px"
                height="50px"
                action={() =>
                  navigation.navigate("Clips_by_Operations_And_Status_View", {
                    operation: "ride_share",
                    status_name: "Close to Passenger",
                    caption: "Close to Passenger",
                  })
                }
                icon_bg_color={theme.colors.ui.primary}
                inverted={true}
                image_source={image_source_5}
              />
            </Spacer>
          </Container>

          <Operations_Status_Connector_Line side="left" />
          {/* ****************************************************************** */}
          <Container
            width="100%"
            height={"auto"}
            justify="flex-start"
            color={theme.colors.bg.elements_bg}
            //color={"red"}
            align="center"
            direction="row"
          >
            <Spacer position="left" size="medium">
              <Status_CTA_PNG
                caption1={"At passenger`s"}
                caption2={"location"}
                width="45px"
                height="45px"
                action={() =>
                  navigation.navigate("Clips_by_Operations_And_Status_View", {
                    operation: "ride_share",
                    status_name: "At Passengers location",
                    caption: "At Passengers location",
                  })
                }
                color="red"
                image_source={image_source_6}
              />
            </Spacer>
          </Container>
          <Container
            width="100%"
            height={"10%"}
            justify="center"
            color={theme.colors.bg.elements_bg}
            //color={"red"}
            align="center"
            direction="row"
          />
        </Scrollable_Container>
      ) : null}
    </Flex_Container>
  );
};
