import React, { useState } from "react";

const WriterNext = () => {
  const [isIntroActive, setIsIntroActive] = useState(0);

  return (
    <div className="flex flex-col gap-6 mt-6 mb-10 md:w-11/12">
      <p className="text-sm text-[#00000073]">
        Select any of the below results to apply on your writer content
      </p>
      <div
        className={`p-6 flex flex-col gap-6 rounded-[26px] ${
          isIntroActive === 0 ? "bg-[#D3E3FD]" : "bg-[#F9FAFE]"
        }`}
        onClick={() => setIsIntroActive(0)}
      >
        <div>
          <span
            className={`text-black text-sm font-medium py-1 px-3 rounded-full ${
              isIntroActive === 0
                ? "bg-[#0B56D0] text-white"
                : "bg-[#E9EAEE] text-black"
            }`}
          >
            Draft 1
          </span>
        </div>
        <p className="text-sm text-black">
          Fitness journey, FitLife, all-in-one fitness companion, beginner,
          seasoned pro, app, guide, personalized workout plans, track progress,
          motivated community
        </p>
      </div>
      <div
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
            Draft 2
          </span>
        </div>
        <p className="text-sm text-black">
          Fitness journey, FitLife, all-in-one fitness companion, beginner,
          seasoned pro, app, guide, personalized workout plans, track progress,
          motivated community
        </p>
      </div>
      <div
        className={`p-6 flex flex-col gap-6 rounded-[26px] ${
          isIntroActive === 2 ? "bg-[#D3E3FD]" : "bg-[#F9FAFE]"
        }`}
        onClick={() => setIsIntroActive(2)}
      >
        <div>
          <span
            className={`text-black text-sm font-medium py-1 px-3 rounded-full ${
              isIntroActive === 2
                ? "bg-[#0B56D0] text-white"
                : "bg-[#E9EAEE] text-black"
            }`}
          >
            Draft 3
          </span>
        </div>
        <p className="text-sm text-black">
          Fitness journey, FitLife, all-in-one fitness companion, beginner,
          seasoned pro, app, guide, personalized workout plans, track progress,
          motivated community
        </p>
      </div>
      <div
        className={`p-6 flex flex-col gap-6 rounded-[26px] ${
          isIntroActive === 3 ? "bg-[#D3E3FD]" : "bg-[#F9FAFE]"
        }`}
        onClick={() => setIsIntroActive(3)}
      >
        <div>
          <span
            className={`text-black text-sm font-medium py-1 px-3 rounded-full ${
              isIntroActive === 3
                ? "bg-[#0B56D0] text-white"
                : "bg-[#E9EAEE] text-black"
            }`}
          >
            Draft 4
          </span>
        </div>
        <p className="text-sm text-black">
          Fitness journey, FitLife, all-in-one fitness companion, beginner,
          seasoned pro, app, guide, personalized workout plans, track progress,
          motivated community
        </p>
      </div>
    </div>
  );
};

export default WriterNext;
