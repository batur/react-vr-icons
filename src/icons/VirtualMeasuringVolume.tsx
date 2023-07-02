import * as React from 'react';
import { SVGProps, memo } from 'react';
const VirtualMeasuringVolume = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='m23.986 9.857-12.823 6.429v15.428l12.823 6.429 12.824-6.429V24.286L23.986 9.857Z'
    />
    <path stroke={color} strokeLinejoin='round' strokeWidth={strokeWidth} d='m11.152 24.508 12.88 6.646 12.824-6.646' />
    <path
      stroke={color}
      strokeDasharray='3 3'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='m11.152 22.725 12.88 6.646 12.824-6.646'
    />
    <path
      stroke={color}
      strokeDasharray='3 3'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='m36.848 23.154-12.88-6.646-12.824 6.646'
    />
    <path stroke={color} strokeLinecap='round' strokeLinejoin='round' strokeWidth={strokeWidth} d='M23.97 38.143v-14.99' />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='m46.939 44.877-1.81-.455M40.864 43.3c-.699-.175-1.398-.34-2.098-.491M13.447 41.977a63.04 63.04 0 0 1 21.117 0M7.081 43.325c.7-.176 1.399-.34 2.098-.492M1.06 44.88l1.813-.456M46.939 3.123l-1.81.455M40.864 4.7c-.699.175-1.398.34-2.098.492M13.447 6.023a63.036 63.036 0 0 0 21.117 0M7.081 4.675c.7.176 1.399.34 2.098.492M1.06 3.12l1.813.456'
    />
  </svg>
);
const Memo = memo(VirtualMeasuringVolume);
export default Memo;
