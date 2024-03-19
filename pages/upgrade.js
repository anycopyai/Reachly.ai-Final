import { FiArrowLeft } from "react-icons/fi";
import Sidebar from "../components/sidebar";
import { Button } from "antd";
import { IoCheckmarkSharp } from "react-icons/io5";
import { useRouter } from "next/router";
import Link from "next/link";

const priceCard = [
  {
    planType: "Basic",
    type: "Basic",
    price: "$0 USD / month",
    btnText: "Your Free Trail Completed",
    btnType: "disabled",
    priceList: [
      { text: "30+ Templates" },
      { text: "50 Credits per month" },
      { text: "Writer with 7-Days Trial" },
      { text: "Access to 30+ templates" },
      { text: "URL to Ad feature (Limited)" },
      { text: "Chrome Extension" },
      { text: "Desktop App (Limited Features)" },
      { text: "Built-in Grammarly" },
      { text: "Access to writer" },
    ],
    actionText: "Have an existing plan check",
    actionLink: "Billing",
  },
  {
    planType: "Standard",
    type: "Standard Plan",
    price: "$20 USD / month",
    btnText: "Buy Now",
    btnType: "success",
    priceList: [
      { text: "300 Credits per month" },
      { text: "Access to 45+ templates" },
      { text: "3 Projects" },
      { text: "Writer" },
      { text: "URL to Ad feature (Enhanced)" },
      { text: "Chrome Extension" },
      { text: "Full Desktop App" },
      { text: "Built-in Grammarly" },
      { text: "Priority Support" },
      { text: "Community Access" },
    ],
    actionText: "",
    actionLink: "Manage Subscription Plan",
  },
  {
    planType: "Pro",
    type: "Pro Plan",
    price: "$25 USD / month",
    btnText: "Buy Now",
    btnType: "info",
    priceList: [
      { text: "Unlimited Credits" },
      { text: "Access to 90+ templates" },
      { text: "Unlimited Projects" },
      { text: "Writer" },
      { text: "URL to Ad feature (Advanced Workflow)" },
      { text: "Chrome Extension" },
      { text: "Full Desktop App" },
      { text: "Built-in Grammarly" },
      { text: "Copy Insights (Coming soon)" },
      { text: "Priority Support" },
      { text: "Community Access" },
    ],
    actionText: "",
    actionLink: "Price billed annually",
  },
];

// const basicList = [
//   { text: "30+ Templates" },
//   { text: "50 Credits per month" },
//   { text: "Writer with 7-Days Trial" },
//   { text: "Access to 30+ templates" },
//   { text: "URL to Ad feature (Limited)" },
//   { text: "Chrome Extension" },
//   { text: "Desktop App (Limited Features)" },
//   { text: "Built-in Grammarly" },
//   { text: "Access to writer" },
// ];

// const standardList = [
//   { text: "300 Credits per month" },
//   { text: "Access to 45+ templates" },
//   { text: "3 Projects" },
//   { text: "Writer" },
//   { text: "URL to Ad feature (Enhanced)" },
//   { text: "Chrome Extension" },
//   { text: "Full Desktop App" },
//   { text: "Built-in Grammarly" },
//   { text: "Priority Support" },
//   { text: "Community Access" },
// ];

// const proList = [
//   { text: "Unlimited Credits" },
//   { text: "Access to 90+ templates" },
//   { text: "Unlimited Projects" },
//   { text: "Writer" },
//   { text: "URL to Ad feature (Advanced Workflow)" },
//   { text: "Chrome Extension" },
//   { text: "Full Desktop App" },
//   { text: "Built-in Grammarly" },
//   { text: "Copy Insights (Coming soon)" },
//   { text: "Priority Support" },
//   { text: "Community Access" },
// ];

