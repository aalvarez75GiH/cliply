// import MenuIcon from "../../../assets/my-icons/two_stripes_menu.svg";
import Main_mic_icon from "../../../assets/my-icons/micIcon.svg";
import { theme } from "../../infrastructure/theme/index.js";
import { Text } from "../../infrastructure/typography/text.component.js";
import {
  Action_Container,
  Container,
} from "../../../src/components/global_components/containers/general_containers.js";
import { Spacer } from "../global_components/optimized.spacer.component.js";
import { Circular_Icon_CTA } from "./circular_icon.cta.js";
import { ExitIcon } from "../transformed icons/exit_icon_transformed.js";
import RightArrow from "../../../assets/my-icons/arrow_next_icon.svg";
import { act } from "react";
export const Main_mic_CTA_component = ({
  action1,
  action2,
  action3,
  recordingStatus,
  caption_line_1,
  caption_line_2,
}) => {
  return (
    <Container
      width="95%"
      height="60%"
      color={theme.colors.bg.screens_bg}
      direction="row"
      align="center"
      justify={recordingStatus ? "center" : "flex-start"}
      border_radius="100px"
    >
      {recordingStatus === "idle" && (
        <>
          <Spacer position="left" size="medium" />
          <Action_Container
            width="60px"
            height="60px"
            color={theme.colors.ui.ctas_bg_dark}
            border_radius="100px"
            onPress={action1}
            style={{
              shadowColor: "#000", // iOS shadow color
              shadowOffset: { width: 2, height: 2 }, // iOS shadow offset
              shadowOpacity: 0.25, // iOS shadow opacity
              shadowRadius: 3.84, // iOS shadow radius
              elevation: 5, // Android shadow
            }}
          >
            <Main_mic_icon width="35px" height="35px" fill="#FFFFFF" />
          </Action_Container>
          <Container
            width="82%"
            height="90%"
            color={theme.colors.bg.screens_bg}
            // color="#FAD"
            direction="column"
            align="center"
            justify="center"
            // border_radius="100px"
            style={{
              borderTopRightRadius: 100,
              borderBottomRightRadius: 100,
            }}
          >
            <Container
              width="92%"
              height="42%"
              color={theme.colors.bg.screens_bg}
              // color={"green"}
              justify="center"
              align="flex-start"
              border_radius="10px"
            >
              {/* <Spacer position="left" size="medium"> */}
              <Text
                variant="dm_sans_bold_16"
                // style={{
                //   alignSelf: "flex-start",
                //   textAlign: "flex-start",
                // }}
              >
                {caption_line_1}
              </Text>
              {/* </Spacer> */}
            </Container>
            <Container
              width="92%"
              height="42%"
              color={theme.colors.bg.screens_bg}
              // color={"blue"}
              justify="center"
              align="flex-start"
              border_radius="10px"
            >
              {/* <Spacer position="left" size="medium"> */}
              <Text
                variant="dm_sans_bold_16"
                // style={{
                //   alignSelf: "flex-start",
                //   textAlign: "flex-start",
                // }}
              >
                {caption_line_2}
                {/* Tap here & create a new msg using your voice */}
              </Text>
              {/* </Spacer> */}
            </Container>
          </Container>
        </>
      )}
      {recordingStatus === "listening" && (
        <>
          <Circular_Icon_CTA
            action={action2}
            Icon={ExitIcon}
            width="10px"
            height="10px"
          />
          <Container
            width="60%"
            height="90%"
            color={theme.colors.bg.screens_bg}
            // color="#FAD"
            direction="row"
            align="center"
            justify="center"
          >
            <Text
              variant="middle_screens_caption"
              style={{
                alignSelf: "center",
                justifySelf: "flex-start",
                textAlign: "left",
              }}
            >
              Listening...
            </Text>
          </Container>
          <Circular_Icon_CTA
            action={action3}
            Icon={RightArrow}
            width="20px"
            height="20px"
          />
        </>
      )}
      {recordingStatus === "transcribing" && (
        <>
          <Circular_Icon_CTA
            action={action2}
            Icon={ExitIcon}
            width="10px"
            height="10px"
          />
          <Container
            width="60%"
            height="90%"
            color={theme.colors.bg.screens_bg}
            // color="#FAD"
            direction="row"
            align="center"
            justify="center"
          >
            <Text
              variant="middle_screens_caption"
              style={{
                alignSelf: "center",
                justifySelf: "flex-start",
                textAlign: "left",
              }}
            >
              Transcribing...
            </Text>
          </Container>
          <Circular_Icon_CTA
            recordingStatus={recordingStatus}
            action={action3}
            Icon={RightArrow}
            width="20px"
            height="20px"
          />
        </>
      )}
    </Container>
  );
};
// export const Main_mic_CTA_component = ({ action }) => {
//   return (
//     <Container
//       width="65%"
//       height="40%"
//       color={theme.colors.bg.screens_bg}
//       // style={{ position: "absolute", top: "25%" }}
//     >
//       <Action_Container
//         width="90px"
//         height="90px"
//         color={theme.colors.ui.ctas_bg_dark}
//         border_radius="100px"
//         margin_bottom="20px"
//         onPress={action}
//         style={{
//           shadowColor: "#000", // iOS shadow color
//           shadowOffset: { width: 2, height: 2 }, // iOS shadow offset
//           shadowOpacity: 0.25, // iOS shadow opacity
//           shadowRadius: 3.84, // iOS shadow radius
//           elevation: 5, // Android shadow
//         }}
//       >
//         <Main_mic_icon width="40px" height="40px" fill="#FFFFFF" />
//       </Action_Container>
//       <Text variant="middle_screens_caption">Tap here & leave a</Text>
//       <Text variant="middle_screens_caption">voice message</Text>
//     </Container>
//   );
// };
