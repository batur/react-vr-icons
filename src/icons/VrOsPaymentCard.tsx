import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgVrOsPaymentCard = ({ width = 16, height = 16, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M35.625 14.163h-23.25c-.989 0-1.79.8-1.79 1.789v16.096c0 .988.801 1.789 1.79 1.789h23.25c.988 0 1.789-.8 1.789-1.789V15.952c0-.988-.8-1.789-1.789-1.789ZM10.586 18.47h26.828M10.586 23.34h26.828M15.104 29.46h6.26'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='m46.939 44.877-1.81-.455M40.864 43.3c-.699-.175-1.398-.34-2.098-.491M13.447 41.977a63.04 63.04 0 0 1 21.117 0M7.081 43.325c.7-.176 1.399-.34 2.098-.492M1.06 44.88l1.813-.456M46.939 3.123l-1.81.455M40.864 4.7c-.699.175-1.398.34-2.098.492M13.447 6.023a63.036 63.036 0 0 0 21.117 0M7.081 4.675c.7.176 1.399.34 2.098.492M1.06 3.12l1.813.456'
    />
  </svg>
);
const Memo = memo(SvgVrOsPaymentCard);
export default Memo;
