import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgVrOsPaymentSubscription = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M21.146 27.415A3.438 3.438 0 0 0 24 28.75c1.75 0 3.161-1.06 3.161-2.379 0-1.32-1.412-2.363-3.161-2.363-1.75 0-3.161-1.06-3.161-2.379 0-1.32 1.412-2.378 3.16-2.378a3.407 3.407 0 0 1 2.855 1.35M24 28.75v1.58M24 17.67v1.58'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M32.785 16.141a11.788 11.788 0 0 0-20.574 7.86v.982M15.215 31.859A11.79 11.79 0 0 0 35.788 24v-.982'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='m32.841 25.965 2.947-2.947 2.948 2.947M15.159 22.035l-2.948 2.947-2.947-2.947'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeWidth={props.strokeWidth}
      d='m46.939 44.877-1.81-.455M40.864 43.3c-.699-.175-1.398-.34-2.098-.491M13.447 41.977a63.04 63.04 0 0 1 21.117 0M7.081 43.325c.7-.176 1.399-.34 2.098-.492M1.06 44.88l1.813-.456M46.939 3.123l-1.81.455M40.864 4.7c-.699.175-1.398.34-2.098.492M13.447 6.023a63.036 63.036 0 0 0 21.117 0M7.081 4.675c.7.176 1.399.34 2.098.492M1.06 3.12l1.813.456'
    />
  </svg>
);
const Memo = memo(SvgVrOsPaymentSubscription);
export default Memo;
