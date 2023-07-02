import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgVirtualEnvironmentRain = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      fill='#000'
      d='M7.175 13.745h.75a.75.75 0 0 0-.533-.718l-.217.718Zm33.65 0-.218-.718a.75.75 0 0 0-.532.718h.75Zm-.75 29.242a.75.75 0 0 0 1.5 0h-1.5Zm-33.65.008a.75.75 0 0 0 1.5 0h-1.5ZM1.814 9.373c0-.501.369-1.151 1.467-1.879 1.068-.709 2.664-1.376 4.703-1.948C12.052 4.406 17.714 3.69 24 3.69v-1.5c-6.382 0-12.188.725-24.42 1.912-2.112.592-3.876 1.311-5.128 2.142C1.228 7.055.314 8.097.314 9.373h1.5ZM24 3.69c6.285 0 11.948.724 24.024 1.856 2.039.572 3.635 1.24 4.703 1.948 1.098.728 1.467 1.378 1.467 1.879h1.5c0-1.276-.914-2.318-2.138-3.13-1.253-.83-3.024-1.549-5.127-2.14C36.187 2.914 30.382 2.19 24 2.19v1.5ZM7.392 13.027c-1.86-.563-3.303-1.206-4.264-1.88-.984-.69-1.314-1.3-1.314-1.774h-1.5c0 1.213.829 2.215 1.953 3.003 1.145.802 2.758 1.502 4.691 2.086l.434-1.435Zm38.794-3.654c0 .475-.33 1.085-1.314 1.774-.962.674-2.405 1.317-4.265 1.88l.435 1.435c1.933-.585 3.545-1.284 4.691-2.086 1.124-.788 1.953-1.79 1.953-3.003h-1.5Zm-6.111 4.372v29.242h1.5V13.745h-1.5Zm-33.65 0v29.25h1.5v-29.25h-1.5Z'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='M1.064 9.436v29.191c0 3.553 10.269 6.433 22.936 6.433s22.936-2.88 22.936-6.433V9.47'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='M46.936 23.762c0 1.704-2.31 3.257-6.098 4.426M13.575 3.676v5.76M34.425 3.676v5.76M1.064 23.762c0 1.707 2.317 3.262 6.117 4.432M18.325 32.724l-1.576 4.09M23.655 32.724l-1.577 4.09M28.985 32.724l-1.576 4.09'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M18.588 28.747h-1.507a5.075 5.075 0 0 1-4.454-4.951 4.94 4.94 0 0 1 5.127-4.94 6.918 6.918 0 0 1 13.172 2.546 3.711 3.711 0 0 1 4.467 3.633 3.758 3.758 0 0 1-3.96 3.712H18.587h.001Z'
    />
  </svg>
);
const Memo = memo(SvgVirtualEnvironmentRain);
export default Memo;
