import * as React from 'react';
import { SVGProps, memo } from 'react';
const ArViewSeeThroughEye = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M23.998 24.512c-4.472-.075-9.098 3.05-12.006 6.25a1.845 1.845 0 0 0 0 2.47c2.844 3.134 7.457 6.332 12.006 6.256 4.55.076 9.243-3.122 12.01-6.255a1.845 1.845 0 0 0 0-2.47c-2.912-3.201-7.537-6.326-12.01-6.251Z'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M27.075 24a3.077 3.077 0 1 1-6.153 0 3.077 3.077 0 0 1 6.153 0ZM23.999 2v6.18M23.999 39.82V46M11.044 32.424l-5.35 3.09M11.044 15.577l-5.35-3.09M37.649 32.424 43 35.514M37.649 15.577 43 12.487M19 4.632 24 2l5 2.632M38 38.632 43 36v-6M10 9.368 5 12v6M10 38.632 5 36v-6M19 43.368 24 46l5-2.632M38 9.368 43 12v6'
    />
  </svg>
);
const Memo = memo(ArViewSeeThroughEye);
export default Memo;
