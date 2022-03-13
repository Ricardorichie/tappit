import React from "react";
import { Button as AntButton } from "antd";
import styled from "styled-components";
import { device } from "../../theme/breakPoints";
import { ButtonProps } from "../../constants/typings";

export const ButtonComponent: React.FC<ButtonProps> = ({
  colorprop,
  disabled,
  text,
  onClick,
  style,
  loading,
}) => {
  return (
    <StyledButton
      title="toggle"
      data-testid="toggle"
      colorprop={colorprop}
      style={{ ...style }}
      disabled={disabled}
      size="normal"
      onClick={onClick}
      loading={loading}
    >
      {text}
    </StyledButton>
  );
};
interface ButtonProp {
  width: string;
  colorprop: boolean;
}
const StyledButton: any = styled(AntButton)<ButtonProp>`
  border: ${(props) => props.theme.primaryColor};
  cursor: pointer;
  /* padding: 1rem; */

  color: black;
  font-weight: 500;
  border-radius: 4px;
  width: fit-content;
  transition: all 0.5s ease;
  background: ${(props) =>
    props.colorprop === true
      ? props.theme.accentPrimary
      : props.theme.accentSecondary};
  :active,
  :focus,
  :hover {
    box-shadow: none;
    transition: all 0.5s ease;
    background: ${(props) =>
      props.colorprop
        ? props.theme.accentPrimary
        : props.theme.accentSecondary};
    color: white;
  }
`;
