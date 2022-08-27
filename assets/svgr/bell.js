import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

const Bellicon = (props) => (
  <Svg
    width={29}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.5 22c.877 0 1.594-.72 1.594-1.6h-3.188c0 .88.717 1.6 1.594 1.6Zm5.181-4.8v-4.4c0-2.44-1.713-4.52-3.985-5.04V7.2c0-.68-.518-1.2-1.196-1.2-.678 0-1.196.52-1.196 1.2v.56c-2.271.52-3.985 2.6-3.985 5.04v4.4l-1.594 1.6v.8h13.55v-.8l-1.594-1.6Z"
      fill="#005099"
    />
    <Rect
      x={1.225}
      y={0.5}
      width={26.551}
      height={27}
      rx={13.275}
      stroke="#005099"
    />
  </Svg>
)

export default Bellicon
