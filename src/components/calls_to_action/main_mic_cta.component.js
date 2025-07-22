// import MenuIcon from "../../../assets/my-icons/two_stripes_menu.svg";
import Main_mic_icon from "../../../assets/my-icons/micIcon.svg";
import { theme } from "../../infrastructure/theme/index.js";
import { Text } from "../../infrastructure/typography/text.component.js";
import {
  Action_Container,
  Container,
} from "../../../src/components/global_components/containers/general_containers.js";

export const Main_mic_CTA_component = () => {
  return (
    <Container
      width="65%"
      height="40%"
      color={theme.colors.bg.screens_bg}
      style={{ position: "absolute", top: "20%" }}
    >
      <Action_Container
        width="120px"
        height="120px"
        color={theme.colors.ui.ctas_bg_dark}
        border_radius="100px"
        margin_bottom="20px"
      >
        <Main_mic_icon width="60px" height="60px" fill="#FFFFFF" />
      </Action_Container>
      <Text variant="middle_screens_caption">Tap here & leave a</Text>
      <Text variant="middle_screens_caption">voice message</Text>
    </Container>
  );
};
