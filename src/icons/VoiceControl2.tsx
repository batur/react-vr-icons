import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgVoiceControl2 = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <g stroke={color} strokeLinecap='round' strokeWidth={strokeWidth} clipPath='url(#voice-control-2_svg__a)'>
      <path d='M44.757 22.002a10.464 10.464 0 0 0 2.138-6.344v-1.324A12.254 12.254 0 0 0 35.726 2.128L32.025 1.8a90.635 90.635 0 0 0-24.05 0l-3.707.33a12.248 12.248 0 0 0-11.243 12.2v1.305A10.5 10.5 0 0 0 8.62 25.7a11.666 11.666 0 0 0 11.063-2.463l2.102-1.867a3.345 3.345 0 0 1 4.436-.007l2.157 1.906c.356.314.728.604 1.114.87' />
      <path d='m34.705 7.76-3.378-.3a82.718 82.718 0 0 0-14.648 0l-3.383.301' />
      <path
        strokeLinejoin='round'
        d='M36.7 22.002v24.555M41.798 27.352v13.853M31.602 28.929v10.7M46.895 25.136v18.286M26.505 26.518V42.04M21.407 29.948v8.661'
      />
    </g>
    <defs>
      <clipPath id='voice-control-2_svg__a'>
        <path fill='#fff' d='M0 0h48v48H0z' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgVoiceControl2);
export default Memo;
