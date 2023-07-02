import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgVrOsHomepage = ({ width = 16, height = 16, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <g stroke={color} strokeLinecap='round' strokeWidth={strokeWidth} clipPath='url(#vr-os-homepage_svg__a)'>
      <path
        strokeLinejoin='round'
        d='M24 36.088a4.89 4.89 0 1 0 0-9.778 4.89 4.89 0 0 0 0 9.778ZM32.586 46.79a8.664 8.664 0 0 0-17.173 0'
      />
      <path d='m46.698 39.478-1.791-.45M40.706 37.918a66.551 66.551 0 0 0-2.077-.487M34.453 36.609c-1.25-.211-2.501-.384-3.752-.52M13.558 36.609c1.25-.211 2.5-.384 3.752-.52M46.698 1.21l-1.793.451' />
      <path
        strokeLinejoin='round'
        d='M12.332 14.108a2.99 2.99 0 1 0 0-5.98 2.99 2.99 0 0 0 0 5.98ZM12.313 31.095a2.99 2.99 0 1 0 0-5.98 2.99 2.99 0 0 0 0 5.98ZM18.156 22.602a2.99 2.99 0 1 0 0-5.982 2.99 2.99 0 0 0 0 5.982ZM6.47 22.602a2.99 2.99 0 1 0 0-5.981 2.99 2.99 0 0 0 0 5.98ZM24.019 14.108a2.99 2.99 0 1 0 0-5.98 2.99 2.99 0 0 0 0 5.98ZM29.844 22.602a2.99 2.99 0 1 0 0-5.981 2.99 2.99 0 0 0 0 5.98ZM35.706 14.108a2.99 2.99 0 1 0 0-5.98 2.99 2.99 0 0 0 0 5.98ZM35.687 31.095a2.99 2.99 0 1 0 0-5.98 2.99 2.99 0 0 0 0 5.98ZM41.53 22.602a2.99 2.99 0 1 0 0-5.981 2.99 2.99 0 0 0 0 5.98Z'
      />
      <path d='M40.64 2.791c-.693.174-1.385.337-2.077.487M34.442 4.082a62.373 62.373 0 0 1-20.895 0M7.294 2.773c.692.174 1.384.336 2.076.487M1.302 1.213l1.79.45M7.36 37.9a66.477 66.477 0 0 1 2.077-.487M1.302 39.48l1.793-.45' />
    </g>
    <defs>
      <clipPath id='vr-os-homepage_svg__a'>
        <path fill='#fff' d='M0 0h48v48H0z' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgVrOsHomepage);
export default Memo;
