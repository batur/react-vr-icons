import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgSelfPlayingArea = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path stroke={color} strokeLinecap='round' strokeLinejoin='round' strokeWidth={strokeWidth} d='M24 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z' />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M31 26a7 7 0 1 0-14 0v3h3l1 8h6l1-8h3v-3Z'
    />
    <path
      fill='#000'
      d='M7.862 13.1h.75a.75.75 0 0 0-.533-.718l-.217.717Zm32.276 0-.217-.718a.75.75 0 0 0-.533.717h.75Zm-.75 28.048a.75.75 0 0 0 1.5 0h-1.5Zm-32.276.008a.75.75 0 0 0 1.5 0h-1.5ZM2.75 8.906c0-.465.343-1.08 1.393-1.777 1.022-.677 2.549-1.324 4.503-1.864C12.545 4.172 17.973 3.486 24 3.486v-1.5c-6.123 0-11.695.695-15.759 1.835-2.027.568-3.721 1.26-4.927 2.058-1.176.78-2.064 1.788-2.064 3.027h1.5ZM24 3.486c6.027 0 11.455.686 15.354 1.78 1.954.547 3.481 1.186 4.503 1.863 1.05.697 1.393 1.312 1.393 1.777h1.5c0-1.24-.888-2.247-2.064-3.027-1.206-.799-2.9-1.49-4.927-2.058C35.695 2.681 30.123 1.986 24 1.986v1.5ZM8.08 12.382c-1.783-.54-3.244-1.155-4.083-1.8-.94-.658-1.247-1.236-1.247-1.676h-1.5c0 1.179.805 2.148 1.886 2.905 1.103.773 2.653 1.445 4.509 2.006l.434-1.435Zm37.17-3.476c0 .44-.307 1.018-1.247 1.677-.92.644-2.3 1.26-4.082 1.799l.434 1.435c1.856-.561 3.406-1.233 4.509-2.006 1.08-.757 1.886-1.726 1.886-2.905h-1.5Zm-5.862 4.193v28.05h1.5v-28.05h-1.5Zm-32.276 0v28.057h1.5V13.1h-1.5Z'
    />
    <path stroke={color} strokeLinecap='round' strokeWidth={strokeWidth} d='M2 8.967v28c0 3.408 9.85 6.17 22 6.17s22-2.762 22-6.17V9' />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='M46 22.708c0 1.635-2.215 3.125-5.849 4.246M11.875 31.96c-1.47.273-2.815.593-4.008.954M36.125 31.96c1.47.273 2.815.593 4.008.954M14 3.443v10M34 3.443v10M2 22.708c0 1.638 2.222 3.13 5.868 4.252'
    />
  </svg>
);
const Memo = memo(SvgSelfPlayingArea);
export default Memo;
