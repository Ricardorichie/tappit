import React from "react";
import { Switch } from "antd";
import { SwitchProps } from "../../constants/typings";
import styled from "styled-components";
import { Error } from "./TextInput";

const SwitchComponent = ({
  onChange,
  defaultChecked,
  name,
  errors,
  value,
}: SwitchProps) => {
  return (
    <div>
      <StyledSwitch
        title="switchToggle"
        size="default"
        data-testid="switchToggle"
        checked={value}
        onChange={(e) => onChange(name, e)}
        defaultChecked={defaultChecked}
      />
      {errors && <Error>{errors} !</Error>}
    </div>
  );
};

export default SwitchComponent;

const StyledSwitch = styled(Switch)``;
