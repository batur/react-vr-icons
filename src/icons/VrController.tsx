import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgVrController = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <g stroke={color} strokeWidth={strokeWidth} clipPath='url(#vr-controller_svg__a)'>
      <path
        strokeLinecap='round'
        d='M7.956 13.47C1.425 15.22 1.25 21.1 1.979 23.82c1.459 5.443 4.74 8.258 10.352 5.977 7.013-2.852 10.577-7.695 9.604-11.324-.972-3.628-5.815-7.191-13.98-5.004ZM39.836 2.267c6.531 1.75 6.706 7.63 5.977 10.352-1.459 5.442-4.74 8.257-10.352 5.976-7.013-2.851-10.577-7.695-9.604-11.323.972-3.629 5.815-7.192 13.98-5.005Z'
      />
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='m1.979 23.82 5.104 19.05c.405 1.511 2.122 4.292 5.75 3.32 3.63-.973 3.726-4.24 3.321-5.751l-1.458-5.443c1.272-3.17 3.801-7.401 5.788-11.043M45.813 12.619l-5.104 19.049c-.405 1.511-2.123 4.292-5.75 3.32-3.63-.972-3.726-4.24-3.321-5.75l1.458-5.444c-1.272-3.17-4.171-7.918-6.158-11.56'
      />
      <path
        strokeLinecap='round'
        d='m15.91 39.532 2.605-.698a2 2 0 0 0 1.414-2.45l-.424-1.582a2 2 0 0 0-2.446-1.424l-1.901.505M31.881 28.33l-2.604-.698a2 2 0 0 1-1.414-2.45l.42-1.567a2 2 0 0 1 2.46-1.412l1.882.524'
      />
      <path d='M33.88 9.25a2 2 0 1 1 0-4M33.88 9.25a2 2 0 1 0 0-4M38.924 14.737a2 2 0 1 1 0-4M38.924 14.737a2 2 0 0 0 0-4M11.891 18.31a2 2 0 0 1 3.987-.322' />
      <path d='M11.891 18.31a2 2 0 1 0 3.987-.322M6.826 23.77a2 2 0 0 1 3.987-.322M6.826 23.77a2 2 0 0 0 3.987-.322' />
    </g>
    <defs>
      <clipPath id='vr-controller_svg__a'>
        <path fill='#fff' d='M0 0h48v48H0z' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgVrController);
export default Memo;
