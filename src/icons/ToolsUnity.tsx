import * as React from 'react';
import { SVGProps, memo } from 'react';
const ToolsUnity = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M4.782 10.195 22 1.586v7.827l-7.826 3.913L24 18.239l9.826-4.913L26 9.413V1.586l17.217 8.61a3.5 3.5 0 0 1 1.935 3.13v20.803l-7-4.041v-11.1L27.5 24.324v13.609l8.695-4.348 7.254 4.188a3.487 3.487 0 0 1-.232.127l-17.652 8.826a3.5 3.5 0 0 1-3.13 0L4.782 37.891a3.47 3.47 0 0 1-.232-.127l7.254-4.188 8.696 4.348V24.315L9.847 18.989v11.097l-7 4.042V13.326a3.5 3.5 0 0 1 1.935-3.13Z'
    />
  </svg>
);
const Memo = memo(ToolsUnity);
export default Memo;
