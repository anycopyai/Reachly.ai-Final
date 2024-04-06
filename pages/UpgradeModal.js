import { useState } from "react";
import Link from "next/link";
import { Button, Modal } from "antd";
import { IoCheckmarkSharp } from "react-icons/io5";

const priceCard = [
  {
    planType: "Basic",
    type: "Basic",
    price: "Free Forever",
    priceAnnual: "Free Forever",
    btnText: "Your Free Trail Completed",
    btnType: "disabled",
    priceList: [
      { text: "30+ Templates" },
      { text: "20 Credits/ Month" },
      { text: "Writer with 2-Days Trial" },
      { text: "URL to Ad feature (Limited)" },
      { text: "AI Chat (2000 Words)" },
      { text: "Chrome Extension" },
      { text: "Desktop App" },
      { text: "Built-in Grammarly" },
      { text: "Email Support" },
    ],
    actionText: "Have an existing plan check",
    actionLink: "Billing",
  },
  {
    planType: "Standard",
    type: "Standard Plan",
    price: "$49 USD / month",
    priceAnnual: "$39 USD / Month",
    btnText: "Buy Now",
    btnType: "success",
    priceList: [
      { text: "Unlimited Credits" },
      { text: "Access to 45+ templates" },
      { text: "3 Projects" },
      { text: "AI Writer" },
      { text: "URL to Ad feature" },
      { text: "AI Chat" },
      { text: "Chrome Extension" },
      { text: "Full Desktop App" },
      { text: "Built-in Grammarly" },
      { text: "Priority Support" },
    ],
    actionText: "",
    actionLink: "Manage Subscription Plan",
  },
  {
    planType: "Pro",
    type: "Pro Plan",
    price: "$99 USD / month",
    priceAnnual: "$89 USD / Month",
    btnText: "Buy Now",
    btnType: "info",
    priceList: [
      { text: "Unlimited Credits" },
      { text: "Access to 90+ templates" },
      { text: "Unlimited Projects" },
      { text: "AI Writer" },
      { text: "URL to Ad feature" },
      { text: "AI Chat" },
      { text: "Chrome Extension" },
      { text: "Desktop App" },
      { text: "Built-in Grammarly" },
      { text: "Workflow (Coming soon)" },
      { text: "Priority Support" },
    ],
    actionText: "",
    actionLink: "Price billed annually",
  },
];

const UpgradeModal = ({ modalOpen, modelClose }) => {
  const [isAnnualPlan, setIsAnnualPlan] = useState(false);

  const handleModalClose = () => {
    modelClose(!modalOpen);
  };
  return (
    <Modal
      centered
      open={modalOpen}
      onCancel={handleModalClose}
      footer={false}
      className="upgrade-modal"
      width={1000}
      mask={{
        style: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <div className="flex flex-col h-fit">
        <div className="md:p-2 md:pt-6">
          <div className="text-center">
            <h2 className="text-grey text-xl md:text-4xl font-semibold">
              Get more done with Premium features
            </h2>
            <p className="text-sm md:text-base text-grey mt-3">
              Pick the right plan for you
            </p>
            <div className="flex gap-4 mt-8 justify-center">
              <Button
                className={`h-auto py-2 px-6 md:py-1 text-sm rounded-sm md:min-w-[160px] ${
                  isAnnualPlan === true
                    ? "bg-white border-black text-black"
                    : "bg-navblue border-navblue text-white"
                }`}
                onClick={() => setIsAnnualPlan(false)}
              >
                Monthly
              </Button>
              <Button
                className={`rounded-sm text-sm py-2 px-6 md:py-1 border  md:min-w-[160px] ${
                  isAnnualPlan === true
                    ? "bg-navblue border-navblue text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setIsAnnualPlan(true)}
              >
                Annual
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 mx-auto gap-4 md:gap-0 mt-6 md:border md:border-[#00000040] md:bg-white w-full rounded-md overflow-hidden">
          {priceCard?.map((item, index) => {
            return (
              <div
                className="bg-white border md:border-0 md:border-r-1 md:last:border-none border-[rgba(0,0,0,0.25)] py-4 md:py-6 px-4 md:px-6 md:pb-12 flex flex-col gap-4 rounded-md"
                key={index}
              >
                <div className="flex flex-col gap-1">
                  <h4 className="text-lg md:text-xl text-black font-medium flex flex-col md:flex-row items-start md:items-center gap-2">
                    <div className="flex md:items-center gap-2">
                      {item.planType === "Standard" && (
                        <img src="images/icon-star-green.svg" alt="star" />
                      )}
                      {item.type}
                    </div>
                    {item.planType === "Standard" && (
                      <span className="bg-[#EAB308] text-xs text-white px-2 py-1 rounded-sm flex items-center justify-center">
                        Most Popular
                      </span>
                    )}
                  </h4>
                  <p className="font-medium text-[rgba(0,0,0,0.45)] text-base">
                    {isAnnualPlan === true
                      ? `${item.priceAnnual}`
                      : `${item.price}`}
                  </p>
                </div>
                <div>
                  <Button
                    className={`border px-6 py-2 text-sm md:text-base h-auto w-full font-bold ${
                      item.btnType === "disabled" &&
                      "bg-[#F5F5F5] border-[#D9D9D9] hover:!border-[#D9D9D9] text-[#00000040] hover:!text-[#00000040]"
                    } ${
                      item.btnType === "success" &&
                      "bg-[#34A853] border-[#34A853] text-white hover:!text-white hover:!border-[#34A853]"
                    } ${
                      item.btnType === "info" &&
                      "bg-navblue border-navblue text-white"
                    }`}
                  >
                    {item.btnText}
                  </Button>
                </div>
                <ul className="h-full flex flex-col gap-2">
                  {item.priceList?.map((el, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-[rgba(0,0,0,0.85)]"
                      >
                        <IoCheckmarkSharp className="w-4 h-4 text-[#00000073]" />
                        {el.text}
                      </li>
                    );
                  })}
                </ul>
                <h4 className="text-sm text-[#323232] flex gap-1">
                  {item.actionText}
                  <Link href="/">
                    <a className="underline font-semibold">{item.actionLink}</a>
                  </Link>
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};

export default UpgradeModal;
