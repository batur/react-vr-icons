import * as React from 'react';
import { SVGProps, memo } from 'react';
const InfiniteCanvas1 = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M28.62 35.127a6.6 6.6 0 1 0 0-13.201 6.6 6.6 0 0 0 0 13.201Z'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='m25.547 22.684-5.45-9.811-7.319 14.333h9.375M38.738 38.515l7.485 7.484M9.262 9.485 1.777 2M9.262 38.515l-7.485 7.484M38.738 9.485 46.223 2M46.223 33.558V14.443M13.693 45.999H34.55M1.777 33.558V14.443M13.693 2H34.55M40.547 46h5.675v-5.676M7.453 2H1.778v5.675M7.453 46H1.778v-5.676M40.547 2h5.675v5.675'
    />
  </svg>
);
const Memo = memo(InfiniteCanvas1);
export default Memo;
