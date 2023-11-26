import { ReactNode } from 'react';

export interface ModalProviderProps {
  children: ReactNode;
}

export interface ModalState {
  isOpen: boolean;
  message: string;
  buttonText: string;
}

export interface ModalContextProps {
  modal: ModalState;
  openModal: OpenModal;
  closeModal: () => void;
}

export interface OpenModalArgs {
  message: string;
  buttonText?: string;
}

export type OpenModal = (args: OpenModalArgs) => void;

export type CloseModal = () => void;
