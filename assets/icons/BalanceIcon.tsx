import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const BalanceIcon = (props: SvgProps) => (
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
      strokeWidth={1.57}
      d="m31.371 12.902 3.084 10.249h-6.097l3.013-10.249Z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeMiterlimit={22.926}
      strokeWidth={1.57}
      d="M35.505 23.15a4.099 4.099 0 1 1-8.198 0M14.505 23.15a4.099 4.099 0 1 1-8.198 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={22.926}
      strokeWidth={1.57}
      d="m10.565 12.923 3.084 10.248H7.55l3.014-10.248Z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={22.926}
      strokeWidth={1.57}
      d="M31.212 13.066h-6.55M17.268 13.066h-6.546M28.168 34.64l-14.404.05M20.966 34.632V16.647"
    />
    <Path
      stroke={props.color}
      strokeMiterlimit={22.926}
      strokeWidth={1.57}
      d="M20.966 16.084a3.017 3.017 0 0 0 3.016-3.018 3.017 3.017 0 1 0-3.016 3.018Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={22.926}
      strokeWidth={1.57}
      d="M20.966 7.307v2.462"
    />
  </Svg>
)
