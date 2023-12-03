import Div from '@src/components/Div';
import MateCard from '../MateCard';
import teammates from '../../data/teammates';

function Teammate() {
  return (
    <Div className="flex justify-center flex-wrap md:gap-y-4 pt-[50px] md:pt-[30px]">
      {teammates.map((mate) => (
        <Div key={mate.imgSrc} className="px-[16px]">
          <MateCard {...mate} />
        </Div>
      ))}
    </Div>
  );
}

export default Teammate;
