import { View } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../infrastructure/theme";

export const Semi_rounded_CTA = styled(View)`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "89%"};
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.ui.primary};
  border-radius: 25px;
`;
