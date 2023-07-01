import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgArViewSeeThroughDevice = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M23.999 2v6.18M23.999 39.82V46M11.044 32.424l-5.35 3.09M11.044 15.577l-5.35-3.09M37.649 32.424 43 35.514M37.649 15.577 43 12.487'
    />
    <path
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      d='M12.718 24.039c0-3.34 2.54-6.13 5.864-6.444l1.295-.122a43.892 43.892 0 0 1 8.243 0l1.292.122a6.475 6.475 0 0 1 5.868 6.447v.47a5.834 5.834 0 0 1-4.078 5.563c-1.699.537-3.544.35-5.102-.516l-1.173-.652a1.905 1.905 0 0 0-1.856.002l-1.141.638a6.495 6.495 0 0 1-5.12.528 5.846 5.846 0 0 1-4.092-5.577v-.46Z'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeWidth={props.strokeWidth}
      d='m27.686 22.497-1.163-.103a28.48 28.48 0 0 0-5.046 0l-1.166.103'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M19 4.632 24 2l5 2.632M38 38.632 43 36v-6M10 9.368 5 12v6M10 38.632 5 36v-6M19 43.368 24 46l5-2.632M38 9.368 43 12v6'
    />
  </svg>
);
const Memo = memo(SvgArViewSeeThroughDevice);
export default Memo;
