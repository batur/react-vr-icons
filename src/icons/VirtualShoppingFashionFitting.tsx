import * as React from 'react';
import { SVGProps, memo } from 'react';
const VirtualShoppingFashionFitting = ({
  width = 24,
  height = 24,
  color = '#000',
  strokeWidth = 1.5,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M19.962 21.476v9.592a.505.505 0 0 0 .505.505h7.068a.505.505 0 0 0 .505-.505v-9.592M39.808 21.476v9.592a.505.505 0 0 0 .505.505h6.363M8.194 21.476v9.592a.505.505 0 0 1-.505.505H1.326'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M28.04 24.505h2.524A.505.505 0 0 0 31.07 24v-3.534a4.039 4.039 0 0 0-4.039-4.039h-1.01a2.02 2.02 0 0 1-4.038 0h-1.01a4.039 4.039 0 0 0-4.04 4.039V24a.505.505 0 0 0 .506.505h2.524M46.876 24.427h-1.01a2.02 2.02 0 0 1-4.038 0h-1.01a4.039 4.039 0 0 0-4.039 4.039V24a.505.505 0 0 0 .505.505h2.524M1.126 24.427h1.01a2.02 2.02 0 1 0 4.038 0h1.01a4.039 4.039 0 0 1 4.039 4.039V24a.505.505 0 0 1-.505.505H8.194M40.095 23.066h6.2M40.095 26.524h6.2'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='m8.112 23.588-2.285 2.284-2.285-2.284-2.284 2.284'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='m46.939 44.877-1.81-.455M40.864 43.3c-.699-.175-1.398-.34-2.098-.491M13.447 41.977a63.04 63.04 0 0 1 21.117 0M7.081 43.325c.7-.176 1.399-.34 2.098-.492M1.06 44.88l1.813-.456M46.939 3.123l-1.81.455M40.864 4.7c-.699.175-1.398.34-2.098.492M13.447 6.023a63.036 63.036 0 0 0 21.117 0M7.081 4.675c.7.176 1.399.34 2.098.492M1.06 3.12l1.813.456'
    />
  </svg>
);
const Memo = memo(VirtualShoppingFashionFitting);
export default Memo;
