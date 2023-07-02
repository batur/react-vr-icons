import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgSharePlaySpatialExperience = ({
  width = 16,
  height = 16,
  color = '#000',
  strokeWidth = 1.5,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <g stroke={color} strokeLinecap='round' strokeWidth={strokeWidth} clipPath='url(#share-play-spatial-experience_svg__a)'>
      <path d='M13.722 22.885h4.595M1.883 43.102l-.95 2.881a1 1 0 0 0 .95 1.313h44.235a1 1 0 0 0 .95-1.313l-.95-2.881M29.756 22.885h4.504' />
      <path
        strokeLinejoin='round'
        d='M7.489 26.971a3.863 3.863 0 1 0 0-7.725 3.863 3.863 0 0 0 0 7.725ZM40.384 26.971a3.863 3.863 0 1 0 0-7.725 3.863 3.863 0 0 0 0 7.725ZM24 10.534a3.459 3.459 0 1 0 0-6.918 3.459 3.459 0 0 0 0 6.918Z'
      />
      <path
        strokeLinejoin='round'
        d='M14.248 33.73a6.76 6.76 0 0 0-13.519 0v2.898h2.897l.966 7.725h5.794l.965-7.725h2.897V33.73ZM47.24 33.73a6.76 6.76 0 0 0-13.52 0v2.898h2.898l.965 7.725h5.794l.966-7.725h2.897V33.73ZM30.052 16.586a6.052 6.052 0 1 0-12.105 0v2.594h2.594l.865 6.917h5.188l.864-6.917h2.594v-2.594Z'
      />
    </g>
    <defs>
      <clipPath id='share-play-spatial-experience_svg__a'>
        <path fill='#fff' d='M0 0h48v48H0z' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgSharePlaySpatialExperience);
export default Memo;
