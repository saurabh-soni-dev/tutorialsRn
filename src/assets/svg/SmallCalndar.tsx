import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SmallCalendar = (props: SvgProps) => (
  <Svg width={12} height={12} fill="none" {...props}>
    <Path
      fill="#F76B10"
      d="M8.19 0c.254 0 .455.197.456.461v.45c1.653.13 2.745 1.256 2.747 2.983l.006 5.056c.003 1.883-1.18 3.041-3.077 3.044L3.69 12C1.806 12.003.608 10.816.606 8.928L.599 3.932C.597 2.193 1.65 1.07 3.303.918v-.45c-.001-.263.194-.462.455-.462.26 0 .456.197.457.461v.42l3.52-.005-.001-.42C7.733.2 7.928.001 8.189 0Zm.24 8.515h-.005a.5.5 0 0 0-.485.511c0 .276.22.503.493.51.277-.001.502-.23.502-.512a.506.506 0 0 0-.504-.509Zm-4.88 0a.512.512 0 0 0-.486.517.493.493 0 0 0 .51.48.493.493 0 0 0 .468-.517.49.49 0 0 0-.493-.48Zm2.44-.002a.513.513 0 0 0-.485.516.494.494 0 0 0 .51.48.494.494 0 0 0 .467-.518.49.49 0 0 0-.492-.478ZM3.546 6.357a.511.511 0 0 0-.484.516.493.493 0 0 0 .51.48.493.493 0 0 0 .467-.517.489.489 0 0 0-.493-.479Zm2.442-.021a.512.512 0 0 0-.486.516.493.493 0 0 0 .51.48.494.494 0 0 0 .468-.517.49.49 0 0 0-.492-.479Zm2.44.003a.497.497 0 0 0-.485.504v.006a.488.488 0 1 0 .978-.031.498.498 0 0 0-.493-.479Zm-.693-4.533-3.519.005.001.485a.451.451 0 0 1-.456.462.451.451 0 0 1-.456-.461v-.462c-1.156.116-1.795.795-1.794 2.096l.001.186 8.97-.012v-.21c-.026-1.29-.673-1.966-1.834-2.066v.461c0 .258-.2.463-.455.463a.451.451 0 0 1-.457-.462v-.485Z"
    />
  </Svg>
);
export default SmallCalendar;
