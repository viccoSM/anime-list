import React, {ChangeEvent, FC, FormEvent} from 'react';
import Button from "@/components/Button";
import ModalWrapper, {ModalWrapperProps} from "@/components/ModalWrapper";
import styled from "@emotion/styled";

interface ModalEditCollectionProps extends Omit<ModalWrapperProps, "children"> {
  onChange: (e: any) => void
  onSubmit: (e?: any) => void
  name: string
}


const ModalContent = styled.div`
  & h3{
    margin-bottom: 12px;
  }
  & form {
    display: flex;
    flex-flow: column;
    gap: 16px;

    & .form-input {
      display: flex;
      flex-direction: column;
      gap: 4px;

      & input {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
      }
    }
  }
`

const ModalEditCollection: FC<ModalEditCollectionProps> = ({onClose, isShow, onChange, onSubmit, name}) => {

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!/^[a-zA-Z0-9 ]*$/.test(value)) {
      return;
    }
    onChange(value);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <ModalWrapper onClose={onClose} isShow={isShow}>
      <ModalContent>
        <h3>Add Collection</h3>
        <form onSubmit={handleSubmit}>
          <div className='form-input'>
            <label htmlFor="new-collection">Edit Name Collection</label>
            <input type="text" onChange={handleChangeInput} value={name}/>
          </div>

          <Button themes="secondary" type="submit">
            Edit Collection
          </Button>
        </form>
      </ModalContent>
    </ModalWrapper>
  );
}

export default ModalEditCollection;