import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';
const HideEye = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <G
      stroke="#8E8EA9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.392}
      clipPath="url(#a)">
      <Path d="M8.25 3.533a7.6 7.6 0 0 1 1.75-.2c5.834 0 9.167 6.667 9.167 6.667a15.416 15.416 0 0 1-1.8 2.658m-5.6-.891a2.497 2.497 0 0 1-3.597.063 2.5 2.5 0 0 1 .063-3.597m6.717 6.717A8.392 8.392 0 0 1 10 16.667C4.167 16.667.833 10 .833 10A15.375 15.375 0 0 1 5.05 5.05l9.9 9.9ZM.833.833l18.334 18.334" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default HideEye;
