import Div from '@src/components/Div';
import Header from './composite/Header/Header';
import MateCard from './composite/MateCard/MateCard';
import Teammate from './composite/Teammate';

function Team() {
  return (
    <Div className="pt-[19px]">
      <Header />
      <Teammate />
    </Div>
  );
}

export default Team;
