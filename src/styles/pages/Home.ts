import styled from 'styled-components';
import colors from '../colors';
import { size } from '../breakpoints';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  color: ${colors.white};
  background: ${colors.veryLightGray};
`;

export const ContentContainer = styled.div`
  max-width: ${size.laptopL};
  margin-left: auto;
  margin-right: auto;

  background-size: cover;
  height: 90%;
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const ContentHeader = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  flex-flow: row wrap;
  justify-content: flex-end;
  gap: 5px;
  padding: 10px;
  background-color: ${colors.white};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const Header = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${colors.darkBlue};

  padding: 10px;
`;

export const LogoContainer = styled.div``;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 500;
  color: ${colors.darkBlue};
`;

export const Icon = styled.span``;

export const LinkedIn = styled.a`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background: ${colors.darkGray};
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 100px;
`;

export const Footer = styled.footer`
  width: 100%;
  margin: 1.5rem 0;
  color: ${colors.darkGray};
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin: 0 8px;
  }
`;
