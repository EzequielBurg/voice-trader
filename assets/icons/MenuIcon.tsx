import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const MenuIcon = (props: SvgProps) => (
  <Svg
    width={42}
    height={42}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={22.926}
      strokeWidth={1.75}
      d="M12.25 15.75h17.503M12.25 21.001h17.503M12.25 26.253h17.503"
    />
  </Svg>
)
