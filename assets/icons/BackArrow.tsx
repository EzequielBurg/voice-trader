import * as React from 'react'
import Svg, { Path, SvgProps } from "react-native-svg"


export const BackArrow = (props:SvgProps) => (
  <Svg
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={22.926}
      strokeWidth={1.91}
      d="m19.857 26.316-6.524-6.446m0 0 6.457-6.537m-6.457 6.537 15 .06"
    />
  </Svg>
)
