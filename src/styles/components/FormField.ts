import InputMask from 'react-input-mask';
import styled from 'styled-components';
import colors from '../colors';

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 5px;
`;

export const InputLabel = styled.label`
  position: relative;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-weight: 300;

  border-width: 1px;
  border-radius: 0.375rem;

  outline: 2px solid transparent;
  outline-offset: 2px;

  /* Chrome, Safari, Edge, Opera */
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  -moz-appearance: textfield;
`;

export const InputError = styled.p``;
