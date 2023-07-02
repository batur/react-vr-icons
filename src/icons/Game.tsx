import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgGame = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M7.645 8.244C10.704 7.627 17.542 6.938 24 6.938s13.297.69 24.355 1.306c.753.152 1.38.643 1.713 1.336 2.61 5.431 4.291 24.489 4.215 21.232-.081 5.075-3.563 7.989-7.958 7.959-5.482-.038-7.06-7.966-8.225-10.656H17.9c-1.245 2.69-2.742 10.618-8.225 10.656-4.395.03-7.877-2.884-7.958-7.959C1.64 26.07 3.32 15.012 5.932 9.58a2.425 2.425 0 0 1 1.713-1.336ZM14 21v-8M10 17h8'
    />
    <path
      stroke={color}
      strokeWidth={strokeWidth}
      d='M38.002 17.298a2 2 0 1 1 0-4M38.002 17.298a2 2 0 0 0 0-4M32.003 22.8a2 2 0 1 1 0-4M32.003 22.8a2 2 0 1 0 0-4'
    />
  </svg>
);
const Memo = memo(SvgGame);
export default Memo;
