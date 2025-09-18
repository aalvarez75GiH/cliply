import React, { useContext } from "react";

import { ExitHeader } from "../../components/headers/exit_header.component.js";

import { SafeArea } from "../../components/global_components/safe-area.component.js";
import { theme } from "../../infrastructure/theme/index.js";
import { Container } from "../../components/global_components/containers/general_containers.js";
import { Spacer } from "../../components/global_components/optimized.spacer.component.js";
import AccountIcon from "../../../assets/my-icons/account_icon.svg";
import EmailIcon from "../../../assets/my-icons/email_icon.svg";
import ArrowSwitchIcon from "../../components/transformed icons/arrow_switch_icon.js";
import LogOutIcon from "../../../assets/my-icons/logout_exit_out_icon.svg";
import PasswordIcon from "../../../assets/my-icons/password_icon.svg";
import { Menu_Sub_title_Tile } from "../../components/tiles/menu_sub_title.tile.js";
import { Menu_Tile } from "../../components/tiles/menu.tile.js";
import { Loading_Spinner_area } from "../../components/global_components/global_loading_spinner_area.component.js";
import { Text } from "../../infrastructure/typography/text.component.js";

import { GlobalContext } from "../../infrastructure/services/global/global.context.js";

export default function Menu_Screen({ navigation }) {
  const {
    globalLanguage,
    togglingGlobalLanguage,
    isLoading,
    loggingOutUser,
    userToDB,
    updatingPINOnDemandAndUpdatingUserAtFB,
    setPin,
    setNew_pin,
  } = useContext(GlobalContext);
  const { first_name, last_name, email } = userToDB;
  return (
    <SafeArea background_color={theme.colors.bg.elements_bg}>
      {isLoading && (
        <>
          <Container
            width={"100%"}
            height={"40%"}
            justify="center"
            align="center"
            color={theme.colors.bg.elements_bg}
          />
          <Loading_Spinner_area
            color={theme.colors.bg.elements_bg}
            height="10%"
          />
          <Container
            width={"100%"}
            height={"10%"}
            justify="center"
            align="center"
            // color="red"
            color={theme.colors.bg.elements_bg}
          >
            <Text variant="dm_sans_bold_18">
              Wait, we are sining you out...
            </Text>
          </Container>
        </>
      )}
      {!isLoading && (
        <Container
          // color={"lightyellow"}
          width={"100%"}
          height={"100%"}
          align="center"
          justify="flex-start"
          // color={theme.colors.bg.elements_bg}
          color={theme.colors.bg.screens_bg}
        >
          <ExitHeader
            action={() => {
              // setPin("");
              setNew_pin("");
              navigation.goBack();
            }}
          />
          <Menu_Sub_title_Tile
            caption="Account"
            // variant={"menu_sub_title_text"}
            variant={"dm_sans_bold_24"}
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
                Icon={AccountIcon}
                width={"25px"}
                height={"25px"}
                caption={first_name + " " + last_name || "User"}
                color={theme.colors.ui.primary}
              />
              <Spacer position="top" size="small" />
              <Menu_Tile
                // Icon={EmailIcon}
                Icon={EmailIcon}
                width={"35px"}
                height={"35px"}
                caption={email}
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
                Icon={PasswordIcon}
                width={"30px"}
                height={"30px"}
                caption={"Change your PIN number"}
                color={theme.colors.ui.primary}
                action={async () =>
                  navigation.navigate("Entering_New_PIN_View")
                }
                // action={async () =>
                //   await updatingPINOnDemandAndUpdatingUserAtFB()
                // }
              />
              <Spacer position="top" size="small" />
              <Menu_Tile
                Icon={ArrowSwitchIcon}
                width={"30px"}
                height={"30px"}
                //   caption={"English"}
                caption={
                  globalLanguage === "EN"
                    ? "Cambia a español"
                    : "Change to English"
                }
                color={theme.colors.ui.primary}
                isLoading={isLoading}
                action={() => togglingGlobalLanguage()}
              />
              <Menu_Tile
                Icon={LogOutIcon}
                width={"30px"}
                height={"30px"}
                //   caption={"English"}
                caption={globalLanguage === "EN" ? "Sign out" : "Salir"}
                color={theme.colors.ui.primary}
                // isLoading={isLoading}
                action={() => loggingOutUser()}
              />
            </Container>
          </Container>
        </Container>
      )}
    </SafeArea>
  );
}
