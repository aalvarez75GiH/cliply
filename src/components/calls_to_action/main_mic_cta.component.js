// import MenuIcon from "../../../assets/my-icons/two_stripes_menu.svg";
import Main_mic_icon from "../../../assets/my-icons/micIcon.svg";
import { theme } from "../../infrastructure/theme/index.js";
import { Text } from "../../infrastructure/typography/text.component.js";
import {
  Action_Container,
  Container,
} from "../../../src/components/global_components/containers/general_containers.js";

export const Main_mic_CTA_component = ({ action }) => {
  return (
    <Container
      width="65%"
      height="40%"
      color={theme.colors.bg.screens_bg}
      // style={{ position: "absolute", top: "25%" }}
    >
      <Action_Container
        width="90px"
        height="90px"
        color={theme.colors.ui.ctas_bg_dark}
        border_radius="100px"
        margin_bottom="20px"
        onPress={action}
        style={{
          shadowColor: "#000", // iOS shadow color
          shadowOffset: { width: 2, height: 2 }, // iOS shadow offset
          shadowOpacity: 0.25, // iOS shadow opacity
          shadowRadius: 3.84, // iOS shadow radius
          elevation: 5, // Android shadow
        }}
      >
        <Main_mic_icon width="40px" height="40px" fill="#FFFFFF" />
      </Action_Container>
      <Text variant="middle_screens_caption">Tap here & leave a</Text>
      <Text variant="middle_screens_caption">voice message</Text>
    </Container>
  );
};
