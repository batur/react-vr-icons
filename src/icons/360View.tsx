import * as React from 'react';
import { SVGProps, memo } from 'react';
const Svg360View = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeWidth={props.strokeWidth}
      d='M33.367 40.578c7.562-1.087 12.806-3.458 12.806-6.207 0-3.777-9.895-6.84-22.1-6.84-12.206 0-22.1 3.063-22.1 6.84 0 3.777 9.894 6.839 22.1 6.839l2.638-.054'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='m21.997 36.43 4.727 4.727-4.727 4.726M18.81 16.18v.857a5.137 5.137 0 1 0 10.276 0v-.857a5.138 5.138 0 0 0-10.275 0Z'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M18.81 17.037V6.76c0-2.837 2.3-5.137 5.138-5.137 2.237 0 4.433 1.43 5.138 3.425M35.648 6.619v10.56a4.995 4.995 0 0 0 4.995 4.995h.286a4.995 4.995 0 0 0 4.995-4.995V6.62a4.995 4.995 0 0 0-4.995-4.995h-.286a4.995 4.995 0 0 0-4.995 4.995ZM1.973 18.749c.705 1.995 2.9 3.425 5.137 3.425 2.838 0 5.138-2.3 5.138-5.137v-.857c0-2.837-2.3-5.137-5.138-5.137H6.94a4.453 4.453 0 0 0 4.453-4.453v-.685a4.281 4.281 0 0 0-7.707-2.569'
    />
  </svg>
);
const Memo = memo(Svg360View);
export default Memo;
