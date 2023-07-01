import * as React from 'react';
import { SVGProps, memo } from 'react';
const Svg3DVideoRecording = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M1.714 23.884V5.027a3.429 3.429 0 0 1 3.429-3.429h25.714a3.428 3.428 0 0 1 3.429 3.429v5.143l9.668-4.286a1.714 1.714 0 0 1 2.332 1.612v19.062a1.713 1.713 0 0 1-2.332 1.612l-9.668-4.286v5.143a3.429 3.429 0 0 1-3.429 3.429M1.714 43.278c.575 1.625 2.363 2.79 4.185 2.79a4.184 4.184 0 0 0 4.184-4.185v-.697A4.184 4.184 0 0 0 5.9 37h-.14a3.626 3.626 0 0 0 3.627-3.626v-.558a3.487 3.487 0 0 0-6.277-2.092M15.631 29.33v16.738H18a6 6 0 0 0 6-6V35.33a6 6 0 0 0-6-6h-2.369Z'
    />
  </svg>
);
const Memo = memo(Svg3DVideoRecording);
export default Memo;
