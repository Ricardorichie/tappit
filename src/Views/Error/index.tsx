import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";

const Error = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <Result
        status="404"
        title="404"
        subTitle={<p>Sorry, the page you visited does not exist.</p>}
        extra={
          <Button onClick={goToHome} type="primary">
            Back to Home
          </Button>
        }
      />
    </Container>
  );
};

export default Error;
