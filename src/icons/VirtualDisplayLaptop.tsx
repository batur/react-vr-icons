import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgVirtualDisplayLaptop = ({ width = 16, height = 16, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <g stroke={color} strokeLinejoin='round' strokeWidth={strokeWidth} clipPath='url(#virtual-display-laptop_svg__a)'>
      <path
        strokeLinecap='round'
        d='M26.496 36.773a2.505 2.505 0 0 0 2.508-2.508v-6.523m-8.64-6.017H6.433a2.505 2.505 0 0 0-2.508 2.508v10.032a2.505 2.505 0 0 0 2.508 2.508M31.21 43.41a2.5 2.5 0 0 1-1.47 3.227c-.285.1-.586.167-.887.167H3.924a2.515 2.515 0 0 1-2.508-2.508c0-.3.05-.585.167-.869l1.873-5.016a2.516 2.516 0 0 1 2.34-1.622h21.469c1.037 0 1.973.652 2.34 1.622l1.606 5.016v-.017ZM13.956 43.296h5.016M35.283 1.195 24.016 6.844V20.4l11.267 5.649L46.55 20.4V6.844L35.283 1.195Z'
      />
      <path d='m24.005 7.039 11.317 5.84 11.262-5.84' />
      <path strokeLinecap='round' d='M35.269 26.05V12.877' />
    </g>
    <defs>
      <clipPath id='virtual-display-laptop_svg__a'>
        <path fill='#fff' d='M0 0h48v48H0z' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgVirtualDisplayLaptop);
export default Memo;
