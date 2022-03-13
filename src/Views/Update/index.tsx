import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { baseURL } from "../../api/service";
import * as yup from "yup";

import {
  Label,
  StyledCol,
  StyledRow,
  Title,
  ViewContainer,
} from "../../components/common/StyledComponents";
import { Formik } from "formik";
import { LocationParams, UpdateValuesProps } from "../../constants/typings";
import withAuthentication from "../../hoc/withAuthentication";
import { NotificationAlert } from "../../utils/NotificationAlert";
import { validationSchema } from "../../utils/ValidationSchema";
import TextInput from "../../components/common/TextInput";
import SwitchComponent from "../../components/common/Switch";
import { ButtonComponent } from "../../components/common/Button";
import Checkbox from "../../components/common/Checkbox";

const Update: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    isEnabled: false,
    isValid: false,
    isAuthorised: false,
    favouriteSports: [],
  });
  const location = useLocation() as LocationParams;
  const state = location.state;
  useEffect(() => {
    setLoading(true);
    fetch(`${baseURL}/45928af0-9bd1-4eb0-a9a1-55845a009e8d/${state?.id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((e) => {
        //you can simulate this by turning off your internet
        NotificationAlert("error", "Error occurred", "Kindly refresh page");
        setLoading(false);
      });
  }, []);
  const updateUser = (values: UpdateValuesProps) => {
    console.log("data", values);
  };
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1);
  };
  return (
    <ViewContainer>
      <Title>Update Personal Details</Title>
      <Formik
        enableReinitialize
        initialValues={{
          firstName: data?.firstName,
          lastName: data?.lastName,
          isEnabled: data?.isEnabled,
          isValid: data?.isValid,
          isAuthorised: data?.isAuthorised,
          favouriteSports: data?.favouriteSports,
        }}
        onSubmit={(values: UpdateValuesProps) => {
          updateUser(values);
        }}
        validationSchema={yup.object().shape(validationSchema.updateDetails)}
      >
        {({
          values,
          handleChange,
          setFieldValue,
          errors,
          handleSubmit,
          initialValues,
        }) => (
          <>
            <StyledRow justify="space-between">
              <StyledCol xs={24} md={6}>
                <Label>First Name</Label>
              </StyledCol>
              <StyledCol xs={24} md={18}>
                <TextInput
                  required
                  inputType="text"
                  value={values.firstName}
                  name="firstName"
                  defaultValue={initialValues?.firstName}
                  placeholder="Enter your First Name"
                  onChange={handleChange}
                  error={errors.firstName}
                />
              </StyledCol>
            </StyledRow>
            <StyledRow justify="space-between">
              <StyledCol xs={24} md={6}>
                <Label>Last Name</Label>
              </StyledCol>
              <StyledCol xs={24} md={18}>
                <TextInput
                  required
                  inputType="text"
                  name="lastName"
                  onChange={handleChange}
                  value={values.lastName}
                  placeholder="Enter your Last Name"
                  error={errors.lastName}
                />
              </StyledCol>
            </StyledRow>
            <StyledRow justify="space-between">
              <StyledCol xs={24} md={6}>
                <Label>Enabled</Label>
              </StyledCol>
              <StyledCol xs={24} md={18}>
                <SwitchComponent
                  value={values?.isEnabled}
                  onChange={setFieldValue}
                  defaultChecked={initialValues.isEnabled}
                  name="isEnabled"
                />
              </StyledCol>
            </StyledRow>
            <StyledRow justify="space-between">
              <StyledCol xs={24} md={6}>
                <Label>Valid</Label>
              </StyledCol>
              <StyledCol xs={24} md={18}>
                <SwitchComponent
                  value={values?.isValid}
                  errors={errors.isValid}
                  defaultChecked={initialValues.isValid}
                  onChange={setFieldValue}
                  name="isValid"
                />
              </StyledCol>
            </StyledRow>
            <StyledRow justify="space-between">
              <StyledCol xs={24} md={6}>
                <Label>Authorised</Label>
              </StyledCol>
              <StyledCol xs={24} md={18}>
                <SwitchComponent
                  value={values?.isAuthorised}
                  errors={errors.isAuthorised}
                  defaultChecked={initialValues.isAuthorised}
                  onChange={setFieldValue}
                  name="isAuthorised"
                />
              </StyledCol>
            </StyledRow>
            <StyledRow justify="space-between">
              <StyledCol xs={24} md={6}>
                <Label>Favourite Sports</Label>
              </StyledCol>
              <StyledCol xs={24} md={18}>
                <Checkbox
                  allValues={["American Football", "Baseball", "Basketball"]}
                  error={errors.favouriteSports}
                  values={data?.favouriteSports}
                  onChange={setFieldValue}
                  name="favouriteSports"
                />
              </StyledCol>
            </StyledRow>
            <br />
            <br />
            <StyledRow justify="space-between">
              <StyledCol xs={24} md={6}></StyledCol>
              <StyledCol xs={24} md={18}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <ButtonComponent onClick={handleCancel} text="Cancel" />

                  <ButtonComponent
                    onClick={handleSubmit}
                    colorprop={true}
                    text="Save"
                  />
                </div>
              </StyledCol>
            </StyledRow>
          </>
        )}
      </Formik>
    </ViewContainer>
  );
};

// export default withAuthentication(Update);
export default Update;
