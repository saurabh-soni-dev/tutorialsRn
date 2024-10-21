import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const CancelIcon = (props: SvgProps) => (
  <Svg width={43} height={43} fill="none" {...props}>
    <Path
      fill="#027C8A"
      d="M21.5 0A21.5 21.5 0 1 0 43 21.5 21.481 21.481 0 0 0 21.5 0Zm10.75 29.218-3.032 3.032-7.718-7.718-7.719 7.718-3.031-3.032 7.718-7.718-7.718-7.719 3.031-3.031 7.719 7.718 7.718-7.718 3.032 3.031-7.718 7.719 7.718 7.718Z"
    />
  </Svg>
);
export default CancelIcon;
