import styled from "styled-components/native";
import { TextInput } from "react-native-paper";
import { theme } from "../../infrastructure/theme";

// export const FormInput = styled(TextInput)`
//   width: 100%;
//   background-color: #ffffff;
// `;

export const FormInput = styled(TextInput).attrs(
  ({ $fontFamily = theme.fonts.bold, $fontSize = 16 }) => ({
    mode: "flat",
    underlineColor: "transparent",
    // This styles the actual text inside the input:
    contentStyle: {
      fontFamily: $fontFamily,
      fontSize: $fontSize,
      includeFontPadding: false, // Android nicety
      textAlignVertical: "center",
    },
  })
)`
  width: 100%;
  background-color: #ffffff;
  /* Container styles go here (padding/margins/width), not font */
`;
