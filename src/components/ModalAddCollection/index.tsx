import React, {ChangeEvent, FC, FormEvent, useEffect, useState} from 'react';
import styled from "@emotion/styled";
import ModalWrapper, {ModalWrapperProps} from "@/components/ModalWrapper";
import Button from "@/components/Button";
import {getItemLocalStorage} from "@/utils/funcLocalStorage";

interface ModalAddCollectionProps extends Omit<ModalWrapperProps, "children"> {
  onChange: (e: any) => void
  onSubmit: (e?: any) => void
  onChangeSelect: (e: any) => void
}

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const ModalContent = styled.div`
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

const ModalAddCollection: FC<ModalAddCollectionProps> = ({onClose, isShow, onChange, onSubmit, onChangeSelect}) => {
  const [name, setName] = useState("")
  const options = getItemLocalStorage("collection")

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
    onChangeSelect(e.target.value)
  }

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!/^[a-zA-Z0-9 ]*$/.test(value)) {
      return;
    }
    onChange(value);
    setName(value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit()
  }

  useEffect(() => setName(""), [isShow])

  return (
    <ModalWrapper onClose={onClose} isShow={isShow}>
      <ModalContent>
        <h3>Add Collection</h3>
        <form onSubmit={handleSubmit}>
          <div className='form-input'>
            <label htmlFor="new-collection">New Collection</label>
            <input type="text" onChange={handleChangeInput} value={name}/>
          </div>
          <div className='form-input'>
            <label htmlFor="new-collection">Add to Collection</label>
            <Select onChange={handleChangeSelect}>
              <option value="">
                None
              </option>
              {options.map((option: any, idx: number) => (
                <option key={idx} value={idx}>
                  {option.name}
                </option>
              ))}
            </Select>
          </div>

          <Button themes="secondary" type="submit">
            Add Collection
          </Button>
        </form>
      </ModalContent>
    </ModalWrapper>
  );
}

export default ModalAddCollection;