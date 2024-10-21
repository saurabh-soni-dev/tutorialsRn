import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const FireIcon = (props: SvgProps) => (
  <Svg width={5} height={6} fill="none" {...props}>
    <Path
      fill="url(#a)"
      d="M1.407 6c-.383-.832-.179-1.309.116-1.758.195-.297.332-.63.406-.98a1.178 1.178 0 0 1 .153.882c.18-.231.315-.498.395-.784.08-.287.104-.587.07-.883 1.014.74 1.448 2.337.864 3.522 3.106-1.831.772-4.57.366-4.88.136.309.161.831-.112 1.085C3.201.375 2.056 0 2.056 0c.136.944-.49 1.975-1.095 2.746a2.108 2.108 0 0 0-.233-.996c-.043.684-.544 1.241-.68 1.926-.184.928.138 1.607 1.36 2.324Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={2.5}
        x2={2.5}
        y1={0}
        y2={6}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FF7F45" />
        <Stop offset={0.37} stopColor="#ED753F" />
        <Stop offset={0.703} stopColor="#FD2301" />
        <Stop offset={1} stopColor="#FF0202" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default FireIcon;
