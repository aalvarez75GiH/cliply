import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../../infrastructure/typography/text.component.js";
import { theme } from "../../infrastructure/theme/index.js";

export const SemiRounded_Clear_CTA = ({ action }) => {
  return (
    <TouchableOpacity
      style={{
        // position: "absolute",
        // top: 100,
        width: 120,
        height: 40,
        border: "2px solid #000000",
        backgroundColor: "#000000",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
      }}
      onPress={action}
    >
      <Text
        variant="underlined_small_caption_black"
        style={{
          fontStyle: "underlined",
        }}
      >
        Clear
      </Text>
    </TouchableOpacity>
  );
};
