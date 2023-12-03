import Div from '@src/components/Div';
import SvgCurveLine from '@src/components/Svg/assets/CurveLine';

function BowDivider() {
  return (
    <Div className="h-[15vw] md:mt-[40px] relative">
      <SvgCurveLine className="absolute bottom-[-50%]" />
    </Div>
  );
}

export default BowDivider;
