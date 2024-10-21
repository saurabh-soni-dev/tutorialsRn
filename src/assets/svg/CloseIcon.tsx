import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Close = (props: SvgProps) => (
  <Svg width={14} height={14} {...props}>
    <Path
      data-name="Icon ionic-ios-close"
      d="m8.304 6.711 4.8-4.8A1.124 1.124 0 0 0 11.515.327l-4.8 4.8-4.8-4.8A1.124 1.124 0 1 0 .331 1.911l4.8 4.8-4.8 4.8a1.124 1.124 0 0 0 1.584 1.584l4.8-4.8 4.8 4.8a1.124 1.124 0 1 0 1.584-1.584Z"
      fill="#000"
      {...props}
    />
  </Svg>
);

export default Close;
