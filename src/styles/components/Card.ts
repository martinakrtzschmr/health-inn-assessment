import styled from 'styled-components';
import { device } from '../breakpoints';
import colors from '../colors';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.white};
  border-radius: 0.5rem;
  border-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin-bottom: 5px;

  @media (max-width: ${device.tablet}) {
    width: 49%;
  }

  @media (max-width: ${device.mobileL}) {
    width: 100%;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: .5rem;
  border-bottom: 1px solid lightgray;
  text-align: center;
`;

export const CardTitle = styled.h3`
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.025rem;
`;

export const CardContent = styled.div`
  padding: .5rem;
  object-fit: cover;
`;

export const CardDescription = styled.p`
  font-size: .9rem;
  line-height: 1.25rem;
  color: ${colors.veryDarkGray};
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  padding: .5rem;
  border-top: 1px solid lightgray;
  justify-content: flex-end;
`;