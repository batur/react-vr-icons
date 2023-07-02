import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgFocalOfExpansion = ({ width = 16, height = 16, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M5.93 23.529h36.14M24.278 23.529l12.45 12.45M23.54 23.529l-12.45 12.45M31.233 35.98h5.496v-5.496M16.586 35.98H11.09v-5.496M9.817 27.415 5.93 23.53l3.887-3.887M38.183 27.415l3.887-3.886-3.887-3.887M27.796 38.688l-3.887 3.886-3.886-3.886M23.91 23.529v18.958M45.819 23.529h1.197M1.026 23.529h1.198'
    />
  </svg>
);
const Memo = memo(SvgFocalOfExpansion);
export default Memo;
