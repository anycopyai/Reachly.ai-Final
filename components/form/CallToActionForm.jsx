import React, { useEffect } from "react";
import { Col, Row } from "antd";
import { Switch } from "antd";
import { BsListStars } from "react-icons/bs";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import { useForm, FormProvider, Controller, useWatch } from "react-hook-form";
import { Form, Input, Select, Button } from "antd";
import axios from "axios"
import dotenv from "dotenv"
import apiService from "../../services/base";
dotenv.config();

const CallToAction = () => {
  const { enqueueSnackbar } = useSnackbar();
  const tone = [
    { id: 1, value: "adventurous", label: "Adventurous" },
    { id: 2, value: "analytical", label: "Analytical" },
    { id: 3, value: "appreciative", label: "Appreciative" },
    { id: 4, value: "awestruck", label: "Awestruck" },
    { id: 5, value: "bold", label: "Bold" },
    { id: 6, value: "candid", label: "Candid" },
    { id: 7, value: "casual", label: "Casual" },
    { id: 8, value: "cautionary", label: "Cautionary" },
    { id: 9, value: "adventurous", label: "Adventurous" },
    { id: 10, value: "adventurous", label: "Adventurous" },
  ];
  const LandingSchema = Yup.object({
    language: Yup.string().required("Language is required"),
    project: Yup.string().required("Project is required"),
    product:Yup.string().required("Original Text is Required")
   
  });

  const defaultValues = {
    language: "english",
    product:"",
    guide: false,
  };

  const methods = useForm({
    resolver: yupResolver(LandingSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  // useEffect(() => {
  //   if (errors?.news) {
  //     enqueueSnackbar(`${errors?.news?.message}`, { variant: "error" });
  //   } else if (errors?.facts) {
  //     enqueueSnackbar(`${errors?.facts?.message}`, { variant: "error" });
  //   } else if (errors?.press) {
  //     enqueueSnackbar(`${errors?.press?.message}`, { variant: "error" });
  //   } else if (errors?.company) {
  //     enqueueSnackbar(`${errors?.company?.message}`, { variant: "error" });
  //   } else if (errors?.tone) {
  //     enqueueSnackbar(`${errors?.tone?.message}`, { variant: "error" });
  //   }
  // }, [errors]);
  const guideValue = useWatch({
    control,
    name: "guide",
  });


  const onSubmit = async (data) => {
    console.log("data", data);
    try {
      apiService.post('cta', {
        text: data?.product
    })
    .then(response => {
      // Handle success
      console.log('Response:', response.data);
    })
    .catch(error => {
      // Handle error
      console.error('Error:', error);
      enqueueSnackbar(`${error?.message}`, { variant: "error" });
    });
    } catch (error) {
      console.log("error", error);
    }
  };
  

  return (
    <>
      <div
        style={{
          height: "70vh",
          overflowY: "auto",
          overflowX: "hidden",
          padding: 5,
        }}
      >
        <FormProvider {...methods}>
          <Form onFinish={handleSubmit(onSubmit)}>
            <Row gutter={16}>
              <Col span={12} style={{ marginTop: 5 }}>
                <label htmlFor="language" className=" text-slate-600">
                  Language
                </label>
                <Form.Item
                  validateStatus={errors?.language ? "error" : ""}
                  help={errors?.language?.message}
                >
                  <Controller
                    control={control}
                    name="language"
                    render={({ field }) => (
                      <Select {...field}>
                        <Select.Option value="english">English</Select.Option>
                        <Select.Option value="spanish">Spanish</Select.Option>
                      </Select>
                    )}
                  />
                </Form.Item>
              </Col>
              <Col span={12} style={{ marginTop: 5 }}>
                <label htmlFor="project" className=" text-slate-600">
                  Writing for
                </label>
                <Form.Item
                  validateStatus={errors?.project ? "error" : ""}
                  help={errors?.project?.message}
                >
                  <Controller
                    control={control}
                    name="project"
                    render={({ field }) => (
                      <Select {...field}>
                        <Select.Option value="english">Job</Select.Option>
                        <Select.Option value="spanish">Covid</Select.Option>
                      </Select>
                    )}
                  />
                </Form.Item>
              </Col>

              <Col span={24}>
                <label htmlFor="product" className="  text-slate-600 text-md  mb-9">
                Business/service/product description
                </label>
              
                <Form.Item
                  validateStatus={errors?.product ? "error" : ""}
                  help={errors?.product?.message}
                >
                  <Controller
                    control={control}
                    name="product"
                    render={({ field }) => (
                      <Input.TextArea
                        {...field}
                        placeholder="We are the company that develop mobile app"
                        rows={3}
                      />
                    )}
                  />
                </Form.Item>
              </Col>
             
              <Col
                span={24}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <label htmlFor="guide" className=" text-slate-600">
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <BsListStars style={{ marginRight: 20 }} size={20} />
                    Inclusivity Guidelines
                  </span>
                </label>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <Form.Item style={{ display: "flex", alignItems: "center" }}>
                    <Controller
                      control={control}
                      name="guide"
                      render={({ field }) => (
                        <Switch {...field} style={{ marginRight: 10 }} />
                      )}
                    />
                    {guideValue ? `Enable` : `Disabled`}
                  </Form.Item>
                </span>
              </Col>

              <Col
                span={24}
                style={{
                  marginTop: 30,
                  marginBottom: 70,
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  className="btnTemplateSubmit"
                  style={{ width: "30%", backgroundColor: "#6366f1" }}
                >
                  Write for me
                </Button>
              </Col>
            </Row>
          </Form>
        </FormProvider>
      </div>
    </>
  );
};

export default CallToAction;
