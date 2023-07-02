import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgToolsArKit = ({ width = 16, height = 16, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <g stroke={color} strokeLinejoin='round' strokeWidth={strokeWidth} clipPath='url(#tools-AR-kit_svg__a)'>
      <path
        strokeLinecap='round'
        d='m19.211 16.194 3.979-.614 1.053-1.687M26.345 17.148l-3.156-1.569M10.88 17.479l4.717-.728M14.64 11.329l3.662 1.82M22.464 20.165 21 22.511M29.646 18.79l3.453 1.716M32.413 15.219l4.716-.728M27.01 9.46l-1.208 1.934M14.421 19.24l-3.596-1.788 1.194-1.913M18.918 10.672l-4.273.66-1.052 1.685M17.626 20.833l3.386 1.684 4.622-.713M28.958 21.231l4.272-.659 1.02-1.635M33.755 12.814l3.387 1.683-1.17 1.875M22.332 10.145l4.622-.713 3.597 1.788'
      />
      <path d='M.707 33V16.643a2 2 0 0 1 1.013-1.74L22.948 2.854a2 2 0 0 1 1.974 0L46.15 14.902a2 2 0 0 1 1.013 1.74V33a2 2 0 0 1-1.013 1.739L24.922 46.788a2 2 0 0 1-1.974 0L1.72 34.74A2 2 0 0 1 .707 33Z' />
      <path d='m.707 28.991 22.24 12.623a2 2 0 0 0 1.975 0l22.24-12.623M23.935 46.982V30.31' />
      <path d='m.707 23.133 22.24 12.623a2 2 0 0 0 1.975 0l22.24-12.623' />
      <path d='m.707 17.143 22.24 12.622a2 2 0 0 0 1.975 0l22.24-12.622' />
    </g>
    <defs>
      <clipPath id='tools-AR-kit_svg__a'>
        <path fill='#fff' d='M0 0h48v48H0z' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgToolsArKit);
export default Memo;
