'use client';

import { useModalContext } from '@src/context/Modal/hooks/Modal.hook';
import Button from '../Button';
import Div from '../Div';
import FocusTrap from '../FocusTrap';
import Typography from '../Typography';
import { useEffect } from 'react';
import SvgCheck from '../Svg/assets/Check';

function Modal() {
  const {
    modal: { message, buttonText, isOpen },
    closeModal,
  } = useModalContext();

  useEffect(() => {
    const bodyElement = document.body;
    if (!bodyElement.classList.contains('overflow-hidden') && isOpen) {
      bodyElement.classList.add('overflow-hidden');
    }
    if (bodyElement.classList.contains('overflow-hidden') && !isOpen) {
      bodyElement.classList.remove('overflow-hidden');
    }
    return () => {
      bodyElement.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return isOpen ? (
    <Div className="fixed top-0 bottom-0 right-0 w-screen h-screen left-0 z-10 ">
      <Div className="w-full h-full flex justify-center items-center relative">
        <Div className="w-[400px] bg-primary z-20 border-solid border-[1px] border-accent rounded-[12px] relative p-[20px] ">
          <FocusTrap>
            <Div className="flex flex-col justify-center items-center">
              <Div className="w-[62px] h-[62px] bg-accent rounded-full translate-y-[-52px] flex justify-center items-center">
                <SvgCheck></SvgCheck>
              </Div>
              <Typography className="translate-y-[-20px]">{message}</Typography>
              <Button onClick={closeModal}>{buttonText}</Button>
            </Div>
          </FocusTrap>
        </Div>
        <Div
          className="w-full h-full absolute bg-black opacity-50"
          onClick={closeModal}
        ></Div>
      </Div>
    </Div>
  ) : (
    <></>
  );
}
export default Modal;
