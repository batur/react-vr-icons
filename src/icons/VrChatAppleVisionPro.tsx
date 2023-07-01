import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgVrChatAppleVisionPro = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <g stroke={props.color} strokeWidth={props.strokeWidth} clipPath='url(#vr-chat-apple-vision-pro_svg__a)'>
      <path d='M11.284 21.97v.827a6.649 6.649 0 0 0 4.76 6.375 7.388 7.388 0 0 0 7.005-1.56l1.331-1.183a2.118 2.118 0 0 1 2.809-.004l1.366 1.207a7.373 7.373 0 0 0 6.983 1.54 6.635 6.635 0 0 0 4.743-6.36v-.838a7.76 7.76 0 0 0-7.072-7.73l-2.344-.208c-3.676-.191-3.623-.18-5.017-.18h-.13c-1.394 0-1.341-.01-5.017.18l-2.344.209a7.76 7.76 0 0 0-7.073 7.73' />
      <path strokeLinecap='round' d='m32.637 19.524-2.163-.192a52.983 52.983 0 0 0-4.585-.208c-1.53.003-3.06.072-4.584.208l-2.163.192' />
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M15.429 42.857 1.714 46.286 5.143 36V5.143a3.429 3.429 0 0 1 3.429-3.429h34.285a3.429 3.429 0 0 1 3.429 3.429v34.285a3.429 3.429 0 0 1-3.429 3.43H15.43Z'
      />
    </g>
    <defs>
      <clipPath id='vr-chat-apple-vision-pro_svg__a'>
        <path fill='#fff' d='M0 0h48v48H0z' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgVrChatAppleVisionPro);
export default Memo;
