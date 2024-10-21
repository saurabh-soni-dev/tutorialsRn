import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const UnCheckCircle = (props: SvgProps) => (
  <Svg width={21} height={20} fill="none" {...props}>
    <Path
      fill="#fff"
      stroke="#027C8A"
      d="M20.5 10c0 5.224-4.454 9.5-10 9.5S.5 15.224.5 10 4.954.5 10.5.5s10 4.276 10 9.5Z"
    />
  </Svg>
);
export default UnCheckCircle;
