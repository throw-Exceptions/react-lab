import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 20px;
`;

export const Button = styled.button<{ isSelected: boolean }>`
  height: 28px;
  border-radius: 4px;
  margin-right: 4px;
  background-color: transparent;
  cursor: pointer;
  ${(props) =>
    props.isSelected
      ? css`
          background-color: #8c53c6;
          color: white;
          border: none;
        `
      : css`
          border: 1px solid #8c53c6;
          color: #8c53c6;
        `}
`;
