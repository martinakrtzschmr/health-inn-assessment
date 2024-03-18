import { useGetUsers } from '../../hooks/useUserData';
import { ListingWrapper } from '../../styles/pages/Listing';
import UserCard from './UserCard';

const UserList = () => {
  const { data, isLoading, isError, error } = useGetUsers();

  return (
    <ListingWrapper>
      {isLoading
        ? '...loading'
        : data.map((item) => <UserCard key={item.id} user={item} />)}
    </ListingWrapper>
  );
};

export default UserList;
