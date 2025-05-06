import React, { ChangeEventHandler, InputHTMLAttributes } from "react";
import { formatCurrency } from "./masks";

interface InputMaskProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string | number | undefined;
  onValueChange: (maskedValue: string) => void; 
  mask?: "currency" | string;
  prefix?: string;
}

const InputMask: React.FC<InputMaskProps> = ({
  value,
  onValueChange,
  mask,
  prefix = "",
  ...rest
}) => {

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    let maskedValue: string = event.target.value;

    if (mask === "currency") {
      maskedValue = prefix + formatCurrency(maskedValue);
    }

    onValueChange(maskedValue);
  };

  return (
    <input type="text" value={value} onChange={handleInputChange} {...rest} />
  );
};

export default InputMask;