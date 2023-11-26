import Svg from '..';
import { SvgProps } from '../@types';
function SvgCheck(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={31}
      fill="none"
      {...props}
    >
      <path
        stroke="#DEDEDE"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.913}
        d="M24.908 8.197 11.555 21.55l-6.07-6.07"
      />
    </Svg>
  );
}
export default SvgCheck;
