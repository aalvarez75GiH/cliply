// import MenuIcon from "../../../assets/my-icons/two_stripes_menu.svg";
import { Text } from "../../infrastructure/typography/text.component.js";
import MenuIcon from "../../../assets/my-icons/menu_icon.svg";

import {
  HomeHeaderContainer,
  LogoContainer,
  MenuIconContainer,
} from "../../../src/components/headers/header.elements.js";
import { theme } from "../../infrastructure/theme/index.js";

export const HomeHeader = () => {
  return (
    <HomeHeaderContainer>
      <MenuIconContainer>
        <MenuIcon width={40} height={40} fill={"#000000"} />
      </MenuIconContainer>
      <LogoContainer>
        <Text variant="logo_caption">Cliply</Text>
      </LogoContainer>
    </HomeHeaderContainer>
  );
};
