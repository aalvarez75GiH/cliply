import { View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

// **************** Home Header  ****************
export const HomeHeaderContainer = styled(View)`
  flex-direction: row;
  width: 100%;
  height: 8%;
  /* background-color: "#FAD"; */
  justify-content: space-between;
  align-items: center;
`;

export const MenuIconContainer = styled(View)`
  width: 20%;
  height: 100%;
  /* background-color: blue; */
  justify-content: center;
  align-items: center;
`;
export const LogoContainer = styled(View)`
  width: 80%;
  height: 100%;
  /* background-color: green; */
  justify-content: center;
  align-items: flex-end;
  padding-right: 5%;
`;
