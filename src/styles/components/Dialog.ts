import styled from 'styled-components';
import colors from '../colors';

export const DialogBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const DialogWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  color: ${colors.black};
  padding: .2rem;
  border-radius: 12px;
`;

export const DialogHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: .875rem;
  text-align: center;
`;

export const DialogTitle = styled.h3`
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.025rem;
`;

export const DialogContent = styled.div`
  padding: .875rem;
  object-fit: cover;
`;

export const DialogFooter = styled.div`
  display: flex;
  align-items: center;
  padding: .875rem;
  justify-content: flex-end;
`;