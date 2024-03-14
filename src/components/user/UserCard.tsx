import React from 'react';
import { CardStyle } from '../../styles/pages/User';

interface DivProps extends React.ComponentPropsWithoutRef<'div'> {}

const UserCard: React.FC<DivProps> = ({ children, ...props }) => {
  // TODO: Use users props to build card
  
  return <CardStyle {...props}>User Card</CardStyle>;
};

export default UserCard;
