import { Input } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { InputFieldProps } from "../../constants/typings";
import { device } from "../../theme/breakPoints";
import { defaultFont } from "../../theme/fontSize";

const TextInput = ({
  inputType,
  name,
  placeholder,
  defaultValue,
  error,
  onChange,
  required,
  value,
  moreStyles,
}: InputFieldProps) => {
  const [focus, setFocus] = useState(false);
  return (
    <div style={{ marginBottom: 15, ...moreStyles }}>
      <Container
        style={{ ...moreStyles }}
        focusProp={focus}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
      >
        <StyledInput
          title="input"
          name={name}
          placeholder={placeholder}
          value={value}
          bordered={false}
          onChange={onChange}
          defaultValue={defaultValue}
          required={required}
        />
      </Container>
      {error && <Error>{error} !</Error>}
    </div>
  );
};

export default TextInput;
interface ContainerProp {
  focusProp: boolean;
}
export const Error = styled.h5`
  margin: 0px 0 0 12px;
  font-weight: 300;
  font-size: ${defaultFont.small};
  color: red;
  @media ${device.laptop} {
    font-size: ${defaultFont.small};
  }
`;

export const StyledInput = styled(Input)`
  &&& {
    outline: none;
    height: 100%;
    padding: 5px 10px;
    font-weight: 300;
    font-size: 14px;
    color: ${(props) => props.theme.textColor};
    border-radius: inherit;

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    ::placeholder {
      color: ${(props) => props.theme.mutedColorPrimary};
    }
    .ant-input {
      color: ${(props) => props.theme.textColor};
      font-size: ${defaultFont.small};
      border-radius: inherit;
      ::placeholder {
        color: ${(props) => props.theme.mutedColorSecondary};
      }
      input[type="number"]::-webkit-inner-spin-button,
      input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
        border-radius: inherit;
      }

      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active {
        -webkit-box-shadow: ${(props) => props.theme.foreground} !important;
      }
    }
    @media ${device.laptop} {
      font-size: ${defaultFont.small};
      .ant-input {
        font-size: ${defaultFont.small};
      }
    }
  }
`;

export const Container = styled.div<ContainerProp>`
  width: 100%;
  height: 2.5rem;
  border: ${(props) =>
    `1px solid ${
      props.focusProp
        ? props.theme.primaryColor
        : props.theme.mutedColorSecondary
    }`};
  border-radius: 4px;
  padding: 0vw 0vw;
  display: flex;
  align-items: center;
  margin: 0;
  @media ${device.laptop} {
    width: 50%;
  }
`;
