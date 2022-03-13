import React from "react";
import { LayoutProps } from "antd";
import { LayoutContainer } from "../common/StyledComponents";

const AppLayout: React.FC = (props: LayoutProps) => {
  return <LayoutContainer>{props.children}</LayoutContainer>;
};

export default AppLayout;
