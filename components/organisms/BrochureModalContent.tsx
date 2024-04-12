import Typography from "../atoms/Typography";
import Image from "next/image";
import BrochureImage from "../../public/images/imageBrochure.svg";
import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";
import { useCountries } from "use-react-countries";
import Button from "../atoms/Button";
import React from "react";
import { toast } from 'react-toastify';
import { Form, Formik } from "formik";
import { validationSchema } from "@/utils/validationSchema";
import { saveBrochureData } from "@/utils/apiRequest";

type Props = {
  handleClick: (data: string) => void;
}

const BrochureModalContent = ({handleClick}: Props) => {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  const { countries } = useCountries();
  const [country, setCountry] = useState(0);
  const [countryName, setCountryName] = useState(0);
  const { name, flags, countryCallingCode } = countries[country];
  const countryNameforInput = countries[countryName].name;
  return (
    <div className="grid grid-cols-2 gap-10 px-10">
      <div className="col-span-1">
        <div className="flex flex-col gap-3">
          <Typography
            text="Download your business growth brochure"
            classes="text-4xl font-bold text-darkText"
          />
          <Typography
            classes="font-light"
            text="Lorem ipsum dolor sit amet consectetur. Urna eget quam leo pellentesque quis leo. Scelerisque molestie gravida netus turpis. Nunc vel risus viverra ipsum donec scelerisque."
          />
          <Image src={BrochureImage} alt="Brochure Image" />
          <Typography
            classes="font-light"
            text="Lorem ipsum dolor sit amet consectetur. Ultricies lacus orci pharetra mauris magna. Id aliquet ut eget scelerisque pharetra vestibulum quis leo."
          />
          <Typography
            classes="font-light"
            text="Quis sagittis aliquet habitasse neque magna commodo. Nibh bibendum vulputate nunc dolor arcu nullam id neque. Mi a at in praesent venenatis."
          />
        </div>
      </div>
      <div className="col-span-1">
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            company: "",
            job_title: "",
            std: countryCallingCode,
            phone_number: "",
            country: countryNameforInput,
            marketing_email: false,
            agree_terms: false,
          }}
          validationSchema={validationSchema}
          onSubmit={async(values, { setSubmitting }) => {
              const { std, phone_number, agree_terms, ...rest } = values;
              try {
                const response = await saveBrochureData({ ...rest, phone: { std, phone_number } });
                toast.success('Form submitted successfully', {
                  position: "top-right",
                });
                handleClick('thankyou')
              } catch (error: any) {
                toast.error(error.response.data.message, {
                  position: "top-right",
                });
              }
          }}
        >
          {(formik) => (
            <Form className="w-full flex flex-col gap-8">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  name="firstname"
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                  placeholder=""
                  className="peer h-full w-full border-b border-grey bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-grey focus:border-gray-500 hover:border-violate focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                />
                <label className="after:content[''] input-focused-label pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-violate after:hover:border-violete after:transition-transform input-focused-label after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:after:scale-x-100 peer-focus:after:border-violate peer-focus:!text-transparent peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  First Name{" "}
                  <span
                    className={`labelclass ml-1 text-red-800 peer-focus:!text-transparent`}
                  >
                    *
                  </span>
                </label>
                <Typography
                  text={formik.errors.firstname ? formik.errors.firstname : ""}
                  classes="text-red-800 text-sm"
                />
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  name="lastname"
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                  placeholder=""
                  className="peer h-full w-full border-b border-grey bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-grey focus:border-gray-500 hover:border-violate focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                />
                <label className="after:content[''] input-focused-label pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-violate after:hover:border-violete after:transition-transform input-focused-label after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:after:scale-x-100 peer-focus:after:border-violate peer-focus:!text-transparent peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Last Name{" "}
                  <span
                    className={`labelclass ml-1 text-red-800 peer-focus:!text-transparent`}
                  >
                    *
                  </span>
                </label>
                <Typography
                  text={formik.errors.lastname ? formik.errors.lastname : ""}
                  classes="text-red-800 text-sm"
                />
              </div>

              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  name="company"
                  onChange={formik.handleChange}
                  value={formik.values.company}
                  placeholder=""
                  className="peer h-full w-full border-b border-grey bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-grey focus:border-gray-500 hover:border-violate focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-1000 focus:placeholder:opacity-0"
                />
                <label className="after:content[''] input-focused-label pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-violate after:hover:border-violete after:transition-transform input-focused-label after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:after:scale-x-100 peer-focus:after:border-violate peer-focus:!text-transparent peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Company{" "}
                  <span
                    className={`labelclass ml-1 text-red-800 peer-focus:!text-transparent`}
                  >
                    *
                  </span>
                </label>
                <Typography
                  text={formik.errors.company ? formik.errors.company : ""}
                  classes="text-red-800 text-sm"
                />
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  name="job_title"
                  onChange={formik.handleChange}
                  value={formik.values.job_title}
                  placeholder=""
                  className="peer h-full w-full border-b border-grey bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-grey focus:border-gray-500 hover:border-violate focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-1000 focus:placeholder:opacity-0"
                />
                <label className="after:content[''] input-focused-label pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-violate after:hover:border-violete after:transition-transform input-focused-label after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:after:scale-x-100 peer-focus:after:border-violate peer-focus:!text-transparent peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Job title{" "}
                  <span
                    className={`labelclass ml-1 text-red-800 peer-focus:!text-transparent`}
                  >
                    *
                  </span>
                </label>
                <Typography
                  text={formik.errors.job_title ? formik.errors.job_title : ""}
                  classes="text-red-800 text-sm"
                />
              </div>

              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  placeholder=""
                  className="peer h-full w-full border-b border-grey bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-grey focus:border-gray-500 hover:border-violate focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-1000 focus:placeholder:opacity-0"
                />
                <label className="after:content[''] input-focused-label pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-violate after:hover:border-violete after:transition-transform input-focused-label after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:after:scale-x-100 peer-focus:after:border-violate peer-focus:!text-transparent peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email{" "}
                  <span
                    className={`labelclass ml-1 text-red-800 peer-focus:!text-transparent`}
                  >
                    *
                  </span>
                </label>
                <Typography
                  text={formik.errors.email ? formik.errors.email : ""}
                  classes="text-red-800 text-sm"
                />
              </div>
              <div className="flex gap-3">
                <div className="select-form-1">
                  <Select
                    variant="standard"
                    label="STD"
                    name="std"
                    className="select peer-focus:text-transparent"
                    placeholder="Choose an option"
                    value={formik.values.std}
                    onChange={(event) => {
                      const selectedSTD = event;
                      formik.setFieldValue("std", selectedSTD);
                    }}
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    {countries.map(
                      (
                        {
                          name,
                          flags,
                          countryCallingCode,
                        }: {
                          name: string;
                          flags: { svg: string };
                          countryCallingCode: string;
                        },
                        index: number
                      ) => {
                        return (
                          <Option key={name} value={countryCallingCode}>
                            <div className="flex items-center gap-2">
                              {name}{" "}
                              <span className="ml-auto">
                                {countryCallingCode}
                              </span>
                            </div>
                          </Option>
                        );
                      }
                    )}
                  </Select>
                  <Typography
                    text={formik.errors.std ? formik.errors.std : ""}
                    classes="text-red-800 text-sm"
                  />
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    name="phone_number"
                    placeholder=""
                    value={formik.values.phone_number}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="peer h-full w-full border-b border-grey bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-grey focus:border-gray-500 hover:border-violate focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                  />
                  <label className="after:content[''] input-focused-label pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-violate after:hover:border-violete after:transition-transform input-focused-label after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:after:scale-x-100 peer-focus:after:border-violate peer-focus:text-transparent peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    550 4356 455{" "}
                    <span
                      className={`labelclass ml-1 text-red-800 peer-focus:!text-transparent`}
                    >
                      *
                    </span>
                  </label>
                  <Typography
                    text={
                      formik.errors.phone_number
                        ? formik.errors.phone_number
                        : ""
                    }
                    classes="text-red-800 text-sm"
                  />
                </div>
              </div>
              <div className="select-form">
                <Select
                  variant="standard"
                  label="Country"
                  name="country"
                  value={formik.values.country}
                  onChange={(event) => {
                    const selectedCountryName = event;
                    formik.setFieldValue("country", selectedCountryName);
                  }}
                  className="select peer-focus:text-transparent"
                  placeholder="Choose an option"
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  {countries.map((country: any) => {
                    return (
                      <Option key={country.name} value={country.name}>
                        <div className="flex items-center gap-2">
                          {country.name}
                        </div>
                      </Option>
                    );
                  })}
                </Select>
              </div>
              <div>
                <div className="inline-flex items-start">
                  <label
                    className="relative flex items-center rounded-full cursor-pointer mt-[3px]"
                    htmlFor="check1"
                  >
                    <input
                      type="checkbox"
                      name="marketing_email"
                      checked={formik.values.marketing_email}
                      onChange={formik.handleChange}
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-none border checked:border-2 border-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-violate checked:bg-transparent checked:before:bg-transparent hover:before:opacity-10"
                      id="check1"
                    />
                    <span className="absolute text-violate transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                  <label
                    className="mb-2 font-light ml-2 text-gray-700 cursor-pointer select-none"
                    htmlFor="check1"
                  >
                    <Typography
                      classes="font-light"
                      text="Yes, I would like to receive marketing communications regarding products, services, and
events"
                    />
                  </label>
                </div>
                <div className="text-red-800">
                  <Typography
                    text={
                      formik.errors.agree_terms ? formik.errors.agree_terms : ""
                    }
                    classes="text-red-800 text-sm"
                  />
                </div>
                <div className="inline-flex items-start">
                  <label
                    className="relative flex items-center rounded-full cursor-pointer mt-[3px]"
                    htmlFor="check"
                  >
                    <input
                      type="checkbox"
                      name="agree_terms"
                      onChange={formik.handleChange}
                      checked={formik.values.agree_terms}
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-none border checked:border-2 border-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-violate checked:bg-transparent checked:before:bg-transparent hover:before:opacity-10"
                      id="check"
                    />
                    <span className="absolute text-violate transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                  <label
                    className="mb-2 font-light ml-2 text-gray-700 cursor-pointer select-none"
                    htmlFor="check"
                  >
                    <Typography
                      classes="font-light"
                      text="By providing this information, you agree that we may process your personal data in accordance with our"
                    />
                  </label>
                </div>
              </div>

              <div>
                <Button
                  label={"Download"}
                  type="submit"
                  classes="px-7 !font-light text-sm py-2 rounded-full text-white bg-gradient-to-r from-[#312ED8] to-[#A045F0] hover:bg-gradient-to-r hover:from-[#A045F0] hover:to-[#312ED8] font-light"
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BrochureModalContent;
