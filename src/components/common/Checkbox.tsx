import React from "react";
import { Checkbox as AntCheckBox } from "antd";
import styled from "styled-components";
import { CheckboxProps } from "../../constants/typings";
import { Error } from "./TextInput";

const Checkbox = ({
  values,
  name,
  error,
  onChange,
  allValues,
}: CheckboxProps) => {
  const myDefault = () => {
    let val = [] as any;
    values?.map((data: any) => {
      if (data?.isEnabled) {
        val.push(`${data?.name}`);
      }
    });
    return val;
  };
  return (
    <div>
      <AntCheckBox.Group
        options={allValues}
        defaultValue={allValues}
        onChange={(e) => onChange(name, e)}
      />

      {error && <Error>{error} !</Error>}
    </div>
  );
};

export default Checkbox;
