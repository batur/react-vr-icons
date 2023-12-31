import * as React from 'react';
import { SVGProps, memo } from 'react';
const ToolsArKit1 = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='m17.79 19.102 6.21 3.27 6.211-3.27M4.784 12.258l7.364 3.875M43.224 12.258l-7.364 3.875M24 2v8.727M24 22.408v7.481M24 37.755v8.565M4.784 28.33V36.4L12 40.195M12.148 32.495 4.785 36.37M35.852 32.495l7.364 3.875M12 8.328l-7.224 3.798v8.568M17.33 5.522 24 2.012l6.67 3.51M36 8.328l7.224 3.798v8.568M43.224 28.33v8.068L36 40.196M17.33 42.785l6.67 3.51 6.67-3.51'
    />
  </svg>
);
const Memo = memo(ToolsArKit1);
export default Memo;
