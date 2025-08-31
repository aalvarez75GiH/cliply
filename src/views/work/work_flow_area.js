import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { theme } from "../../infrastructure/theme";
import {
  Action_Container,
  Container,
} from "../../components/global_components/containers/general_containers";
import { Spacer } from "../../components/global_components/optimized.spacer.component";

import { Scrollable_Container } from "../../components/global_components/containers/general_containers";
import { Flex_Container } from "../../components/global_components/containers/general_containers";
import { Loading_Spinner_area } from "../../components/global_components/global_loading_spinner_area.component";
import { Operations_Status_Connector_Line } from "../../components/global_components/operations_status_connector_line.component";
import { Operations_Status_Step_Component } from "../../components/operations_components/operations_status_step.component";
import { Text } from "../../infrastructure/typography/text.component";

import { TextClipsContext } from "../../infrastructure/services/home/text_clips.context";

export const Work_Flow_Area = ({ operation, isLoading }) => {
  const navigation = useNavigation();
  const { nextStep } = useContext(TextClipsContext);

  const image_source_2 = require("../../../assets/illustrations/at restaurant-shopping.png");
  const image_source_5 = require("../../../assets/illustrations/close to passenger.png");

  const aspectRatio = 1024 / 1080;
  return (
    <Scrollable_Container
      width="100%"
      height={"67%"}
      justify="center"
      //color={"lightblue"}
      align="center"
      color={theme.colors.bg.screens_bg}
    >
      {isLoading && (
        <Container
          width="100%"
          height={"81%"}
          color={"lightblue"}
          justify="center"
          align="center"
        >
          <Loading_Spinner_area />
        </Container>
      )}
      <Action_Container
        width="100%"
        height={"50%"}
        // color={"red"}
        color={"transparent"}
        justify="center"
        align="center"
        direction="row"
        onPress={() => navigation.navigate(nextStep.status_view, nextStep)}
        // onPress={() =>
        //   navigation.navigate("Clips_by_Status_View_1", {
        //     operation_name: "food_delivery",
        //     status_name: "heading_to_pickup/shop",
        //     caption: "Heading to pickup/shop",
        //   })
        // }
      >
        <Container
          width="50%"
          height={"85%"}
          // color={"green"}
          color={"transparent"}
          justify="center"
          align="center"
        >
          <Container
            // width="186px"
            // height={"178px"}
            width="100%"
            height={"70%"}
            color={"brown"}
            justify="center"
            align="center"
            style={{ overflow: "hidden" }}
          >
            <Image
              source={image_source_2}
              style={{
                width: "100%",
                height: "100%",
                aspectRatio: 1024 / 650,
                borderRadius: 0,
              }}
              contentFit="cover"
            />
          </Container>
          <Container
            width="100%"
            height="45%"
            justify="center"
            align="center"
            color="black"
            direction="colum"
          >
            <Text variant="dm_sans_bold_14_white">Food delivery</Text>
            <Text variant="dm_sans_bold_14_white">text clips flow</Text>
          </Container>
        </Container>
        {/* <Container
          width="12%"
          height={"100%"}
          color={"white"}
          justify="center"
          align="center"
        ></Container> */}
        <Container
          width="40%"
          height={"100%"}
          // color={"purple"}
          color={"#CEE3DA"}
          justify="center"
          align="center"
        >
          <Container width="70%" color="trasnparent">
            <Text
              variant="dm_sans_bold_16"
              style={{
                textAlign: "center",
                paddingTop: 5,
                color: "#0A7346",
              }}
            >
              Tap here if you have a food delivery order
            </Text>
          </Container>
        </Container>
      </Action_Container>

      {/* ************************* SPLITTER *************************************** */}
      <Container
        width="100%"
        height={"2%"}
        // color={"yellow"}
        color={"transparent"}
        align="center"
        justify="flex-end"
      >
        <Spacer position="top" size="small"></Spacer>
        <Container width="90%" height={"10%"} color={"#898989"} />
      </Container>

      {/* ************************* RIDE SHARE *************************************** */}
      <Action_Container
        width="100%"
        height={"50%"}
        // color={"green"}
        color={"transparent"}
        justify="center"
        align="center"
        direction="column"
        onPress={() =>
          navigation.navigate("Clips_by_Status_View_1", {
            operation_name: "ride_share",
            status_name: "heading_to_passenger",
            caption: "Heading to Passenger",
          })
        }
      >
        <Container
          width="100%"
          height={"50%"}
          // color={"pink"}
          color={"transparent"}
          justify="center"
          align="center"
          direction="row"
        >
          <Container
            width="15%"
            height={"100%"}
            // color={"yellow"}
            color={"transparent"}
            justify="center"
            align="center"
          />

          <Container
            width="92%"
            height={"100%"}
            // color={"blue"}
            color={"transparent"}
            justify="center"
            align="center"
            direction="row"
          >
            <Container
              // width="186px"
              // height={"178px"}
              width="45%"
              height={"100%"}
              //color={"transparent"}
              color={"red"}
              justify="center"
              align="center"
              style={{ overflow: "hidden" }}
            >
              <Image
                source={image_source_5}
                style={{
                  width: "80%",
                  height: "110%",
                  aspectRatio: 1024 / 850,
                  borderRadius: 0,
                  // borderRadiusTopLeft: 10,
                  // borderRadiusBottomLeft: 10,
                  // borderTopRightRadius: 0,
                  // borderBottomRightRadius: 0,
                }}
                contentFit="cover"
              />
            </Container>
            <Container
              // width="186px"
              // height={"178px"}
              width="55%"
              height={"100%"}
              // color={"lightblue"}
              color={"black"}
              justify="center"
              align="center"
              style={{ overflow: "hidden" }}
            >
              <Text variant="dm_sans_bold_14_white">Ride share</Text>
              <Text variant="dm_sans_bold_14_white">text clips flow</Text>
            </Container>
            <Container
              width="15%"
              height={"100%"}
              // color={"yellow"}
              color={"transparent"}
              justify="center"
              align="center"
            />
          </Container>
        </Container>

        {/* ******************************************************** */}

        <Container
          width="100%"
          height={"40%"}
          // color={"purple"}
          // color={"#CEE3DA"}
          color={"transparent"}
          justify="center"
          align="center"
        >
          <Container
            width="100%"
            height={"100%"}
            // color={"pink"}
            color={"transparent"}
            justify="center"
            align="center"
            direction="row"
          >
            <Container
              width="5%"
              height={"100%"}
              color={"transparent"}
              // color={"brown"}
              justify="center"
              align="center"
            />
            <Container
              width="92%"
              height={"100%"}
              color={"#D4DDEA"}
              //color={"red"}
              justify="center"
              align="center"
            >
              <Text
                variant="dm_sans_bold_16"
                style={{
                  textAlign: "center",
                  paddingTop: 5,
                  color: "#265697",
                }}
              >
                Tap here if you have a ride share
              </Text>
            </Container>
            <Container
              width="5%"
              height={"100%"}
              // color={"yellow"}
              color={"transparent"}
              justify="center"
              align="center"
            />
          </Container>
        </Container>
      </Action_Container>
    </Scrollable_Container>
  );
};
