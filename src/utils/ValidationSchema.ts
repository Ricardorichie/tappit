import * as yup from "yup";
export const validationSchema = {
  updateDetails: {
    firstName: yup.string().required("Please provide your first name"),
    lastName: yup.string().required("Please provide your last name"),
    isEnabled: yup.boolean(),
    isValid: yup.boolean(),
    isAuthorized: yup.boolean(),
    favouriteSports: yup
      .array()
      .min(1, "Please select atleast one option of your interest"),
  },
};
