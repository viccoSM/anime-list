import React, {FC} from 'react';
import ModalWrapper, {ModalWrapperProps} from "@/components/ModalWrapper";
import styled from "@emotion/styled";
import Button from "@/components/Button";

interface ModalAlertProps extends Omit<ModalWrapperProps, "children"> {
  message: string
  onConfirm: () => void
}

const ModalContent = styled.div`
  text-align: center;
  & h5{
    margin-bottom: 12px;
  }
  & .modal-action{
    display: flex;
    justify-content: center;
    gap: 12px
  }
`

const ModalAlert:FC<ModalAlertProps> = ({isShow, onClose, message, onConfirm}) => (
  <ModalWrapper onClose={onClose} isShow={isShow}>
    <ModalContent>
      <h5>{message}</h5>
      <div className='modal-action'>
        <Button themes="danger" onClick={onClose}>
          Cancel
        </Button>
        <Button themes="primary" onClick={onConfirm}>
          Oke
        </Button>
      </div>
    </ModalContent>
  </ModalWrapper>
);

export default ModalAlert;