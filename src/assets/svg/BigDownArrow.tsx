import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const BigDownArrow = (props: SvgProps) => (
  <Svg width={17} height={11} fill="none" {...props}>
    <Path fill="#ED753F" d="M8.5 10.024.296.938l16.455.043L8.5 10.024Z" />
  </Svg>
);
export default BigDownArrow;
