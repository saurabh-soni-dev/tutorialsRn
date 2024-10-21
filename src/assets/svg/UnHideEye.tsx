import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const UnHideEye = (props: SvgProps) => (
  <Svg width={20} height={16} fill="none" {...props}>
    <Path
      stroke="#8E8EA9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.392}
      d="M8.25 1.533a7.6 7.6 0 0 1 1.75-.2C15.833 1.333 19.166 8 19.166 8a15.413 15.413 0 0 1-1.8 2.658m-5.6-.891a2.497 2.497 0 0 1-3.596.063 2.5 2.5 0 0 1 .063-3.597m6.717 6.717A8.392 8.392 0 0 1 10 14.667C4.166 14.667.833 8 .833 8A15.375 15.375 0 0 1 5.05 3.05l9.9 9.9Z"
    />
  </Svg>
);
export default UnHideEye;
