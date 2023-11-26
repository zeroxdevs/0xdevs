'use client';

import {
  CloseModal,
  ModalState,
  ModalProviderProps,
  OpenModal,
} from './@types';
import { useState } from 'react';
import { ModalContext } from './Modal.context';

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const initModalState: ModalState = {
    isOpen: false,
    message: '',
    buttonText: 'Okey',
  };
  const [modal, setModal] = useState<ModalState>(initModalState);

  const openModal: OpenModal = ({ message, buttonText }) => {
    setModal({
      isOpen: true,
      message: message,
      buttonText: buttonText || 'Okey',
    });
  };

  const closeModal: CloseModal = () => {
    setModal(initModalState);
  };

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
