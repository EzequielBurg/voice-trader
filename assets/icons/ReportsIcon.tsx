import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const ReportsIcon = (props: SvgProps) => (
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
      strokeWidth={1.4}
      d="M19.629 34.263h-9.127V6.483h21v14.582M14.001 10.502h14.004M14.001 14.003h14.004M14.001 17.505h14.004M14.001 21.006h14.004M14.001 24.508h7.004"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M27.125 22.75a6.122 6.122 0 0 1 6.125 6.125A6.122 6.122 0 0 1 27.125 35 6.124 6.124 0 0 1 21 28.875a6.124 6.124 0 0 1 6.125-6.125Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FEFEFE"
      fillRule="evenodd"
      d="M26.272 33.25v-6.163h1.706v6.163h-1.706Zm.853-6.879a.811.811 0 0 1-.617-.274.944.944 0 0 1-.258-.666.94.94 0 0 1 .258-.66.818.818 0 0 1 .617-.271c.24 0 .45.09.62.271.17.185.255.403.255.66 0 .26-.085.484-.255.666a.813.813 0 0 1-.62.274Z"
      clipRule="evenodd"
    />
  </Svg>
)
