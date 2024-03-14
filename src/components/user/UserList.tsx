import { ListingWrapper } from '../../styles/pages/Listing';
import UserCard from './UserCard';

const UserList = () => {
  // TODO: Add Tanstack-Query to get users list
  
  return (
    <ListingWrapper>
      {[].map((item) => (
        <UserCard key={item} />
      ))}
    </ListingWrapper>
  );
};

export default UserList;
