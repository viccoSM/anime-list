import React, {FC, ReactNode} from 'react';
import styled from "@emotion/styled";

export interface ModalWrapperProps {
  onClose: () => void
  isShow: boolean
  children: ReactNode
}

const ModalComponent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  & .modal-content {
    width: 360px;
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
  }
`
const ModalWrapper: FC<ModalWrapperProps> = ({onClose, isShow, children}) => {
  if (!isShow) return null
  return (
    <ModalComponent onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </ModalComponent>
  );
}

export default ModalWrapper;