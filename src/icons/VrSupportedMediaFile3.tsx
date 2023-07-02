import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgVrSupportedMediaFile3 = ({ width = 16, height = 16, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M19.443 32.055a1.17 1.17 0 0 1-1.143 0 1.066 1.066 0 0 1-.412-.402c-.1-.171-.155-.37-.159-.573V16.92c.004-.203.059-.402.16-.573.1-.172.243-.311.411-.402a1.17 1.17 0 0 1 1.143 0l12.587 7.079c.173.087.319.225.421.398a1.142 1.142 0 0 1 0 1.16 1.03 1.03 0 0 1-.421.398l-12.587 7.075Z'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='m46.939 44.877-1.81-.455M40.864 43.3c-.699-.175-1.398-.34-2.098-.491M13.447 41.977a63.04 63.04 0 0 1 21.117 0M7.081 43.325c.7-.176 1.399-.34 2.098-.492M1.06 44.88l1.813-.456M46.939 3.123l-1.81.455M40.864 4.7c-.699.175-1.398.34-2.098.492M13.447 6.023a63.036 63.036 0 0 0 21.117 0M7.081 4.675c.7.176 1.399.34 2.098.492M1.06 3.12l1.813.456'
    />
  </svg>
);
const Memo = memo(SvgVrSupportedMediaFile3);
export default Memo;
