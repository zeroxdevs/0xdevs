import Div from '@src/components/Div';
import Divider from '@src/components/Divider';
import Team from '@src/app/_feature/Team/Team';
import Header from './_feature/Header';

export default function Home() {
  return (
    <Div>
      <Header />
      <Divider variant="primary" />
      <Team />
    </Div>
  );
}
