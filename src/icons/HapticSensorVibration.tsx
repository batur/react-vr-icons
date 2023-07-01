import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgHapticSensorVibration = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeWidth={props.strokeWidth}
      d='M2.035 36.497c-.306-1.313-.411-2.808-.397-4.188.026-2.53 1.431-4.914 3.897-5.479 2.865-.656 6.715-.514 11.537-.225 7.184.431 17.098 3.209 17.577 9.244.48 6.034-9.435 8.046-17.577 9.434-4.702.803-8.055.433-9.988-.102a4.672 4.672 0 0 1-2.663-1.985c-.746-1.154-1.512-2.956-2.386-6.7Z'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M18.299 12.31c-2.854 1.543-5.477 5.477-5.677 9.2 18.164-1.257 29.465 5.95 32.76 9.743.667-1.328 1.326-4 0-6.072-9.29-14.52-23.158-13.868-27.083-12.871Z'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M12.623 21.503c-.17 1.622-.198 2.853.088 4.888M27.797 22.488c-1.27.33-4.232 1.735-5.922 4.706M19.088 4.598 14.99 3.5l-1.098 4.098L9.794 6.5l-1.098 4.098L4.598 9.5 3.5 13.598'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M19.088 4.598 14.99 3.5l-1.098 4.098L9.794 6.5l-1.098 4.098L4.598 9.5 3.5 13.598'
    />
    <path
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      d='M20.677 31.016a.5.5 0 0 1 .997-.08M20.677 31.016a.5.5 0 0 0 .997-.08M17.57 41.71a.5.5 0 1 1 .996-.08'
    />
    <path stroke={props.color} strokeWidth={props.strokeWidth} d='M17.57 41.71a.5.5 0 0 0 .996-.08' />
  </svg>
);
const Memo = memo(SvgHapticSensorVibration);
export default Memo;
