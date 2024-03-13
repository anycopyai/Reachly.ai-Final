import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { Switch } from "antd";
import { CiCircleInfo } from "react-icons/ci";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import { useForm, FormProvider, Controller, useWatch } from "react-hook-form";
import { Form, Input, Select, Button } from "antd";
import apiService from "../../services/base";
import { useRouter } from "next/router";

const LinkedinAdsForm = ({ googleAdsData }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = router.pathname;
  const routeParts = pathname.split("/");
  const lastRouteName = routeParts[routeParts.length - 1].toLowerCase();

  const LinkedinAdCopySchema = Yup.object({
    language: Yup.string().required("Language is required"),
    project: Yup.string().required("Project is required"),
    product: Yup.string().required("Product is required."),
  });

  const defaultValues = {
    language: "english",
    project: "",
    product: "",
    mode: false,
    guide: false,
  };

  const methods = useForm({
    resolver: yupResolver(LinkedinAdCopySchema),
    defaultValues,
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  useEffect(() => {
    if (errors?.language) {
      enqueueSnackbar(`${errors?.language?.message}`, { variant: "error" });
    } else if (errors?.project) {
      enqueueSnackbar(`${errors?.project?.message}`, { variant: "error" });
    } else if (errors?.product) {
      enqueueSnackbar(`${errors?.product?.message}`, { variant: "error" });
    }
  }, [errors]);
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
      setLoading(true);
      apiService
        .post("linkedin", {
          text: data?.topics,
        })
        .then((response) => {
          console.log(response.data);
          setLoading(false);
          googleAdsData(response.data);
        })
        .catch((error) => {
          setLoading(false);
          console.error("Error:", error);
          enqueueSnackbar(`${error?.message}`, { variant: "error" });
        });
    } catch (error) {}
  };

  return (
    <>
      <div
        style={{
          height: "70vh",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <div
          style={{
            marginRight: 30,
          }}
        >
          <FormProvider {...methods}>
            <Form onFinish={handleSubmit(onSubmit)}>
              <Row gutter={16}>
                <Col span={12} style={{ marginTop: 5 }}>
                  <label htmlFor="language" className="labelContent">
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
                        <Select {...field} className="selectBox">
                          <Select.Option value="english">English</Select.Option>
                          <Select.Option value="spanish">Spanish</Select.Option>
                        </Select>
                      )}
                    />
                  </Form.Item>
                </Col>
                <Col span={12} style={{ marginTop: 5 }}>
                  <label htmlFor="project" className="labelContent">
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
                        <Select {...field} className="selectBox">
                          <Select.Option value="english">Job</Select.Option>
                          <Select.Option value="spanish">Covid</Select.Option>
                        </Select>
                      )}
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p className="labelContent">
                      View and modify your project here
                    </p>
                    <div style={{ color: "#0033ff" }} className="labelContent">
                      My Projects
                    </div>
                  </span>
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
                      <p className="labelContent"> Brainstorm Mode</p>
                      <div className="brainMode" style={{ marginTop: 5 }}>
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
                                backgroundColor: modeValue ? "#0033ff" : "gray",
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
                      <div style={{ marginTop: "-25px" }} className="brainMode">
                        {modeValue ? `Enable` : `Disabled`}
                      </div>
                    </Col>
                  </Row>
                </Col>

                <Col span={24} style={{ marginTop: 5 }}>
                  <label htmlFor="product" className="labelContent">
                    Product
                  </label>

                  <Form.Item
                    validateStatus={errors?.product ? "error" : ""}
                    help={errors?.product?.message}
                  >
                    <Controller
                      control={control}
                      name="product"
                      render={({ field }) => (
                        <Input
                          className="inputBox"
                          placeholder="Widget"
                          {...field}
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
                  <label htmlFor="guide" className="labelContent">
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <p className="labelContent" style={{ marginRight: 3 }}>
                        Safety Guidelines
                      </p>
                      <CiCircleInfo />
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
                          name="guide"
                          render={({ field }) => (
                            <Switch
                              size="small"
                              style={{
                                backgroundColor: guideValue
                                  ? "#0033ff"
                                  : "gray",
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
                      <div style={{ marginTop: "-25px" }} className="brainMode">
                        {guideValue ? `Enable` : `Disabled`}
                      </div>
                    </Col>
                  </Row>
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
                    style={{ width: "100%" }}
                    loading={loading}
                  >
                    Generate Copy
                  </Button>
                </Col>
              </Row>
            </Form>
          </FormProvider>
        </div>
      </div>
    </>
  );
};

export default LinkedinAdsForm;
