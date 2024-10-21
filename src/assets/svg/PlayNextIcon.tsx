import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const PlayNextIcon = (props: SvgProps) => (
  <Svg width={19} height={20} fill="none" {...props}>
    <Path fill="#fff" d="M18.472 10 4.618 18.66V1.34L18.472 10Z" />
    <Path
      stroke="#fff"
      strokeWidth={2}
      d="M0-1h18.286"
      transform="matrix(0 1 1 0 19 1.143)"
    />
  </Svg>
);
export default PlayNextIcon;
