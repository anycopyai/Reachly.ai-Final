import React, { useEffect } from "react";
import { Col, Row } from "antd";
import { Switch } from "antd";
import { BsListStars } from "react-icons/bs";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import { useForm, FormProvider, Controller, useWatch } from "react-hook-form";
import { Form, Input, Select, Button } from "antd";

const PressReleaseForm = () => {
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
    news: Yup.string().required(
      "The field What is the news story? is required."
    ),
    facts: Yup.string().required(
      "The field What are some key facts about the company? is required."
    ),
    press: Yup.string().required(
      "The field What is the theme of the press release? is required."
    ),
    company: Yup.string().required(
      "The field Who is leading the company? (Name and position) is required."
    ),
    tone: Yup.string().required("Tone is required"),
  });

  const defaultValues = {
    language: "english",
    project: "",
    news: "",
    facts: "",
    press: "",
    company: "",
    tone: "",
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

  useEffect(() => {
    if (errors?.news) {
      enqueueSnackbar(`${errors?.news?.message}`, { variant: "error" });
    } else if (errors?.facts) {
      enqueueSnackbar(`${errors?.facts?.message}`, { variant: "error" });
    } else if (errors?.press) {
      enqueueSnackbar(`${errors?.press?.message}`, { variant: "error" });
    } else if (errors?.company) {
      enqueueSnackbar(`${errors?.company?.message}`, { variant: "error" });
    } else if (errors?.tone) {
      enqueueSnackbar(`${errors?.tone?.message}`, { variant: "error" });
    }
  }, [errors]);
  const guideValue = useWatch({
    control,
    name: "guide",
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      // enqueueSnackbar("Login sucessfull", { variant: "success" });
    } catch (error) {}
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
                      <Select {...field}>
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
                      <Select {...field}>
                        <Select.Option value="english">Job</Select.Option>
                        <Select.Option value="spanish">Covid</Select.Option>
                      </Select>
                    )}
                  />
                </Form.Item>
              </Col>

              <Col span={24}>
                <label htmlFor="news" className="labelContent">
                  What is the news story?
                </label>

                <Form.Item
                  validateStatus={errors?.news ? "error" : ""}
                  help={errors?.news?.message}
                >
                  <Controller
                    control={control}
                    name="news"
                    render={({ field }) => (
                      <Input.TextArea
                        {...field}
                        placeholder="What is the news story?"
                        rows={3}
                      />
                    )}
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <label htmlFor="facts" className="labelContent">
                  What are some key facts about the company?
                </label>

                <Form.Item
                  validateStatus={errors?.facts ? "error" : ""}
                  help={errors?.facts?.message}
                >
                  <Controller
                    control={control}
                    name="facts"
                    render={({ field }) => (
                      <Input
                        className="inputBox"
                        placeholder=" What are some key facts about the company?"
                        {...field}
                      />
                    )}
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <label htmlFor="press" className="labelContent">
                  What is the theme of the press release?
                </label>

                <Form.Item
                  validateStatus={errors?.press ? "error" : ""}
                  help={errors?.press?.message}
                >
                  <Controller
                    control={control}
                    name="press"
                    render={({ field }) => (
                      <Input
                        className="inputBox"
                        placeholder=" What is the theme of the press release?"
                        {...field}
                      />
                    )}
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <label htmlFor="company" className="labelContent">
                  Who is leading the company? (Name and position)
                </label>
                <Form.Item
                  validateStatus={errors?.company ? "error" : ""}
                  help={errors?.company?.message}
                >
                  <Controller
                    control={control}
                    name="company"
                    render={({ field }) => (
                      <Input
                        className="inputBox"
                        placeholder=" Who is leading the company? (Name and position)"
                        {...field}
                      />
                    )}
                  />
                </Form.Item>
              </Col>

              <Col span={24}>
                <label htmlFor="tone" className="labelContent">
                  Tone
                </label>

                <Form.Item
                  validateStatus={errors?.tone ? "error" : ""}
                  help={errors?.tone?.message}
                >
                  <Controller
                    control={control}
                    name="tone"
                    render={({ field }) => (
                      <Select {...field}>
                        <Select.Option value="" disabled>
                          Select Tone
                        </Select.Option>
                        {tone?.map((option) => (
                          <Select.Option key={option.id} value={option.value}>
                            {option.label}
                          </Select.Option>
                        ))}
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
                }}
              >
                <label htmlFor="guide" className="labelContent">
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
                  style={{ width: "100%" }}
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

export default PressReleaseForm;
