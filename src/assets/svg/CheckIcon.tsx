import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const CheckIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      stroke="#ED753F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 8.832v.792a8.38 8.38 0 0 1-1.792 5.155 9.012 9.012 0 0 1-4.657 3.105 9.377 9.377 0 0 1-5.67-.181 8.94 8.94 0 0 1-4.432-3.394A8.341 8.341 0 0 1 1.02 9.05a8.427 8.427 0 0 1 2.14-5.032 9.078 9.078 0 0 1 4.859-2.806 9.367 9.367 0 0 1 5.646.535"
    />
    <Path
      stroke="#ED753F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m19 2.73-9.008 8.626-2.7-2.586"
    />
  </Svg>
);
export default CheckIcon;
