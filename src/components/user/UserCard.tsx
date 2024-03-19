import React from 'react';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../styles/components/Card';
import { User } from '../../types';
import { cpfMask } from '../../utils/inputMasks';
import Dialog from '../dialog';
import UserForm from './UserForm';

interface DivProps extends React.ComponentPropsWithoutRef<'div'> {
  user: User;
}

const UserCard: React.FC<DivProps> = ({ user, ...props }) => {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>{user.department.name}</CardDescription>
        <CardDescription>{cpfMask(user.cpf.toString())}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Dialog title='Editar Usuário' openButtonLabel='Editar' closeButtonLabel='Fechar'>
          <UserForm user={user} />
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
