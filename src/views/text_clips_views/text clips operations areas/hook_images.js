import { useEffect, useState } from "react";
import { Asset } from "expo-asset";

export function usePreloadImages(sources: number[]) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    (async () => {
      await Promise.all(
        sources.map((src) => Asset.fromModule(src).downloadAsync())
      );
      setReady(true);
    })();
  }, [sources]);
  return ready;
}

// usage
const ready = usePreloadImages([
  require("../../../../assets/illustrations/heading_to_pickup.png"),
  require("../../../../assets/illustrations/at restaurant-shopping.png"),
  require("../../../../assets/illustrations/heading to drop off.png"),
  require("../../../../assets/illustrations/heading to passenger.png"),
  require("../../../../assets/illustrations/close to passenger.png"),
  require("../../../../assets/illustrations/at pickUp location.png"),
]);
// render a placeholder until ready

// onst image_source_1 = require("../../../../assets/illustrations/heading_to_pickup.png");
//   const image_source_2 = require("../../../../assets/illustrations/at restaurant-shopping.png");
//   const image_source_3 = require("../../../../assets/illustrations/heading to drop off.png");
//   const image_source_4 = require("../../../../assets/illustrations/heading to passenger.png");
//   const image_source_5 = require("../../../../assets/illustrations/close to passenger.png");
//   const image_source_6 = require("../../../../assets/illustrations/at pickUp location.png");
