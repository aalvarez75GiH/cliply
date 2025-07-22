import Svg, { Path } from "react-native-svg";

const MenuIcon = ({ width = 30, height = 30, fill = "#000000" }) => (
  <Svg width={width} height={height} viewBox="0 0 24 24">
    <Path
      d="M3 7a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1ZM3 13a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
      fill={fill}
    />
  </Svg>
);

export default MenuIcon;
