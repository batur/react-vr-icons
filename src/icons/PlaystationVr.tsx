import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgPlaystationVr = ({ width = 16, height = 16, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeWidth={strokeWidth}
      d='M5.405 39.775c3.605 2.044 9.747 4.47 18.595 4.47 8.848 0 14.99-2.426 18.595-4.47 2.678-1.519 3.905-4.503 3.905-7.581 0-5.836-4.32-10.77-10.104-11.541l-2.084-.278a78.022 78.022 0 0 0-20.624 0l-2.084.278A11.643 11.643 0 0 0 1.5 32.193c0 3.079 1.227 6.063 3.905 7.582Z'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='M2.532 27.277C1.401 14.317 11.757 6 24 6s22.6 8.317 21.468 21.277'
    />
    <path
      stroke={color}
      strokeWidth={strokeWidth}
      d='M12.607 25.188a.5.5 0 0 1 0-1M12.607 25.188a.5.5 0 1 0 0-1M35.393 25.188a.5.5 0 1 1 0-1M35.393 25.188a.5.5 0 0 0 0-1M32.393 40.136a.5.5 0 1 1 0-1M32.393 40.136a.5.5 0 0 0 0-1M15.607 40.136a.5.5 0 0 1 0-1M15.607 40.136a.5.5 0 1 0 0-1'
    />
  </svg>
);
const Memo = memo(SvgPlaystationVr);
export default Memo;
