import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutateUser } from '../../hooks/useUserMutate';
import { User } from '../../types';
import FormField from '../ui/FormField';

interface UserFormProps extends React.ComponentPropsWithoutRef<'div'> {
  user: User;
}

const UserForm: React.FC<UserFormProps> = ({ user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<User>({
    defaultValues: user ?? {},
  });

  const nameProps = register('name', {
    required: 'Campo "Nome" não pode estar em branco.',
  });
  const cpfProps = register('cpf', {
    required: 'Campo "CPF" não pode estar em branco.',
    minLength: 11,
  });
  const rgProps = register('rg', {
    required: 'Campo "RG" não pode estar em branco.',
    minLength: 9,
  });
  const birthdayProps = register('birthday', {
    required: 'Campo "Data de Nascimento" não pode estar em branco.',
    minLength: 9,
  });
  const emailProps = register('email');
  const phoneProps = register('phone');
  const addressProps = register('birthday', {
    required: 'Campo "Data de Nascimento" não pode estar em branco.',
  });
  const roleProps = register('role', {
    required: 'Campo "Cargo" não pode estar em branco.',
  });

  const { mutateAsyncSubmit } = useMutateUser();

  return (
    <form onSubmit={handleSubmit(mutateAsyncSubmit)}>
      <FormField
        id={nameProps.name}
        type="text"
        name="Nome Completo"
        error={errors.name && errors.name.message}
        register={nameProps}
      />
      <FormField
        id={cpfProps.name}
        type="text"
        name="CPF"
        error={errors.cpf && errors.cpf.message}
        register={cpfProps}
      />
      <FormField
        id={rgProps.name}
        type="text"
        name="RG"
        error={errors.rg && errors.rg.message}
        register={rgProps}
      />
      <FormField
        id={birthdayProps.name}
        type="text"
        name="Data de Nascimento"
        error={errors.birthday && errors.birthday.message}
        register={birthdayProps}
      />
      <FormField
        id={emailProps.name}
        type="text"
        name="Email"
        error={errors.email && errors.email.message}
        register={emailProps}
      />
      <FormField
        id={phoneProps.name}
        type="text"
        name="Telefone"
        error={errors.phone && errors.phone.message}
        register={phoneProps}
      />
      <FormField
        id={addressProps.name}
        type="text"
        name="Endereço"
        error={errors.address && errors.address.message}
        register={addressProps}
      />
      <FormField
        id={roleProps.name}
        type="text"
        name="Cargo"
        error={errors.role && errors.role.message}
        register={roleProps}
      />

      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? 'Atualizando' : 'Enviar'}
      </button>
    </form>
  );
};

export default UserForm;
