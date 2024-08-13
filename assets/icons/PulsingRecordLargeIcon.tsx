import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

export const PulsingRecordLargeIcon = (props: SvgProps) => (
  <Svg
    width={256}
    height={256}
    fill="none"
    {...props}
  >
    <Path
      fill="#4D95ED"
      d="M128.485 220.369c51.275 0 92.843-41.567 92.843-92.843s-41.568-92.843-92.843-92.843c-51.276 0-92.844 41.567-92.844 92.843s41.568 92.843 92.844 92.843Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={22.926}
      strokeWidth={5.699}
      d="M162.991 116.691v14.256c0 18.708-15.332 34.039-34.042 34.039h-.011m0 0c-18.721 0-34.042-15.309-34.042-34.039v-14.256m34.042 48.295v21.844m-18.26 0h36.52"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M128.938 66.14c13.456 0 24.456 11.01 24.456 24.454v40.355c0 13.444-11 24.454-24.456 24.454-13.457 0-24.457-10.999-24.457-24.454V90.594c0-13.456 11-24.454 24.457-24.454Zm-.003 6.709c-9.87 0-17.686 7.875-17.686 17.745v40.355c0 9.869 7.816 18.236 17.686 18.236 9.87 0 17.686-8.367 17.686-18.236V90.594c0-9.87-7.816-17.745-17.686-17.745Z"
      clipRule="evenodd"
    />
  </Svg>
)
