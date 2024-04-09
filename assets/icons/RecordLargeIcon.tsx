import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

export const RecordLargeIcon = (props: SvgProps) => (
  <Svg
    width={185}
    height={185}
    fill="none"
    {...props}
  >
    <Path
      fill="#4D95ED"
      d="M92.5 185c51.086 0 92.5-41.414 92.5-92.5S143.586 0 92.5 0 0 41.414 0 92.5 41.414 185 92.5 185Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={22.926}
      strokeWidth={6.876}
      d="M126.879 81.705v14.203c0 18.639-15.276 33.913-33.916 33.913h-.011m0 0c-18.652 0-33.916-15.252-33.916-33.913V81.705m33.916 48.116v21.763m-18.193 0h36.386"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M92.951 31.34c13.407 0 24.367 10.97 24.367 24.364V95.91c0 13.394-10.96 24.364-24.367 24.364-13.406 0-24.366-10.959-24.366-24.364V55.704c0-13.406 10.96-24.364 24.367-24.364Zm-.002 6.685c-9.834 0-17.62 7.846-17.62 17.679V95.91c0 9.833 7.786 18.168 17.62 18.168 9.834 0 17.62-8.335 17.62-18.168V55.704c0-9.833-7.786-17.68-17.62-17.68Z"
      clipRule="evenodd"
    />
  </Svg>
)
