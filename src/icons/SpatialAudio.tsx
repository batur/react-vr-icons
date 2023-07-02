import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgSpatialAudio = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <g stroke={color} strokeLinecap='round' strokeLinejoin='round' strokeWidth={strokeWidth} clipPath='url(#spatial-audio_svg__a)'>
      <path d='M24 30.97a6.893 6.893 0 1 0 0-13.786 6.893 6.893 0 0 0 0 13.785ZM1.693 25.957c.49-1.076.78-2.402.78-3.836 0-1.433-.29-2.76-.78-3.836M46.307 18.284c-.49 1.077-.78 2.403-.78 3.837 0 1.433.29 2.759.78 3.836M20.243 1.557c1.077.49 2.403.78 3.837.78 1.433 0 2.759-.29 3.836-.78M4.903 28.121c.744-1.663 1.186-3.743 1.186-6s-.442-4.337-1.186-6M43.096 24.12c-.743 1.664-1.186 3.744-1.186 6.001s.443 4.337 1.186 6M18 4.768c1.663.744 3.743 1.186 6 1.186s4.337-.442 6-1.186M8.52 29.944c.97-2.248 1.547-4.88 1.547-7.823 0-2.943-.576-5.655-1.546-7.823M39.48 14.298c-.97 2.248-1.547 4.88-1.547 7.823 0 2.943.576 5.655 1.546 7.823M24.177 8.385c2.248.97 4.88 1.547 7.823 1.547 2.943 0 5.655-.577 7.823-1.547M36.254 46.443a12.365 12.365 0 0 0-24.508 0' />
    </g>
    <defs>
      <clipPath id='spatial-audio_svg__a'>
        <path fill='#fff' d='M0 0h48v48H0z' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgSpatialAudio);
export default Memo;
