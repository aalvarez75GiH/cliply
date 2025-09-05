import React, { useContext } from "react";

import { ExitHeader } from "../../components/headers/exit_header.component.js";

import { SafeArea } from "../../components/global_components/safe-area.component.js";
import { theme } from "../../infrastructure/theme/index.js";
import { Container } from "../../components/global_components/containers/general_containers.js";
import { Spacer } from "../../components/global_components/optimized.spacer.component.js";
import AccounIcon from "../../../assets/my-icons/account_icon.svg";
import CategoriesIcon from "../../../assets/my-icons/categories_icon.svg";
import EnvelopeIcon from "../../components/transformed icons/email_icon_transformed.js";
import ArrowSwitchIcon from "../../components/transformed icons/arrow_switch_icon.js";
import { Menu_Sub_title_Tile } from "../../components/tiles/menu_sub_title.tile.js";
import { Menu_Tile } from "../../components/tiles/menu.tile.js";
import { GlobalContext } from "../../infrastructure/services/global/global.context.js";

export default function Menu_View({ navigation }) {
  const {
    globalLanguage,
    togglingGlobalLanguage,
    isLoading,
    loggingOutUser,
    userToDB,
  } = useContext(GlobalContext);
  return (
    <SafeArea background_color={theme.colors.bg.elements_bg}>
      <Container
        // color={"lightyellow"}
        width={"100%"}
        height={"100%"}
        align="center"
        justify="flex-start"
        // color={theme.colors.bg.elements_bg}
        color={theme.colors.bg.screens_bg}
      >
        <ExitHeader />
        <Menu_Sub_title_Tile
          caption="Account"
          variant={"menu_sub_title_text"}
          //   variant="menu_sub_title_text"
        />
        <Container
          color={theme.colors.bg.screens_bg}
          //   color={"green"}
          width={"100%"}
          height={"92%"}
          align="center"
          justify="flex-start"
        >
          <Container
            color={theme.colors.bg.screens_bg}
            width={"100%"}
            height={"21%"}
            align="center"
            justify="flex-start"
            // color={"red"}
          >
            <Spacer position="top" size="small" />
            <Menu_Tile
              Icon={AccounIcon}
              width={"30px"}
              height={"30px"}
              caption={userToDB.first_name + " " + userToDB.last_name}
              color={theme.colors.ui.primary}
            />
            <Spacer position="top" size="small" />
            <Menu_Tile
              // Icon={EmailIcon}
              Icon={EnvelopeIcon}
              width={"40px"}
              height={"40px"}
              caption={userToDB.email}
              color={theme.colors.ui.primary}
            />
          </Container>
          <Menu_Sub_title_Tile
            caption="Things of interest"
            variant={"menu_sub_title_text_2"}
          />
          <Container
            width={"100%"}
            height={"21%"}
            align="center"
            justify="flex-start"
            // color={"purple"}
            color={theme.colors.bg.screens_bg}
          >
            <Spacer position="top" size="small" />
            <Menu_Tile
              Icon={CategoriesIcon}
              width={"30px"}
              height={"30px"}
              caption={"Messages by Stages"}
              color={theme.colors.ui.primary}
            />
            <Spacer position="top" size="small" />
            <Menu_Tile
              Icon={ArrowSwitchIcon}
              width={"30px"}
              height={"30px"}
              //   caption={"English"}
              caption={globalLanguage === "EN" ? "English" : "Español"}
              color={theme.colors.ui.primary}
              isLoading={isLoading}
              action={() => togglingGlobalLanguage()}
            />
            <Spacer position="top" size="small" />
            <Menu_Tile
              Icon={ArrowSwitchIcon}
              width={"30px"}
              height={"30px"}
              //   caption={"English"}
              caption={globalLanguage === "EN" ? "Sign out" : "Salir"}
              color={theme.colors.ui.error}
              isLoading={isLoading}
              action={() => loggingOutUser()}
            />
          </Container>
        </Container>
      </Container>
    </SafeArea>
  );
}
