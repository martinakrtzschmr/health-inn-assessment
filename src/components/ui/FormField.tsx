import { UseFormRegisterReturn } from 'react-hook-form';
import {
  InputError,
  InputField,
  InputLabel,
  InputWrapper,
} from '../../styles/components/FormField';

interface FormFieldProps extends React.ComponentPropsWithoutRef<'div'> {
  id: string;
  type?: string;
  name: string;
  error?: string;
  register: UseFormRegisterReturn<string>;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  type = 'text',
  name,
  error = '',
  register,
  ...props
}) => {
  return (
    <InputWrapper {...props}>
      <InputLabel htmlFor={id}>{name}</InputLabel>
      <InputField
        type={type}
        placeholder={name}
        {...register}
      />
      {error && <InputError>{error}</InputError>}
    </InputWrapper>
  );
};

export default FormField;
