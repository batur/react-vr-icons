import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgWindowWorkspace2 = ({ width = 16, height = 16, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M24 32.272a6.03 6.03 0 1 0 0-12.06 6.03 6.03 0 0 0 0 12.06ZM34.72 44.92a10.816 10.816 0 0 0-21.44 0'
    />
    <path stroke={color} strokeLinecap='round' strokeWidth={strokeWidth} d='m46.749 3.08-1.798.452M46.749 36.567l-1.795-.452' />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='m9.992 12.09-8.74-2.433v19.657l8.74-2.432V12.089ZM32.836 26.372h.96V12.6h-19.59v13.772h.957M38.008 12.09l8.74-2.433v19.657l-8.74-2.432V12.089Z'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='M40.676 4.665c-.693.174-1.387.337-2.08.488M34.465 5.959a62.513 62.513 0 0 1-20.941 0M7.257 4.646c.694.175 1.387.337 2.08.489M1.251 3.083l1.795.451M40.743 35.003a66.496 66.496 0 0 0-2.08-.488M34.476 33.69a63.57 63.57 0 0 0-4.543-.6M13.535 33.69a63.624 63.624 0 0 1 4.542-.6M7.324 34.984a66.784 66.784 0 0 1 2.08-.488M1.251 36.57l1.798-.453'
    />
  </svg>
);
const Memo = memo(SvgWindowWorkspace2);
export default Memo;
