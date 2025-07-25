import { ScrollView, TouchableOpacity, View } from "react-native";
import styled, { css } from "styled-components/native";
import { theme } from "../../../infrastructure/theme";

const baseStyles = css`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "89%"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.border_radius || "0px"};
  background-color: ${(props) => props.color || "#FADADD"};
  flex-direction: ${(props) => props.direction || "column"};
  margin-top: ${(props) => props.margin_top || "0px"};
  margin-bottom: ${(props) => props.margin_bottom || "0px"};
  margin-right: ${(props) => props.margin_right || "0px"};
  margin-left: ${(props) => props.margin_left || "0px"};
`;

export const Container = styled(View)`
  ${baseStyles};
`;

export const Flex_Container = styled(View)`
  flex: 1;
  align-items: ${(props) => props.align || "center"};
  background-color: ${(props) => props.color || "#FADADD"};
`;

export const Action_Container = styled(TouchableOpacity)`
  ${baseStyles};
`;

export const Action_Flex_Container = styled(TouchableOpacity)`
  ${baseStyles};
  flex: ${(props) => props.flex || 1};
`;

export const Scrollabe_MainContent = styled(ScrollView).attrs((props) => ({
  contentContainerStyle: {
    justifyContent: props.justify || "center",
    alignItems: props.align || "center",
    flexGrow: 1,
  },
}))`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "89%"};
  /* background-color: ${theme.colors.bg.screens_bg}; */
  background-color: ${(props) => props.color || theme.colors.bg.screens_bg};
  /* background-color: blue; */
`;
export const MainContent = styled(View)`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "89%"};
  /* background-color: ${theme.colors.bg.screens_bg}; */
  background-color: ${(props) => props.color || theme.colors.bg.screens_bg};
  /* background-color: blue; */
`;
