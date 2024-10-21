import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const VoucherIcon = (props: SvgProps) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M5.159 10.933.916 15.176a1 1 0 0 0 0 1.414l1.81 1.81a2.918 2.918 0 0 1 4.041 4.042l1.81 1.809a1 1 0 0 0 1.414 0l4.242-4.243-1.768-1.768a1 1 0 0 1 0-1.414l.236-.236a1 1 0 0 1 1.414 0l1.768 1.768 8.368-8.367a1 1 0 0 0 0-1.415l-1.81-1.809A2.918 2.918 0 0 1 18.4 2.725L16.59.916a1 1 0 0 0-1.414 0L6.81 9.284l1.767 1.767a1 1 0 0 1 0 1.415l-.235.235a1 1 0 0 1-1.414 0l-1.768-1.768Zm4.007 4.007a1 1 0 0 1 0-1.414l.235-.236a1 1 0 0 1 1.415 0l1.06 1.061a1 1 0 0 1 0 1.414l-.236.236a1 1 0 0 1-1.414 0l-1.06-1.06Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default VoucherIcon;
