import React from "react";
import styled from "styled-components";
import { Table as AntTable } from "antd";
import { defaultFont } from "../../theme/fontSize";
import { TableComponentProps } from "../../constants/typings";

const TableComponent = (props: TableComponentProps) => {
  return (
    <StyledTable
      scroll={{ x: 600 }}
      data-testid="tableId"
      size="large"
      pagination={{ pageSize: 3 }}
      {...props}
      bordered
      loading={props.loading}
      dataSource={props.dataSource}
      columns={props.columns}
      onRow={(record: any) => {
        return {
          onClick: (e) => {
            props.rowClick(record?.personId);
          },
        };
      }}
    />
  );
};
export default TableComponent;
export const StyledTable = styled(AntTable)`
  display: block;
  color: ${(props) => props.theme.textColor};
  width: 100%;
  text-align: center;
  background: ${(props) => props.theme.background};

  .ant-table {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.textColor};
    font-weight: 500;
    box-shadow: ${(props) => props.theme.subtleShadow};
    border: ${(props) => `1px solid ${props.theme.mutedColorSecondary}`};

    font-size: ${defaultFont.small};
    :hover {
      background: ${(props) => props.theme.background};
    }
  }

  .ant-table-tbody > tr:nth-child(1n) td {
    background-color: ${(props) => props.theme.mutedColorPrimary};
    color: ${(props) => props.theme.textColor};
    font-weight: 400;
    cursor: pointer;
    /* border: ${(props) => `1px solid ${props.theme.mutedColorSecondary}`}; */

    text-align: center;
    font-size: ${defaultFont.small} !important;
  }
  .ant-table-tbody > tr:nth-child(2n) td {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.textColor};
    font-weight: 400;
    cursor: pointer;
    text-align: center;
    font-size: ${defaultFont.small};
  }
  .ant-table-thead > tr > th {
    background-color: ${(props) => props.theme.foreground};
    font-weight: 500;
    text-align: center;
    border: ${(props) => `1px solid ${props.theme.mutedColorSecondary}`};
    font-size: ${defaultFont.small};
    color: ${(props) => props.theme.textColor};
  }
  .ant-table-tbody > tr.ant-table-row:hover {
    /* transform: scale(1.01);*/
    transition-property: all;
    transition-duration: 500;
    opacity: 0.5;
  }
`;