const Upgrade = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col h-fit ml-0 md:ml-20">
      <Sidebar />
      <div className="p-6">
        <div className="flex flex-grow items-center gap-5">
          <div className="flex items-center gap-6">
            <span
              onClick={() => router.push("/Browse")}
              className="text-3xl cursor-pointer"
            >
              <FiArrowLeft />
            </span>
            <p className="text-sm md:text-xl text-[#262626] font-medium">
              Upgrade
            </p>
          </div>
        </div>
      </div>

      <div className="p-2">
        <div className="text-center">
          <h2 className="text-black text-4xl font-semibold">
            Get more done with Premium features
          </h2>
          <p className="text-base text-black mt-3">
            Pick the right plan for you
          </p>
          <div className="flex gap-4 mt-5 justify-center">
            <Button className="h-auto py-1 text-white text-sm rounded-sm bg-[#0033FF] md:min-w-[160px]">
              Monthly
            </Button>
            <Button className="rounded-sm text-black opacity-80 text-sm py-1 border border-[#D9D9D9] md:min-w-[160px]">
              Annual
            </Button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 w-3/6 mx-auto mt-10 mb-10 border border-[#00000040]">
        {priceCard?.map((item, index) => {
          return (
            <div
              className="border-r-1 last:border-none border-[rgba(0,0,0,0.25)] py-6 px-8 flex flex-col gap-4"
              key={index}
            >
              <div>
                <h4 className="text-xl text-black mb-6 font-medium">
                  {item.type}
                </h4>
                <p className="font-medium text-black text-base">{item.price}</p>
              </div>
              <div>
                <Button
                  className={`bg-[#F5F5F5] border border-[#D9D9D9] px-6 py-2 text-base text-[rgba(0,0,0,0.25)] h-auto`}
                >
                  {item.btnText}
                </Button>
              </div>
              <ul className="h-full">
                {item.priceList?.map((el, index) => {
                  return (
                    <li
                      key={index}
                      className="flex items-center py-3 gap-2 text-xs text-[rgba(0,0,0,0.85)]"
                    >
                      <IoCheckmarkSharp className="w-4 h-4 text-[#00000073]" />
                      {el.text}
                    </li>
                  );
                })}
              </ul>
              <h4 className="text-sm text-[#323232]">
                {item.actionText}{" "}
                <Link href="/">
                  <a className="underline font-semibold">{item.actionLink}</a>
                </Link>
              </h4>
            </div>
          );
        })}
        {/* <div className="border border-[rgba(0,0,0,0.25)] py-6 px-8 rounded-2xl flex flex-col gap-4">
          <div>
            <h4 className="text-xl text-black mb-6 font-medium">Basic</h4>
            <p className="font-medium text-black text-base">$0 USD / month</p>
          </div>
          <div>
            <Button className="bg-[#F5F5F5] border border-[#D9D9D9] px-6 py-2 text-base text-[rgba(0,0,0,0.25)] h-auto">
              Your Free Trail Completed
            </Button>
          </div>
          <ul>
            {priceCard?.map((list, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center py-3 gap-2 text-xs text-[rgba(0,0,0,0.85)]"
                >
                  <IoCheckmarkSharp className="w-4 h-4 text-[#0033FF]" />
                  {list.text}
                </li>
              );
            })}
          </ul>
        </div> */}
        {/* <div className="border-2 border-[#0033FF] py-6 px-8 rounded-2xl flex flex-col gap-4 shadow-[-7px,7px,25px,0px,#00000040]">
          <div>
            <h4 className="text-2xl text-[#0033FF] mb-6 font-medium">
              Standard Plan
            </h4>
            <p className="font-medium text-black text-base mb-4">Essential</p>
            <h1>
              <span className="font-semibold text-black text-4xl mr-2">
                $49
              </span>
              <span className="text-base text-black font-medium">USD /</span>
              <span className="text-xs font-medium ml-1">month</span>
            </h1>
          </div>
          <div>
            <span class="rounded-sm bg-[rgba(250,204,21,0.85)] px-2 py-1 text-xs text-white">
              Most Popular
            </span>
          </div>
          <Button className="bg-[#0033FF] rounded-sm border border-[0033FF] w-full py-3 text-base text-white h-auto">
            Buy Now
          </Button>
          <ul>
            {standardList?.map((list, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center py-3 gap-2 text-xs text-[rgba(0,0,0,0.85)]"
                >
                  <IoCheckmarkSharp />
                  {list.text}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="border-2 border-[rgba(0,0,0,0.25)] py-6 px-8 rounded-2xl flex flex-col gap-4 shadow-[-7px 7px 25px 0px #00000040]">
          <div>
            <h4 className="text-2xl text-[#0033FF] mb-6 font-medium">
              Pro Plan
            </h4>
            <p className="font-medium text-black text-base mb-4">Essential</p>
            <h1>
              <span className="font-semibold text-black text-4xl mr-2">
                $99
              </span>
              <span className="text-base text-black font-medium">USD /</span>
              <span className="text-xs font-medium ml-1">month</span>
            </h1>
          </div>
          <Button className="bg-[#0033FF] rounded-sm border border-[0033FF] w-full py-3 text-base text-white h-auto">
            Buy Now
          </Button>
          <ul>
            {proList?.map((list, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center py-3 gap-2 text-xs text-[rgba(0,0,0,0.85)]"
                >
                  <IoCheckmarkSharp />
                  {list.text}
                </li>
              );
            })}
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Upgrade;
