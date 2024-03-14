import styled from 'styled-components';
import colors from '../colors';

export const ListingWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: flex-start;
  gap: 10px;
  padding: 35px;
  color: ${colors.black};
`;
