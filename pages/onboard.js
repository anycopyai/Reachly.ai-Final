import React, { useContext, useEffect, useState } from "react";
import { Button, Steps } from "antd";
import OnboardForm from "../components/form/OnboardForm";
import WelcomeModal from "../components/common/WelcomeModal";
import { UserContext } from "../contexts/UserContext";
import { useRouter } from "next/router";

const Onboard = () => {
  const [isFormStep, setIsFormStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useContext(UserContext);
  const router = useRouter();

//   console.log(22222,user)
//   console.log(33333,user?.metadata?.creationTime === user?.metadata?.lastSignInTime)
//   useEffect(() => {
//      if (user){
//       if(user?.metadata?.creationTime !== user?.metadata?.lastSignInTime)
//       router.push('/browse');
//     }
//   }, [user, router]);

  const openWelcomeModal = () => {
    setIsModalOpen(true);
  };

  const closeWelcomeModal = () => {
    setIsModalOpen(false);
    router.push('/browse');
  };

  const handleContinue = () => {
    setIsFormStep(isFormStep + 1);
    if (isFormStep === 3) {
      setIsFormStep(1);
      openWelcomeModal();
    }
  };

  const renderStepForm = () => {
    switch (isFormStep) {
      case 1:
        return <OnboardForm isOnboardForm1 />;
      case 2:
        return <OnboardForm isOnboardForm2 />;
      case 3:
        return <OnboardForm isOnboardForm3 />;
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center flex-col p-6">
      <div className="md:w-2/6 mx-auto md:mt-44">
        <div className="flex flex-col gap-11">
          <div className="flex justify-center gap-4 items-center">
            <img src="/images/logo.png" alt="logo" className="w-8" />
            <h4 className="text-2xl text-black font-medium">Anycopy.ai</h4>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <div className="w-full">
              <Steps
                className="custom-step-box"
                current={isFormStep}
                items={[
                  {
                    title: "",
                  },
                  {
                    title: "",
                  },
                  {
                    title: "",
                  },
                ]}
              />
            </div>
            <h4>How can we help you</h4>
          </div>

          {renderStepForm()}

          <Button
            type="button"
            className="text-white bg-navblue hover:bg-blue-700 hover:text-white focus:outline-none text-base px-5 py-2.5 text-center w-full rounded-sm"
            onClick={handleContinue}
            // onClick={isModalOpen}
          >
            {isFormStep === 2
              ? "Almost There"
              : isFormStep === 3
              ? "I'm ready to start writing"
              : "Continue"}
          </Button>
        </div>
      </div>

      <WelcomeModal modalOpen={isModalOpen} modalClose={closeWelcomeModal} />
    </div>
  );
};

export default Onboard;
