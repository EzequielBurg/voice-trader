import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

export const CloseIcon = (props: SvgProps) => (
  <Svg
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      stroke="#0067E5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={22.926}
      strokeWidth={2.333}
      d="m14.238 25.654 11.667-11.528M25.905 25.654 14.238 14.126"
    />
  </Svg>
)
