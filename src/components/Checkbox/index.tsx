import React, {ChangeEvent} from 'react';

interface CheckboxProps {
  onChange: (checked: boolean) => void;
  checked: boolean
}

const Checkbox: React.FC<CheckboxProps> = ({ onChange, checked }) => {
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);

  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
      </label>
    </div>
  );
};

export default Checkbox;
