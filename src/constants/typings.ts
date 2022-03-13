import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { ColumnsType } from "antd/lib/table";

export interface LayoutProps {
  children: React.ReactNode;
}

export interface TableComponentProps {
  rowClick: (id: string) => void | undefined;
  columns: ColumnsType<object> | undefined;
  dataSource: readonly object[] | undefined;
  loading: boolean;
}
export interface DataProps {
  personId?: number;
  firstName?: string;
  lastName?: string;
  isAuthorised?: boolean;
  isValid?: boolean;
  isEnabled?: boolean;
  isPalindrome?: false;
  favouriteSports?: { sportId?: string; name?: string; isEnabled?: boolean }[];
}
export interface LocationParams {
  pathname: string;
  state: {
    id: string;
  };
  search: string;
  hash: string;
  key: string;
}
export interface InputFieldProps {
  name: string;
  onChange?: (e: any) => void;
  placeholder: string;
  value?: string;
  error?: any;
  inputType: string;
  hasLabel?: boolean;
  defaultValue?: string;
  required?: boolean;
  moreStyles?: React.CSSProperties;
}
export interface UpdateValuesProps {
  firstName: string;
  lastName: string;
  isEnabled: boolean;
  isValid: boolean;
  isAuthorised?: boolean;
  favouriteSports?: string[];
}
export interface SwitchProps {
  name?: string;
  defaultChecked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | any;
  value?: string | boolean | any;
  errors?: any;
}
export interface CheckboxProps {
  values?: { isEnabled: boolean; name: string }[] | CheckboxValueType[] | any;
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | any;
  error?: string | any;
  name: string;
  allValues: string[];
}

export interface ButtonProps {
  disabled?: boolean;
  text: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  loading?: boolean;
  colorprop?: boolean;
}
