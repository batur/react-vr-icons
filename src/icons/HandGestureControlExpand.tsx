import * as React from 'react';
import { SVGProps, memo } from 'react';
const HandGestureControlExpand = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M43.991 46.734v-7.291a10.397 10.397 0 0 0-8.688-10.255l-6.907-1.154V12.44a5.198 5.198 0 1 0-10.397 0v23.393l-4.068-2.041a5.677 5.677 0 0 0-6.086 9.51l4.208 3.433M38.174 7.083l5.817-5.817M37.952 17.94l6.04 6.04M9.984 7.24 4.009 1.267M10.024 17.973 4.01 23.98M9.237 1.266H4.01v5.227M4.01 18.752v5.228h5.227M38.763 23.98h5.228v-5.228M43.991 6.493V1.266h-5.228'
    />
  </svg>
);
const Memo = memo(HandGestureControlExpand);
export default Memo;
