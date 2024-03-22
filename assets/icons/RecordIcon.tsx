import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"

export const RecordIcon = (props: SvgProps) => (
  <Svg
    width={64}
    height={64}
    fill="none"
    {...props}
  >
    <Circle cx={32} cy={32} r={32} fill="#0067E5" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={22.926}
      strokeWidth={2.973}
      d="M43.964 28.472v4.913c0 6.449-5.284 11.732-11.733 11.732h-.004m0 0c-6.452 0-11.733-5.276-11.733-11.732v-4.913m11.733 16.645v7.53m-6.293 0H38.52"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M32.227 11.048c4.638 0 8.43 3.795 8.43 8.429v13.909c0 4.634-3.792 8.428-8.43 8.428s-8.43-3.79-8.43-8.428v-13.91c0-4.637 3.792-8.428 8.43-8.428Zm0 2.313c-3.403 0-6.096 2.714-6.096 6.116v13.909c0 3.402 2.693 6.285 6.095 6.285 3.402 0 6.096-2.883 6.096-6.285V19.477c0-3.402-2.694-6.116-6.096-6.116Z"
      clipRule="evenodd"
    />
  </Svg>
)
