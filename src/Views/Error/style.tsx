import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props?.theme?.background};
  .ant-result-title,
  .ant-result-subtitle {
    color: ${(props) => props.theme.textColor};
  }
`;
