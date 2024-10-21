import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const PlayIcon = (props: SvgProps) => (
  <Svg width={15} height={17} fill="none" {...props}>
    <Path fill="#fff" d="M15 8.5 0 16.727V.273L15 8.5Z" />
  </Svg>
);
export default PlayIcon;
