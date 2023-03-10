import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

import { styled } from '../emotion';

export interface ModalProps
  extends PropsWithChildren<React.ComponentProps<'div'>> {
  isOpen: boolean;
  onDismiss: () => void;
}
type Props = Partial<ModalProps>;

function Modal({ isOpen = false, onDismiss, children, ...props }: Props) {
  return (
    <Wrapper isOpen={isOpen}>
      <Overlay onClick={onDismiss} />
      <ModalBox {...props}>{children}</ModalBox>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ isOpen: boolean }>`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: 0.1s forwards fadeIn ease-out;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isOpen }) =>
    !isOpen &&
    css`
      display: none;
    `}
`;

const ModalBox = styled.div`
  @keyframes grow {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }

  border-radius: 16px;
  background-color: ${({ theme }) => theme.palette.grayScale.white};
  animation: 0.15s forwards grow ease-out;
  z-index: 101;
  width: ${({ theme }) => theme.rem(400)};
  padding: ${({ theme }) => theme.rem(20)};
  padding-top: ${({ theme }) => theme.rem(16)};
  border: 1px solid black;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

export { Modal };
