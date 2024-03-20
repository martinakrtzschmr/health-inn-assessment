import { ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Option, Select, SelectWrapper } from '../../styles/components/Select';

interface FormSelectProps<T> extends React.ComponentPropsWithoutRef<'select'> {
  options: T[];
  renderOptions: (item: T) => ReactNode;
  register: UseFormRegisterReturn<string>;
};

function SelectField<T>({ options, renderOptions, register }: FormSelectProps<T>) {
  return (
    <SelectWrapper>
      <Select {...register}>
        {options.map(renderOptions)}
      </Select>
    </SelectWrapper>
  );
}

export default SelectField;
