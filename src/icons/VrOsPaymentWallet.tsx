import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgVrOsPaymentWallet = ({ width = 16, height = 16, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='m15.508 30.076 7.85 4.582a2.242 2.242 0 0 0 3.373-1.936V22.388a4.48 4.48 0 0 0-2.225-3.872l-7.851-4.587a2.24 2.24 0 0 0-3.372 1.935v10.341a4.48 4.48 0 0 0 2.225 3.872v0Z'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M15.53 13.644h14.566a2.242 2.242 0 0 1 2.241 2.242v12.199a2.242 2.242 0 0 1-2.242 2.241v0'
    />
    <path stroke={color} strokeWidth={strokeWidth} d='M22.176 26.894a.712.712 0 1 1 0-1.423M22.176 26.894a.712.712 0 0 0 0-1.423' />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='m46.939 44.877-1.81-.455M40.864 43.3c-.699-.175-1.398-.34-2.098-.491M13.447 41.977a63.04 63.04 0 0 1 21.117 0M7.081 43.325c.7-.176 1.399-.34 2.098-.492M1.06 44.88l1.813-.456M46.939 3.123l-1.81.455M40.864 4.7c-.699.175-1.398.34-2.098.492M13.447 6.023a63.036 63.036 0 0 0 21.117 0M7.081 4.675c.7.176 1.399.34 2.098.492M1.06 3.12l1.813.456'
    />
  </svg>
);
const Memo = memo(SvgVrOsPaymentWallet);
export default Memo;
