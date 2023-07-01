import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgVirtualEnvironmentNight = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <g stroke={props.color} strokeLinecap='round' strokeWidth={props.strokeWidth} clipPath='url(#virtual-environment-night_svg__a)'>
      <path
        strokeLinejoin='round'
        d='M24 35.422a5.194 5.194 0 1 0 0-10.388 5.194 5.194 0 0 0 0 10.388ZM42.934 18.835a7.52 7.52 0 0 1-7.52-7.52c.01-.816.153-1.625.425-2.394a7.5 7.5 0 1 0 9.49 9.49 7.467 7.467 0 0 1-2.395.424v0ZM33.121 46.79a9.204 9.204 0 0 0-18.244 0M16.311 11.24v4.988M7.006 21.506v4.988M18.806 13.733h-4.988M9.5 24H4.512'
      />
      <path d='m46.698 39.478-1.791-.45M40.705 37.918a66.485 66.485 0 0 0-2.076-.487M34.453 36.609c-1.25-.211-2.501-.384-3.752-.52M13.558 36.609c1.25-.211 2.5-.384 3.752-.52M46.698 1.21l-1.793.45M40.64 2.791c-.693.174-1.385.337-2.077.487M34.442 4.082a62.373 62.373 0 0 1-20.895 0M7.294 2.773c.692.174 1.384.336 2.076.487M1.302 1.213l1.79.45M7.36 37.9a66.477 66.477 0 0 1 2.077-.487M1.302 39.48l1.793-.45' />
    </g>
    <defs>
      <clipPath id='virtual-environment-night_svg__a'>
        <path fill='#fff' d='M0 0h48v48H0z' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgVirtualEnvironmentNight);
export default Memo;
