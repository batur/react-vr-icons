import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgVirtualShopping = ({ width = 16, height = 16, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M30.916 19.887H17.083a1.645 1.645 0 0 0-1.574 1.55l-2.194 12.987a1.68 1.68 0 0 0 1.576 1.914h18.217a1.68 1.68 0 0 0 1.576-1.914l-2.193-12.987a1.645 1.645 0 0 0-1.575-1.55Z'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M19.454 23.047v-6.84a4.546 4.546 0 1 1 9.092 0v6.84'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='m46.939 44.877-1.81-.455M40.864 43.3c-.699-.175-1.398-.34-2.098-.491M13.447 41.977a63.04 63.04 0 0 1 21.117 0M7.081 43.325c.7-.176 1.399-.34 2.098-.492M1.06 44.88l1.813-.456M46.939 3.123l-1.81.455M40.864 4.7c-.699.175-1.398.34-2.098.492M13.447 6.023a63.036 63.036 0 0 0 21.117 0M7.081 4.675c.7.176 1.399.34 2.098.492M1.06 3.12l1.813.456'
    />
  </svg>
);
const Memo = memo(SvgVirtualShopping);
export default Memo;
