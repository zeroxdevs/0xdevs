import { useContext } from 'react';
import { ModalContextProps } from '../@types';
import { ModalContext } from '../Modal.context';

export const useModalContext = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
};
