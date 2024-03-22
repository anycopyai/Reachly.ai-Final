import { Modal } from "antd";
import Link from "next/link";

const WelcomeModal = ({ modalOpen, modalClose }) => {
  const handleModalClose = () => {
    modalClose(!modalOpen);
  };

  return (
    <Modal
      centered
      open={modalOpen}
      onCancel={handleModalClose}
      footer={false}
      width={800}
    >
      <div className="flex flex-col gap-6 w-full">
        <div className="flex gap-4 items-center">
          <img src="/images/carla-user.png" alt="user" />
          <p className="text-sm text-[#00000073]">Carla from Anycopy AI</p>
        </div>
        <div className="md:w-3/4 mx-auto flex flex-col gap-6">
          <div className="flex items-center justify-center gap-3">
            <h2 className="text-lg md:text-3xl font-medium text-navblue">
              Welcome to Anycopy!
            </h2>
            <img src="/images/icon-celebration.svg" alt="celebration" />
          </div>
          <h4 className="text-sm md:text-base font-medium text-black text-center">
            Hey user! We're so exited to join your landing page journey.
          </h4>
          <ul className="px-5 md:px-11 text-sm md:text-base flex flex-col gap-3 list-disc">
            <li>
              <span className="text-black font-medium">Get Started :</span>
              Check out your
              <Link href="/">
                <a className="text-navblue">launch checklist</a>
              </Link>
              to help you get the most out of yourself
            </li>
            <li>
              <span className="text-black font-medium">Get help :</span> Head
              over to your
              <Link href="/">
                <a className="text-navblue">onboarding guide</a>
              </Link>
              - it has everything you need to know about getting started with
              Anycopy.
            </li>
          </ul>
          <h4 className="text-sm md:text-base font-medium text-black mb-7 flex items-center justify-center gap-3">
            High- converting campaigns are just around the corner. Chat soon
            <img src="/images/icon-hello.svg" alt="hello" />
          </h4>
        </div>
      </div>
    </Modal>
  );
};

export default WelcomeModal;
