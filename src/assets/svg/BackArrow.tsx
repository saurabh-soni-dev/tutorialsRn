import * as React from 'react';
import Svg, {SvgProps, Circle, G, Path, Defs, ClipPath} from 'react-native-svg';
const BackArrow = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props}>
    <Circle cx={20} cy={20} r={20} fill="#fff" opacity={0.3} />
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M23.325 28h-.072a.935.935 0 0 1-.616-.294l-7.061-7.062a.887.887 0 0 1 .002-1.284l7.016-7.018A.974.974 0 0 1 23.27 12h.072a.911.911 0 0 1 .502.191c.13.108.243.235.365.352.158.164.346.314.428.533a.882.882 0 0 1-.204.952c-1.989 1.993-3.982 3.982-5.972 5.975 1.984 1.987 3.971 3.971 5.956 5.958a.885.885 0 0 1 .218.952c-.082.23-.282.385-.446.556-.133.127-.252.27-.402.378a.927.927 0 0 1-.461.153Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M28 28H12V12h16z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BackArrow;
