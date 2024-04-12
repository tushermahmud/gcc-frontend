import * as Yup from "yup";

export const validationSchema = Yup.object({
  firstname: Yup.string().required("First name is required!"),
  lastname: Yup.string().required("Last name is required!"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is Required"),
  company: Yup.string().required("Company is required!"),
  job_title: Yup.string().required("Job title is required!"),
  std:Yup.string().required("Job title is required!"),
  phone_number:Yup.string().required("Phone number is required!"),
  country:Yup.string(),
  marketing_email: Yup.boolean(),
  agree_terms: Yup.boolean().oneOf([true], "This field must be checked")
});
