import Div from '@src/components/Div';
import Header from './composite/Header/Header';
import Teammate from './composite/Teammate';
import Description from './composite/Description';
import BowDivider from './composite/BowDivider';

function Team() {
  return (
    <Div className="pt-[19px]">
      <Header />
      <Teammate />
      <Description />
      <BowDivider />
    </Div>
  );
}

export default Team;
