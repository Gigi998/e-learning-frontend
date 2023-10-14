import { ChangeEventHandler } from 'react';
import { twMerge } from 'tailwind-merge';

export interface Props {
  label: string;
  type?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  ref?: React.RefObject<HTMLInputElement>;
  placeHolder?: string;
  className?: string;
}

const InputField = ({
  label,
  type = 'text',
  onChange,
  value,
  ref,
  placeHolder,
  className,
}: Props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={type} className="text-2xl">
        {label}
      </label>
      <input
        type={type}
        className={twMerge('outline-none', className)}
        value={value}
        ref={ref}
        onChange={(e) => onChange?.(e)}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default InputField;
