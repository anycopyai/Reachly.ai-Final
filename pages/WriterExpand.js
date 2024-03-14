import React, { useState } from "react";

const WriterExpand = () => {
  const [isIntroActive, setIsIntroActive] = useState(0);

  const writerCard = [
    {
      label: "Draft 1",
      text: "Fitness journey, FitLife, all-in-one fitness companion, beginner, seasoned pro, app, guide, personalized workout plans, track progress, motivated community",
    },
    {
      label: "Draft 2",
      text: "Fitness journey, FitLife, all-in-one fitness companion, beginner, seasoned pro, app, guide, personalized workout plans, track progress, motivated community",
    },
    {
      label: "Draft 3",
      text: "Fitness journey, FitLife, all-in-one fitness companion, beginner, seasoned pro, app, guide, personalized workout plans, track progress, motivated community",
    },
    {
      label: "Draft 4",
      text: "Fitness journey, FitLife, all-in-one fitness companion, beginner, seasoned pro, app, guide, personalized workout plans, track progress, motivated community",
    },
  ];

  return (
    <div className="flex flex-col gap-6 mt-6 mb-10 md:w-11/12">
      <p className="text-sm text-[#00000073]">
        Select any of the below results to apply on your writer content
      </p>
      {writerCard?.map((item, index) => {
        return (
          <div
            key={index}
            className={`p-6 flex flex-col gap-6 rounded-[26px] ${
              isIntroActive === 1 ? "bg-[#D3E3FD]" : "bg-[#F9FAFE]"
            }`}
            onClick={() => setIsIntroActive(1)}
          >
            <div>
              <span
                className={`text-black text-sm font-medium py-1 px-3 rounded-full ${
                  isIntroActive === 1
                    ? "bg-[#0B56D0] text-white"
                    : "bg-[#E9EAEE] text-black"
                }`}
              >
                {item.label}
              </span>
            </div>
            <p className="text-sm text-black">{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WriterExpand;
