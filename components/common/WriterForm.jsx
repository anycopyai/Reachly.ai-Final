import { Button, Input, Select } from "antd";
import { IoIosInformationCircleOutline } from "react-icons/io";
const { TextArea } = Input;

const WriterForm = ({ isgenerate, setGenerate }) => {
  return (
    <form
      method="POST"
      className="w-full md:w-11/12 mt-6 flex flex-col gap-4 md:gap-6 pb-4"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="focus:outline-none">
          <label className="block mb-2 text-sm text-[rgba(0,0,0,0.85)] dark:text-white">
            Language
          </label>
          <Select
            className="w-full rounded-sm text-base h-10"
            placeholder="English"
            name="language"
            id="language"
            options={[
              {
                value: "english",
                label: "English",
              },
              {
                value: "hindi",
                label: "Hindi",
              },
            ]}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-[rgba(0,0,0,0.85)] dark:text-white">
            Project
          </label>
          {/* Dynamic the project form settings */}
          <Select
            className="w-full rounded-sm text-base h-10"
            name="project"
            id="project"
            placeholder="Console"
            options={[
              {
                value: "console",
                label: "Console",
              },
              {
                value: "my-project",
                label: "My Project",
              },
            ]}
          />
        </div>
      </div>

      <div className="flex flex-row justify-between gap-5">
        <p className="text-sm text-black">View and modify your projects here</p>
        <p className="text-sm text-navblue">My Projects</p>
      </div>

      <div className="relative flex flex-col gap-2">
        <label className="block text-sm text-[rgba(0,0,0,0.85)] dark:text-white">
          Type of Content
        </label>
        <TextArea
          placeholder="provide your content"
          className="rounded-sm resize-none block text-sm text-black border border-gray-300 w-full h-12 placeholder:text-slate-300"
        />
        <span className="absolute top-12 right-0 p-2 text-sm text-slate-300">
          0/50
        </span>
      </div>

      <div className="relative flex flex-col gap-2">
        <label className="block text-sm text-[rgba(0,0,0,0.85)] dark:text-white">
          Topic
        </label>
        <TextArea
          placeholder="provide your audience"
          className="rounded-sm resize-none block text-sm text-black border border-gray-300 w-full h-12 placeholder:text-slate-300"
        />
        <span className="absolute top-12 right-0 p-2 text-sm text-slate-300">
          0/50
        </span>
      </div>

      <div className="relative flex flex-col gap-2">
        <label className="block text-sm text-[rgba(0,0,0,0.85)] dark:text-white">
          Target Audience
        </label>
        <TextArea
          placeholder="provide your audience"
          className="rounded-sm resize-none block text-sm text-black border border-gray-300 w-full h-12 placeholder:text-slate-300"
        />
        <span className="absolute top-12 right-0 p-2 text-sm text-slate-300">
          0/50
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex gap-1 items-center text-sm text-[rgba(0,0,0,0.85)] dark:text-white">
          Tone
          <IoIosInformationCircleOutline className="inline-block text-slate-400" />
        </label>
        <Select
          className="w-full rounded-sm text-base h-10"
          name="tone"
          placeholder="Select tone"
          options={[
            { value: "Adventurous" },
            { value: "Analytical" },
            { value: "Appreciative" },
            { value: "Assertive" },
            { value: "Awestruck" },
            { value: "Bold" },
            { value: "Candid" },
            { value: "Casual" },
            { value: "Cautionary" },
            { value: "Compassionate" },
            { value: "Confident" },
            { value: "Conversational" },
            { value: "Convincing" },
            { value: "Cooperative" },
            { value: "Critical" },
            { value: "Curious" },
            { value: "Dramatic" },
            { value: "Empatic" },
            { value: "Encouraging" },
            { value: "Enthusiastic" },
            { value: "Excited" },
            { value: "Earnest" },
            { value: "Formal" },
            { value: "Friendly" },
            { value: "Funny" },
            { value: "Grumpy" },
            { value: "Humble" },
            { value: "Humorous" },
            { value: "Informal" },
            { value: "Informative" },
            { value: "Inspirational" },
            { value: "Joyful" },
            { value: "Luxurious" },
            { value: "Motivating" },
            { value: "Neutral" },
            { value: "Optimistic" },
            { value: "Passionate" },
            { value: "Professional" },
            { value: "Relaxed" },
            { value: "Sarcastic" },
            { value: "Secretive" },
            { value: "Surprised" },
            { value: "Thoughtful" },
            { value: "Urgent" },
            { value: "Witty" },
            { value: "Worried" },
          ]}
        />
      </div>

      <div className="flex items-center justify-between">
        <Button className="text-gray focus:outline-none text-sm sm:w-auto px-5 py-2.5 rounded-sm">
          Skip Intro
        </Button>

        <Button
          type="button"
          className={`text-gray bg-gray-100 focus:outline-none font-medium text-sm sm:w-auto px-5 py-2.5 rounded-sm ${
            isgenerate === true ? "bg-navblue text-white" : ""
          }`}
          onClick={() => setGenerate(true)}
        >
          Generate Intro
        </Button>
      </div>
    </form>
  );
};

export default WriterForm;
