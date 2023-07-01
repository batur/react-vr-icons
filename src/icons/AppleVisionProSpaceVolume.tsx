import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgAppleVisionProSpaceVolume = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <g
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      clipPath='url(#apple-vision-pro-space-volume_svg__a)'
    >
      <path d='M38.782 35.906V16.18L19.92 5.474M38.816 16.163l7.867-4.466M27.85 1.572v2.822M27.85 8.345v2.822M27.85 15.117v2.822' />
      <path d='m28.965 1.236 16.931 9.61a2.257 2.257 0 0 1 1.143 1.963v17.597c0 .813-.436 1.563-1.143 1.964l-6 3.404a2.258 2.258 0 0 1-2.228 0l-16.932-9.61a2.257 2.257 0 0 1-1.143-1.963V6.605c0-.812.436-1.562 1.142-1.963l6.001-3.406a2.257 2.257 0 0 1 2.229 0ZM42.806 29.51l3.773 2.097M39.42 27.587l-3.386-1.921M29.261 21.776l3.104 1.807M26.157 21.722l-3.104 1.808' />
      <path d='M44.323 37.478c-1.822 2.435-5.739 4.119-10.276 4.119-6.277 0-11.365-3.223-11.365-7.198 0-.95.291-1.859.82-2.69M1.777 41.72a2.625 2.625 0 0 0-.367 1.32c0 2.127 2.721 3.85 6.078 3.85 3.358 0 6.08-1.723 6.08-3.85 0-.444-.12-.871-.34-1.27M7.488 24.471a3.863 3.863 0 1 0 0-7.725 3.863 3.863 0 0 0 0 7.726Z' />
      <path d='M14.248 31.23a6.76 6.76 0 0 0-13.519 0v2.898h2.897l.966 7.725h5.794l.965-7.725h2.897V31.23Z' />
    </g>
    <defs>
      <clipPath id='apple-vision-pro-space-volume_svg__a'>
        <path fill='#fff' d='M0 0h48v48H0z' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgAppleVisionProSpaceVolume);
export default Memo;
