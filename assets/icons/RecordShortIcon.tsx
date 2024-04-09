import * as React from "react"
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg"

export const RecordShortIcon = (props: SvgProps) => (
  <Svg
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        stroke="#0067E5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={22.926}
        strokeWidth={1.667}
        d="M28.04 17.689v3.366c0 4.418-3.618 8.038-8.038 8.038H20m0 0c-4.42 0-8.038-3.616-8.038-8.038V17.69M20 29.093v5.156m-4.312 0h8.623"
      />
      <Path
        fill="#0067E5"
        fillRule="evenodd"
        d="M20 5.75c3.097 0 5.644 2.475 5.77 5.544h-.004v2.061h-1.53v-2.06C24.114 9.07 22.252 7.283 20 7.283c-2.33 0-4.24 1.937-4.24 4.244V12.265a.767.767 0 0 1-1.534 0v-.736c0-3.174 2.596-5.779 5.774-5.779Zm5.008 9.346c.422 0 .766.344.766.764v5.197c0 3.15-2.597 5.772-5.774 5.772-3.178 0-5.774-2.595-5.774-5.772v-6.286h1.533v6.286a4.257 4.257 0 0 0 4.24 4.24 4.257 4.257 0 0 0 4.242-4.24V15.86c0-.42.344-.764.767-.764Z"
        clipRule="evenodd"
      />
      <Path
        stroke="#0067E5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={22.926}
        strokeWidth={1.167}
        d="m13.19 16.27 1.8-1.8 1.803 1.803M23.193 11.865l1.8 1.798 1.8-1.802"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h40v40H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
