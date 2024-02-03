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


const Meta_form = ({Meta_Data}) => {
  const { enqueueSnackbar } = useSnackbar();
 
  const LandingSchema = Yup.object({
    language: Yup.string().required("Language is required"),
    project: Yup.string().required("Project is required"),
    topic:Yup.string().required("Original Text is Required")
   
  });

  const defaultValues = {
    language: "english",
    topic:"",
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

  const modeValue = useWatch({
    control,
    name: "mode",
  });

  const onSubmit = async (data) => {
 
    try {
        apiService.post('meta-description', {
            text: data?.product
        })
        .then(response => {
          // Handle success
          Meta_Data(response?.data)
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
                <label htmlFor="language" className=" text-slate-400">
                  Language
                </label>
                <Form.Item
                  validateStatus={errors?.language ? "error" : ""}
                  help={errors?.language?.message}
                >
                  <Controller
                    control={control}
                    name="language"
                    style={{ marginTop: 10 }}
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
                
              <Col
                  span={24}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 20,
                  }}
                >
                  <label htmlFor="mode" className="labelContent">
                    <span>
                      <p> Brainstorm Mode</p>
                      <div style={{ fontSize: "10px" }}>
                        {" "}
                        Enable to write random ideas/inspiration based on
                        selected project
                      </div>
                    </span>
                  </label>
                  <Row gutter={4}>
                    <Col
                      span={24}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Form.Item>
                        <Controller
                          control={control}
                          name="mode"
                          render={({ field }) => (
                            <Switch
                              size="small"
                              style={{
                                backgroundColor: modeValue ? "#1890FF" : "gray",
                              }}
                              {...field}
                            />
                          )}
                        />
                      </Form.Item>
                    </Col>
                    <Col
                      span={24}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <div style={{ marginTop: "-20px", fontSize: "12px" }}>
                        {" "}
                        {modeValue ? `Enable` : `Disabled`}
                      </div>
                    </Col>
                  </Row>
                </Col>
              <Col span={24} >
                <label htmlFor="topic" className="  text-slate-600 text-md  mb-9">
                     Page Topic
                </label>
              
                <Form.Item
                  validateStatus={errors?.topic ? "error" : ""}
                  help={errors?.topic?.message}
                >
                  <Controller
                    control={control}
                    name="topic"
                    
                    render={({ field }) => (
                      <Input
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

export default Meta_form;
