import React, { useEffect } from "react";
import { Col, Row } from "antd";
import { Switch } from "antd";
import { BsListStars } from "react-icons/bs";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";

const PressReleaseForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const tone =[
    {id:1, value:'adventurous', label:'Adventurous'},
    {id:2, value:'analytical', label:'Analytical'},
    {id:3, value:'appreciative', label:'Appreciative'},
    {id:4, value:'awestruck', label:'Awestruck'},
    {id:5, value:'bold', label:'Bold'},
    {id:6, value:'candid', label:'Candid'},
    {id:7, value:'casual', label:'Casual'},
    {id:8, value:'cautionary', label:'Cautionary'},
    {id:9, value:'adventurous', label:'Adventurous'},
    {id:10, value:'adventurous', label:'Adventurous'},
   
  ]
  const LandingSchema = Yup.object({
    language: Yup.string().required("Language is required"),
    project: Yup.string().required("Language is required"),
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
    language: "",
    project: "",
    news: "",
    facts: "",
    press: "",
    company: "",
    tone: "",
  };
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(LandingSchema),
    defaultValues,
  });
  console.log(errors);

  useEffect(() => {
    if (errors?.news) {
      enqueueSnackbar(`${errors?.news?.message}`, { variant: "error" });
    } else if (errors?.facts) {
      enqueueSnackbar(`${errors?.facts?.message}`, { variant: "error" });
    }
    else if (errors?.press) {
      enqueueSnackbar(`${errors?.press?.message}`, { variant: "error" });
    }
    else if (errors?.company) {
      enqueueSnackbar(`${errors?.company?.message}`, { variant: "error" });
    }
    else if (errors?.tone) {
      enqueueSnackbar(`${errors?.tone?.message}`, { variant: "error" });
    }
  }, [errors]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      // enqueueSnackbar("Login sucessfull", { variant: "success" });
    } catch (error) {
      
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row gutter={16}>
          <Col span={12} style={{ marginTop: 5 }}>
            <label htmlFor="language" className="labelContent">
              Language
            </label>

            <select
              {...register("language")}
              className="inputBox"
              style={{ height: "60%" }}
              defaultValue={"english"}
            >
              <option disabled>Select Language</option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="hindi">Hindi</option>
            </select>
          </Col>
          <Col span={12} style={{ marginTop: 5 }}>
            <label htmlFor="project" className="labelContent">
              Writing for
            </label>
            <select
              {...register("project")}
              className="inputBox"
              style={{ height: "60%" }}
            >
              <option disabled>Select project</option>
              <option value="covid">Covid</option>
              <option value="job">Job</option>
            </select>
          </Col>

          <Col span={24} style={{ marginTop: 20 }}>
            <label htmlFor="news" className="labelContent">
              What is the news story?
            </label>

            <textarea
              {...register("news")}
              placeholder="What is the news story?"
              className="inputBox"
              rows="5"
            ></textarea>
            {errors?.news?.message && (
              <label htmlFor="news" className="levelError">
                {errors?.news?.message}
              </label>
            )}
          </Col>
          <Col span={24} style={{ marginTop: 20 }}>
            <label htmlFor="facts" className="labelContent">
              What are some key facts about the company?
            </label>

            <input
              {...register("facts")}
              placeholder="What are some key facts about the company?"
              className="inputBox"
            />
            {errors?.facts?.message && (
              <label htmlFor="news" className="levelError">
                {errors?.facts?.message}
              </label>
            )}
          </Col>
          <Col span={24} style={{ marginTop: 20 }}>
            <label htmlFor="press" className="labelContent">
              What is the theme of the press release?
            </label>

            <input
              {...register("press")}
              placeholder="What is the theme of the press release?"
              className="inputBox"
            />
            {errors?.press?.message && (
              <label htmlFor="news" className="levelError">
                {errors?.press?.message}
              </label>
            )}
          </Col>
          <Col span={24} style={{ marginTop: 20 }}>
            <label htmlFor="company" className="labelContent">
              Who is leading the company? (Name and position)
            </label>

            <input
              {...register("company")}
              placeholder="Who is leading the company? (Name and position)"
              className="inputBox"
            />
            {errors?.company?.message && (
              <label htmlFor="news" className="levelError">
                {errors?.company?.message}
              </label>
            )}
          </Col>

          <Col span={24} style={{ marginTop: 20 }}>
            <label htmlFor="tone" className="labelContent">
              Tone
            </label>

            <select
              {...register("tone")}
              className="inputBox"
              style={{ height: "55%" }}
            >
              <option disabled>Select Tone</option>
              <option value="adventurous">Adventurous</option>
              <option value="analytical">Analytical</option>
              <option value="appreciative">Appreciative</option>
              <option value="assertive">Assertive</option>
              <option value="awestruck">Awestruck</option>
              <option value="bold">Bold</option>
              <option value="candid">Candid</option>
              <option value="casual">Casual</option>
            </select>
            {errors?.tone?.message && (
              <label htmlFor="news" className="levelError">
                {errors?.tone?.message}
              </label>
            )}
          </Col>

          <Col
            span={24}
            style={{
              marginTop: 20,
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
              <Switch
                id="guide"
                defaultValue={false}
                style={{ marginRight: 10 }}
              />
              Disabled
            </span>
          </Col>

          <Col
            span={24}
            style={{
              marginTop: 20,
              marginBottom: 50,
              display: "flex",
              justifyContent: "left",
              alignItems: "left",
            }}
          >
            <button type="submit" className="btn">
              Write for me
            </button>
          </Col>
        </Row>
      </form>
    </>
  );
};

export default PressReleaseForm;
