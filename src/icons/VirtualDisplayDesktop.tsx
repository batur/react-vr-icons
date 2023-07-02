import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgVirtualDisplayDesktop = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <g stroke={color} strokeLinejoin='round' strokeWidth={strokeWidth} clipPath='url(#virtual-display-desktop_svg__a)'>
      <path strokeLinecap='round' d='M35.353 1.109 24.085 6.757v13.556l11.268 5.649 11.267-5.649V6.757L35.353 1.109Z' />
      <path d='m24.075 6.952 11.317 5.84 11.262-5.84' />
      <path
        strokeLinecap='round'
        d='M35.338 25.962v-13.17M19.014 17.754H3.51c-1.196 0-2.245.97-2.245 2.245v18.315c0 1.195.97 2.244 2.245 2.244h28.137a2.244 2.244 0 0 0 2.245-2.244V31.08M8.921 46.892h17.324M1.346 35.533h32.466M14.877 40.425l-3.07 6.466M20.282 40.425l3.07 6.466'
      />
    </g>
    <defs>
      <clipPath id='virtual-display-desktop_svg__a'>
        <path fill='#fff' d='M0 0h48v48H0z' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgVirtualDisplayDesktop);
export default Memo;
