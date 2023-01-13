import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={72}
    height={72}
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M0 32h32V0H0v32ZM8 8h16v16H8V8ZM0 72h32V40H0v32Zm8-24h16v16H8V48ZM40 0v32h32V0H40Zm24 24H48V8h16v16ZM72 64h-8v8h8v-8ZM48 40h-8v8h8v-8ZM56 48h-8v8h8v-8ZM48 56h-8v8h8v-8ZM56 64h-8v8h8v-8ZM64 56h-8v8h8v-8ZM64 40h-8v8h8v-8ZM72 48h-8v8h8v-8Z"
      fill="#000"
    />
  </Svg>
);

export default SvgComponent;
