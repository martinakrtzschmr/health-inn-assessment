import styled from 'styled-components';
import colors from '../colors';

export const DeleteButton = styled.button`
  border: 1px solid lightgray;
  border-radius: 6px;
  padding: 5px;
  
  background-color: ${colors.confortableRedRbg};
  color: ${colors.white};
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-duration: 150ms;
  &:hover {
    background-color: ${colors.lightGray};
  }
`;

export const EditButton = styled.button`
  border: 1px solid lightgray;
  border-radius: 6px;
  padding: 5px;
  
  background-color: ${colors.solidYellow};
  color: ${colors.white};
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-duration: 150ms;
  &:hover {
    background-color: ${colors.lightGray};
  }
`;

export const ButtonOutline = styled.button<{ $buttonColor?: string; }>`
  border: 1px solid ${props => colors[props.$buttonColor] || colors.darkBlue};
  background-color: ${colors.white};
  color: ${props => colors[props.$buttonColor] || colors.darkBlue};
  border-radius: 10px;
  margin-left: 5px;
  padding: 5px;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-duration: 150ms;

  &:hover {
    background-color: ${props => colors[props.$buttonColor] || colors.darkBlue};
    color: ${colors.white}
  }
`;