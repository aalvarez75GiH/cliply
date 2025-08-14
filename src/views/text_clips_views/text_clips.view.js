import React, { useContext, useState } from "react";

import { HomeHeader } from "../../components/headers/home_header.component.js";
import { Rounded_Ctas_Belt } from "../../components/belts/rounded_ctas_belt.component.js";
import { Two_Rounded_Ctas_Belt } from "../../components/belts/two_semi_rounded_ctas_belt.component.js";
import { SafeArea } from "../../components/global_components/safe-area.component.js";
import { theme } from "../../infrastructure/theme/index.js";
import { Container } from "../../components/global_components/containers/general_containers.js";
import { Spacer } from "../../components/global_components/optimized.spacer.component.js";

import { HomeContext } from "../../infrastructure/services/home/home.context";

import { Voice_transcription_Area } from "../home_views/home operations views/voice_transcription.area.js";
import { Loading_Spinner_area } from "../../views/home_views/home operations views/loading_spinner.area.js";
import { Categories_Area } from "../home_views/home operations views/messages_categories.area.js";
import { Operations_Status_Area } from "./text clips operations areas/operations_status.area.js";
import { Sound_Wave_area } from "../../views/home_views/home operations views/sound_wave.area.js";
import { Home_process_area_4 } from "../../components/home_process_areas/home_process_area_4.component.js";
import { Text } from "../../infrastructure/typography/text.component.js";

export default function Text_Clips_View({ navigation }) {
  const [operation, setOperation] = useState("food_delivery");
  const [isLoading, setIsLoading] = useState(false);

  const {
    startRecording,
    recordingStatus,
    response,
    startTranscription,
    setResponse,
    stopRecording,
  } = useContext(HomeContext);

  const togglingOperation = (op) => {
    setIsLoading(true);
    setOperation(
      operation === "food_delivery" ? "ride_share" : "food_delivery"
    );
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  return (
    <SafeArea background_color={theme.colors.bg.screens_bg}>
      <Container
        width="100%"
        height={"100%"}
        color={theme.colors.bg.screens_bg}
        justify="center"
        align="center"
      >
        <HomeHeader action={() => navigation.navigate("Menu_View")} />
        <Two_Rounded_Ctas_Belt
          action_1={togglingOperation}
          action_2={togglingOperation}
          cta_active_color={theme.colors.ui.primary}
          cta_not_active_color={theme.colors.ctas.tertiary}
          cta_caption_active_variant="dm_sans_bold_14_white"
          cta_caption_not_active_variant="dm_sans_bold_14_disable_not_active"
          operation={operation}
        />
        <Spacer position="top" size="small" />
        <Container
          width="100%"
          height={"12%"}
          justify="center"
          align="flex-start"
          color={theme.colors.bg.elements_bg}
          //color={"red"}
        >
          {operation === "food_delivery" && (
            <>
              <Spacer position="left" size="extraLarge">
                <Text variant="dm_sans_bold_18">
                  Tap to find text clips depending on where you are in the
                  order.
                </Text>
              </Spacer>
            </>
          )}
          {operation === "ride_share" && (
            <>
              <Spacer position="left" size="extraLarge">
                <Text variant="dm_sans_bold_18">
                  Tap to find text clips depending on where you are in the ride.
                </Text>
              </Spacer>
            </>
          )}
        </Container>
        <Spacer position="top" size="small" />

        <Operations_Status_Area operation={operation} isLoading={isLoading} />
        {/* ) : null} */}
      </Container>
    </SafeArea>
  );
}
