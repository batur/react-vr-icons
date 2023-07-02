import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgLifeLikeInterfaceVolume = ({ width = 16, height = 16, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <g stroke={color} strokeLinecap='round' strokeWidth={strokeWidth} clipPath='url(#life-like-interface-volume_svg__a)'>
      <path d='M10.39 33.76c-.892 1.215-1.39 2.57-1.39 4 0 5.247 6.716 9.5 15 9.5 8.284 0 15-4.253 15-9.5 0-1.43-.498-2.785-1.39-4' />
      <path
        strokeLinejoin='round'
        d='M7 27.181v-15.59a2 2 0 0 1 1.013-1.739l15-8.513a2 2 0 0 1 1.974 0l15 8.513A2 2 0 0 1 41 11.592v15.59a2 2 0 0 1-1.013 1.739l-15 8.513a2 2 0 0 1-1.974 0l-15-8.513A2 2 0 0 1 7 27.18ZM24 37.495v-17.42'
      />
      <path
        strokeLinejoin='round'
        d='M40.709 10.592 24 20.076 7.291 10.592M24 1.636v2.5M24 7.636v2.5M24 13.636v2.5M10.496 26.34l-3.02 1.678M13.496 24.637l3-1.703M22.496 19.488l-2.75 1.601M25.246 19.535l2.75 1.602M34.246 24.684l-3-1.703M37.246 26.387l3.278 1.822'
      />
    </g>
    <defs>
      <clipPath id='life-like-interface-volume_svg__a'>
        <path fill='#fff' d='M0 0h48v48H0z' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgLifeLikeInterfaceVolume);
export default Memo;
