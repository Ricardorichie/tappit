import styled from "styled-components";
import { device } from "../../theme/breakPoints";
import { defaultFont } from "../../theme/fontSize";
import { Col, Row } from "antd";

export const LayoutContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  min-height: 100vh;
  @media ${device.laptop} {
    width: 70%;
  }
  @media ${device.desktop} {
    width: 60%;
  }
`;

export const ViewContainer = styled.div`
  padding-top: 4rem;
`;
export const TableText = styled.p`
  color: ${(props) => props.theme.textColor};
  font-size: ${defaultFont.small};
  margin: 0;
  font-weight: 400;
`;
export const Label = styled.p`
  color: ${(props) => props.theme.textColor};
  font-size: ${defaultFont.small};
  margin: 0;
  font-weight: 400;
`;
export const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
  font-weight: 500;
  font-size: ${defaultFont.normal};
  margin: 0 0 2rem 0;
`;
export const StyledRow = styled(Row)`
  width: 100%;
`;
export const StyledCol = styled(Col)`
  margin-bottom: 1rem;
`;
