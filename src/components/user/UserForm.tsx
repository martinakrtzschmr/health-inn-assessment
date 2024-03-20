import React from 'react';
import { useForm } from 'react-hook-form';
import { useGetCompanies } from '../../hooks/useCompanieData';
import { useGetDepartments } from '../../hooks/useDepartmentData';
import { ButtonOutline } from '../../styles/components/Buttons';
import { Option } from '../../styles/components/Select';
import { Companie, Department, User } from '../../types';
import FormField from '../ui/FormField';
import SelectField from '../ui/SelectField';

interface UserFormProps extends React.ComponentPropsWithoutRef<'div'> {
  user?: User;
  onSubmit: (data: any) => void;
}

const UserForm: React.FC<UserFormProps> = ({ user, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<User>({
    defaultValues: user ?? {},
  });

  const { data: companieData, isLoading: isLoadingCompanies } =
    useGetCompanies();
  const { data: departmentsData, isLoading: isLoadingDepartments } =
    useGetDepartments();

  const activeProps = register('active');
  const nameProps = register('name', {
    required: '"Nome" não pode estar em branco.',
  });
  const cpfProps = register('cpf', {
    required: '"CPF" não pode estar em branco.',
    minLength: {
      value: 11,
      message: '"CPF" deve conter 11 digitos',
    },
    maxLength: {
      value: 11,
      message: '"CPF" deve conter 11 digitos',
    },
  });
  const rgProps = register('rg', {
    required: '"RG" não pode estar em branco.',
    minLength: {
      value: 10,
      message: '"RG" deve conter 10 digitos',
    },
    maxLength: {
      value: 10,
      message: '"RG" deve conter 10 digitos',
    },
  });
  const birthdayProps = register('birthday', {
    required: '"Data de Nascimento" não pode estar em branco.',
  });
  const emailProps = register('email');
  const phoneProps = register('phone');
  const addressProps = register('address', {
    required: '"Endereço" não pode estar em branco.',
  });
  const roleProps = register('role', {
    required: '"Cargo" não pode estar em branco.',
  });
  const departmentsProps = register('departmentId', {
    required: '"Empresa" não pode estar em branco.',
  });
  const companiesProps = register('companieId', {
    required: '"Empresa" não pode estar em branco.',
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        id={activeProps.name}
        type="checkbox"
        name="Ativo"
        error={errors.active && errors.active.message}
        register={activeProps}
      />
      <FormField
        id={nameProps.name}
        name="Nome Completo"
        error={errors.name && errors.name.message}
        register={nameProps}
      />
      <FormField
        id={cpfProps.name}
        type="number"
        name="CPF"
        error={errors.cpf && errors.cpf.message}
        register={cpfProps}
      />
      <FormField
        id={rgProps.name}
        type="number"
        name="RG"
        error={errors.rg && errors.rg.message}
        register={rgProps}
      />
      <FormField
        id={birthdayProps.name}
        // type="date"
        name="Data de Nascimento"
        error={errors.birthday && errors.birthday.message}
        register={birthdayProps}
      />
      <FormField
        id={emailProps.name}
        type="email"
        name="Email"
        error={errors.email && errors.email.message}
        register={emailProps}
      />
      <FormField
        id={phoneProps.name}
        type="number"
        name="Telefone"
        error={errors.phone && errors.phone.message}
        register={phoneProps}
      />
      <FormField
        id={addressProps.name}
        name="Endereço"
        error={errors.address && errors.address.message}
        register={addressProps}
      />
      <FormField
        id={roleProps.name}
        name="Cargo"
        error={errors.role && errors.role.message}
        register={roleProps}
      />
      {!isLoadingDepartments && (
        <SelectField<Department>
          options={departmentsData}
          renderOptions={(option) => (
            <Option key={option.id} value={option.id}>
              {option.name}
            </Option>
          )}
          register={departmentsProps}
        />
      )}
      {!isLoadingCompanies && (
        <SelectField<Companie>
          options={companieData}
          renderOptions={(option) => (
            <Option key={option.cnpj} value={option.id}>
              {option.name}
            </Option>
          )}
          register={companiesProps}
        />
      )}

      <ButtonOutline disabled={isSubmitting} type="submit">
        {isSubmitting ? 'Atualizando' : 'Enviar'}
      </ButtonOutline>
    </form>
  );
};

export default UserForm;
