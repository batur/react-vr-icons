import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgSharePlaySpatialExperience1 = ({
  width = 24,
  height = 24,
  color = '#000',
  strokeWidth = 1.5,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <g stroke={color} strokeWidth={strokeWidth} clipPath='url(#share-play-spatial-experience-1_svg__a)'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M34.313 20.834a2.287 2.287 0 1 0 0-4.574 2.287 2.287 0 0 0 0 4.574ZM24 15.688a2.287 2.287 0 1 0 0-4.574 2.287 2.287 0 0 0 0 4.574ZM13.687 20.834a2.287 2.287 0 1 1 0-4.574 2.287 2.287 0 0 1 0 4.574Z'
      />
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M38.315 24.836a4.002 4.002 0 0 0-8.005 0v1.724h1.724l.571 4.574h3.431l.572-4.574h1.715v-1.724ZM28.003 19.69a4.002 4.002 0 0 0-8.005 0v1.724h1.715l.572 4.574h3.43l.572-4.574h1.724V19.69ZM9.684 24.836a4.002 4.002 0 0 1 8.005 0v1.724h-1.715l-.572 4.574h-3.43l-.572-4.574H9.684v-1.724Z'
      />
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6.034 27.388c-.747.67-1.155 1.393-1.155 2.147 0 3.457 8.56 6.26 19.12 6.26s19.12-2.803 19.12-6.26c0-.723-.374-1.418-1.064-2.064'
      />
      <circle cx={24} cy={24} r={23.037} />
    </g>
    <defs>
      <clipPath id='share-play-spatial-experience-1_svg__a'>
        <path fill='#fff' d='M0 0h48v48H0z' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgSharePlaySpatialExperience1);
export default Memo;
