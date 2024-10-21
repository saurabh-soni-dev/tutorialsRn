import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const PlayBackIcon = (props: SvgProps) => (
  <Svg width={19} height={20} fill="none" {...props}>
    <Path fill="#fff" d="m.528 10 13.854 8.66V1.34L.528 10Z" />
    <Path stroke="#fff" strokeWidth={2} d="M1 1.143v18.285" />
  </Svg>
);
export default PlayBackIcon;
