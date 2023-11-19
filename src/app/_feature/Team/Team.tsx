import Div from '@src/components/Div';
import Header from './composite/Header/Header';
import MateCard from './composite/MateCard/MateCard';

function Team() {
  return (
    <Div className="pt-[19px]">
      <Header />
      <MateCard />
    </Div>
  );
}

export default Team;
