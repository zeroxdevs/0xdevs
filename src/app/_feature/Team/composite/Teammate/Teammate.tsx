import Div from '@src/components/Div';
import MateCard from '../MateCard';
import teammates from '../../data/teammates';

function Teammate() {
  return (
    <Div className="flex justify-center pt-[50px]">
      {teammates.map((mate) => (
        <Div key={mate.imgSrc} className="px-[16px]">
          <MateCard {...mate} />
        </Div>
      ))}
    </Div>
  );
}

export default Teammate;
