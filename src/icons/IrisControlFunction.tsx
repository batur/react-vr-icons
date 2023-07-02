import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgIrisControlFunction = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M23.998 14.53c-5.656-.094-11.506 3.857-15.184 7.905a2.333 2.333 0 0 0 0 3.124c3.597 3.962 9.43 8.006 15.184 7.91 5.753.096 11.587-3.948 15.187-7.91a2.333 2.333 0 0 0 0-3.124c-3.681-4.048-9.531-7.999-15.187-7.905Z'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M24 22.978a3.523 3.523 0 1 1-7.045 0 3.523 3.523 0 0 1 7.045 0ZM37.843 9.941l7.275-7.275M37.565 37.781l7.553 7.553M10.354 10.139 2.882 2.667M10.395 37.822l-7.513 7.512M9.42 2.666H2.884v6.538M2.883 38.796v6.538H9.42M38.58 45.334h6.538v-6.538M45.118 9.204V2.666H38.58'
    />
  </svg>
);
const Memo = memo(SvgIrisControlFunction);
export default Memo;
