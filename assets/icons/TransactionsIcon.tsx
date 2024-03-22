import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const TransactionsIcon = (props: SvgProps) => (
    <Svg
    width={42}
    height={42}
    fill="none"
    {...props}
    >
    <Path
        stroke={props.color}
        strokeMiterlimit={22.926}
        strokeWidth={1.57}
        d="M15.397 35.691a2.577 2.577 0 0 0 2.576-2.577 2.577 2.577 0 1 0-2.576 2.577ZM27.425 35.691a2.577 2.577 0 0 0 2.576-2.577 2.577 2.577 0 1 0-2.576 2.577Z"
    />
    <Path
    stroke={props.color}
    strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={22.926}
        strokeWidth={1.57}
        d="M18.417 20.228 14.903 27.1h13.382M7.667 8.2H11.8l5.004 12.028h12.886l4.649-9.14M22.103 6.308l4.948.003m0 0v4.956m0-4.956-4.553 4.454M25.087 16.71H20.14m0 0v-4.957m0 4.957 4.554-4.455"
    />
    </Svg>
)
