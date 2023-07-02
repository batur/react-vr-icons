import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgVirtualEnvironmentDay = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <g stroke={color} strokeLinecap='round' strokeWidth={strokeWidth} clipPath='url(#virtual-environment-day_svg__a)'>
      <path
        strokeLinejoin='round'
        d='M24 35.422a5.194 5.194 0 1 0 0-10.388 5.194 5.194 0 0 0 0 10.388ZM33.121 46.79a9.204 9.204 0 0 0-18.244 0M37.92 19.945a3.717 3.717 0 1 0 0-7.434 3.717 3.717 0 0 0 0 7.434ZM37.92 9.55V8.521M42.643 11.506l.727-.727M44.6 24.228h1.027M42.643 20.95l.727.727M37.92 22.907v1.027M33.198 20.95l-.726.727M31.242 24.228h-1.027M33.198 11.506l-.726-.727M5.183 25.314h-.87a2.928 2.928 0 0 1-2.569-2.856 2.85 2.85 0 0 1 2.958-2.85 3.99 3.99 0 0 1 7.598 1.469 2.141 2.141 0 0 1 2.577 2.096 2.249 2.249 0 0 1-2.284 2.141h-7.41 0ZM24.905 15.958h-.636a2.143 2.143 0 0 1-1.88-2.09 2.087 2.087 0 0 1 2.244-2.085 2.92 2.92 0 0 1 5.56 1.074A1.567 1.567 0 0 1 24 14.391a1.589 1.589 0 0 1-1.671 1.567h-5.423 0Z'
      />
      <path d='m46.698 39.478-1.791-.45M40.705 37.918a66.485 66.485 0 0 0-2.076-.487M34.453 36.609c-1.25-.211-2.501-.384-3.752-.52M13.558 36.609c1.25-.211 2.5-.384 3.752-.52M46.698 1.21l-1.793.45M40.64 2.791c-.693.174-1.385.337-2.077.487M34.442 4.082a62.373 62.373 0 0 1-20.895 0M7.294 2.773c.692.174 1.384.336 2.076.487M1.302 1.213l1.79.45M7.36 37.9a66.477 66.477 0 0 1 2.077-.487M1.302 39.48l1.793-.45' />
    </g>
    <defs>
      <clipPath id='virtual-environment-day_svg__a'>
        <path fill='#fff' d='M0 0h48v48H0z' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgVirtualEnvironmentDay);
export default Memo;
