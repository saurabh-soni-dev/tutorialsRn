import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const DownArrow = (props: SvgProps) => (
  <Svg width={13} height={7} fill="none" {...props}>
    <Path fill="#000" d="M6.5 6.728.94.175l11.257.11L6.5 6.727Z" />
  </Svg>
);
export default DownArrow;
