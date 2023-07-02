import * as React from 'react';
import { SVGProps, memo } from 'react';
const VrSupportedMediaFile4 = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M24.023 34.877h15.904a1.5 1.5 0 0 0 1.5-1.5V20.25a1.45 1.45 0 0 0-.425-1.025l-5.677-5.678a1.45 1.45 0 0 0-1.025-.424H24.023c-.79 0-1.45.66-1.45 1.45v18.854c0 .79.66 1.45 1.45 1.45Z'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M33.427 20.553h-5.944a1.486 1.486 0 0 1-1.486-1.486v-5.944'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='m46.939 44.877-1.81-.455M40.864 43.3c-.699-.175-1.398-.34-2.098-.491M13.447 41.977a63.04 63.04 0 0 1 21.117 0M7.081 43.325c.7-.176 1.399-.34 2.098-.492M1.06 44.88l1.813-.456M46.939 3.123l-1.81.455M40.864 4.7c-.699.175-1.398.34-2.098.492M13.447 6.023a63.036 63.036 0 0 0 21.117 0M7.081 4.675c.7.176 1.399.34 2.098.492M1.06 3.12l1.813.456'
    />
  </svg>
);
const Memo = memo(VrSupportedMediaFile4);
export default Memo;
