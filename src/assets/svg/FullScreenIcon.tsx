import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';
const FullScreenIcon = (props: SvgProps) => (
  <Svg width={36} height={36} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M10.5 21h-3v7.5H15v-3h-4.5V21Zm-3-6h3v-4.5H15v-3H7.5V15Zm18 10.5H21v3h7.5V21h-3v4.5ZM21 7.5v3h4.5V15h3V7.5H21Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h36v36H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default FullScreenIcon;
