import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgVrOsSearch = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <g stroke={color} strokeLinecap='round' strokeWidth={strokeWidth} clipPath='url(#vr-os-search_svg__a)'>
      <path
        strokeLinejoin='round'
        d='M5.137 15.387a5.462 5.462 0 0 0 5.462 5.462H37.4a5.462 5.462 0 0 0 0-10.924H10.599a5.462 5.462 0 0 0-5.462 5.462Z'
      />
      <path
        strokeLinejoin='round'
        d='M11.46 17.39a2.33 2.33 0 1 0 0-4.66 2.33 2.33 0 0 0 0 4.66ZM13.108 24.71l1.549 1.548M18.741 12.813v5.148M24 35.795a4.89 4.89 0 1 0 0-9.779 4.89 4.89 0 0 0 0 9.779ZM32.586 46.497a8.663 8.663 0 0 0-17.174 0'
      />
      <path d='m46.698 39.478-1.791-.45M40.705 37.918a66.485 66.485 0 0 0-2.076-.487M34.453 36.609c-1.25-.211-2.501-.384-3.752-.52M13.558 36.609c1.25-.211 2.5-.384 3.752-.52M46.698 1.21l-1.793.45M40.64 2.791c-.693.174-1.385.337-2.077.487M34.442 4.082a62.373 62.373 0 0 1-20.895 0M7.294 2.773c.692.174 1.384.336 2.076.487M1.302 1.213l1.79.45M7.36 37.9a66.477 66.477 0 0 1 2.077-.487M1.302 39.48l1.793-.45' />
    </g>
    <defs>
      <clipPath id='vr-os-search_svg__a'>
        <path fill='#fff' d='M0 0h48v48H0z' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgVrOsSearch);
export default Memo;
