import React from "react";
import { Col, Row } from "antd";
import { Switch } from "antd";
import { BsListStars } from "react-icons/bs";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const PressReleaseForm = () => {
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

  // useEffect(() => {
  //   if (errors?.email) {
  //     enqueueSnackbar(`${errors?.email?.message}`, { variant: "error" });
  //   } else if (errors?.password) {
  //     enqueueSnackbar(`${errors?.password?.message}`, { variant: "error" });
  //   }
  // }, [errors]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      // enqueueSnackbar("Login sucessfull", { variant: "success" });
    } catch (error) {}
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
              <option value="greetings">Greetings</option>
              <option value="salutations">Salutations</option>
              <option value="courteous">Courteous</option>
              <option value="respectful">Respectful</option>
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
