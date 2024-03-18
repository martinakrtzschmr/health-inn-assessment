import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutateUser } from '../../hooks/useUserMutate';
import { User } from '../../types';

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

  const { mutateAsyncSubmit } = useMutateUser();

  return (
    <form onSubmit={handleSubmit(mutateAsyncSubmit)}>
      <div>
        <label htmlFor="name">Nome Completo</label>
        <input
          {...register('name', {
            required: 'Campo "Nome" não pode estar em branco.',
            // validate:
          })}
          id="name"
          type="text"
          placeholder="Nome"
        />
      </div>

      <div>
        <label htmlFor="cpf">CPF</label>
        <input
          {...register('cpf', {
            required: 'Campo "CPF" não pode estar em branco.',
            minLength: 11,
            // validate:
            // mask:
          })}
          id="cpf"
          type="text"
          placeholder="CPF"
        />
      </div>

      <div>
        <label htmlFor="rg">RG</label>
        <input
          {...register('rg', {
            required: 'Campo "RG" não pode estar em branco.',
            minLength: 9,
            // validate:
            // mask:
          })}
          id="rg"
          type="text"
          placeholder="RG"
        />
      </div>

      <div>
        <label htmlFor="birthday">Data de Nascimento</label>
        <input
          {...register('birthday', {
            required: 'Campo "Data de Nascimento" não pode estar em branco.',
            // validate:
            // mask:
          })}
          id="birthday"
          type="date"
          placeholder="Data de Nascimento"
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          {...register('email', {
            required: 'Campo "Email" não pode estar em branco.',
            // validate:
            // mask:
          })}
          id="email"
          type="text"
          placeholder="Email"
        />
      </div>

      <div>
        <label htmlFor="phone">Telefone</label>
        <input
          {...register('phone', {
            required: 'Campo "Telefone" não pode estar em branco.',
            // validate:
            // mask:
          })}
          id="phone"
          type="text"
          placeholder="Telefone"
        />
      </div>

      <div>
        <label htmlFor="address">Endereço</label>
        <input
          {...register('address', {
            required: 'Campo "Endereço" não pode estar em branco.',
            // validate:
            // mask:
          })}
          id="address"
          type="text"
          placeholder="Endereço"
        />
      </div>

      <div>
        <label htmlFor="role">Cargo</label>
        <input
          {...register('role', {
            required: 'Campo "Cargo" não pode estar em branco.',
            // validate:
            // mask:
          })}
          id="role"
          type="text"
          placeholder="Cargo"
        />
      </div>

      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? 'Atualizando' : 'Enviar'}
      </button>
    </form>
  );
};

export default UserForm;
