import styled from "styled-components/native";
import { theme } from "../../infrastructure/theme";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.text.primary};
  
`;

const summary_tile_caption = (theme) => `
    font-size: ${theme.fontSizes.summary_tile_text};
    font-family: ${theme.fonts.bold};
    text-align: center;
    
    `;
const logo_caption = (theme) => `
    font-size: ${"20px"};
    font-family: ${theme.fonts.bold};
`;
const transcripted_message_caption = (theme) => `
font-size: ${theme.fontSizes.copied_message_tile};
    font-family: ${theme.fonts.bold};
    text-align: center;
    `;
const transcripted_message_copied_caption = (theme) => `
font-size: ${theme.fontSizes.copied_message_tile};
    font-family: ${theme.fonts.bold};
    text-align: center;
    color: ${theme.colors.text.secondary};
    `;
const middle_screens_caption = (theme) => `
    font-size: ${theme.fontSizes.middle_screens_caption};
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.text.middle_screens_text};
    `;
const headers_caption = (theme) => `
    font-size: ${theme.fontSizes.headers};
    font-family: ${theme.fonts.semi_bold};
    `;
const squared_ctas = (theme) => `
    font-size: ${theme.fontSizes.sq_ctas};
    font-family: ${theme.fonts.bold};
    `;
const numbers_ctas_black = (theme) => `
    font-size: ${theme.fontSizes.numbers_ctas};
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.text.primary};
`;
const numbers_ctas_white = (theme) => `
    font-size: ${theme.fontSizes.numbers_ctas};
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.text.secondary};
`;
const stages_ctas_black = (theme) => `
    font-size: ${theme.fontSizes.stages_ctas};
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.text.primary};
`;
const stages_ctas_white = (theme) => `
font-size: ${theme.fontSizes.stages_ctas};
font-family: ${theme.fonts.bold};
color: ${theme.colors.text.secondary};
`;
const stages_headers = (theme) => `
font-size: ${theme.fontSizes.stages_headers};
    font-family: ${theme.fonts.bold};
`;
const text_inputs = (theme) => `
    font-size: ${theme.fontSizes.text_inputs};
    font-family: ${theme.fonts.bold};
`;
const semi_rounded_ctas_white = (theme) => `
    font-size: ${theme.fontSizes.semi_rounded_ctas};
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.text.secondary};
    `;
const semi_rounded_ctas_black = (theme) => `
    font-size: ${theme.fontSizes.semi_rounded_ctas};
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.text.primary};
`;
const en_es_ctas = (theme) => `
    font-size: ${theme.fontSizes.en_es_ctas};
    font-family: ${theme.fonts.bold};
    `;
const bottom_tab_bar_caption = (theme) => `
font-size: ${theme.fontSizes.bottom_tab_bar};
    font-family: ${theme.fonts.semi_bold};
    `;

const underlined_small_caption = (theme) => `
    font-size: ${theme.fontSizes.bottom_tab_bar};
    font-family: ${theme.fonts.regular};
    font-style: underline;
    `;
const underlined_small_caption_black = (theme) => `
    font-size: ${theme.fontSizes.bottom_tab_bar};
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.text.secondary};
    `;
const copied_message_tile_caption = (theme) => `
    font-size: ${theme.fontSizes.copied_message_tile};
    font-family: ${theme.fonts.bold};
    text-align: center;
    color: ${theme.colors.text.secondary};
    `;

const ES_EN_ctas_black = (theme) => `
        font-size: ${theme.fontSizes.en_es_cta};
        font-family: ${theme.fonts.bold};
        color: ${theme.colors.text.primary};
    `;

const variants = {
  summary_tile_caption,
  logo_caption,
  transcripted_message_caption,
  copied_message_tile_caption,
  middle_screens_caption,
  headers_caption,
  squared_ctas,
  numbers_ctas_black,
  numbers_ctas_white,
  stages_ctas_black,
  stages_ctas_white,
  stages_headers,
  text_inputs,
  semi_rounded_ctas_white,
  semi_rounded_ctas_black,
  en_es_ctas,
  bottom_tab_bar_caption,
  underlined_small_caption,
  ES_EN_ctas_black,
  transcripted_message_copied_caption,
  underlined_small_caption_black,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
