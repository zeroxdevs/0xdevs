import Div from '@src/components/Div';
import Divider from '@src/components/Divider';
import Team from '@src/app/_feature/Team/Team';
import Header from './_feature/Header';
import Modal from '@src/components/Modal';
import { ModalProvider } from '@src/context/Modal/Modal.provider';

export const runtime = 'edge';

export default function Home() {
  return (
    <ModalProvider>
      <Div>
        <Modal />
        <Header />
        <Divider variant="primary" />
        <Team />
      </Div>
    </ModalProvider>
  );
}
