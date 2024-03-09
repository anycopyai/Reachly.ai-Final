import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import { Button, Input, Modal } from "antd";
import Link from "next/link";
const Settings = () => {
  const [showresult, setshowresult] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [updatePassword, setUpdatePassword] = useState(false);
  const [changeEmail, setChangeEmail] = useState(false);
  const [sendCode, setSendCode] = useState(false);

  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); // Change the threshold as per your requirement
    };
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize); // Add event listener for resizing
    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  const handlePasswordCancel = () => {
    setIsPasswordModalOpen(false);
  };
  const handleEmailCancel = () => {
    setIsEmailModalOpen(false);
  };

  return (
    <div className="flex flex-col h-fit ml-0 md:ml-20">
      <Sidebar />
      <div className="flex flex-grow items-center gap-5 justify-between p-6 pt-3 md:pt-6">
        <div className="flex items-center gap-6">
          <p className="text-sm md:text-xl text-[#262626] font-medium pl-4 md:pl-0">
            Profile Settings
          </p>
        </div>
        <Link href="/upgrade">
          <Button
            type="primary"
            className="bg-white md:bg-[#0033FF] border border-[#D9D9D9] md:border-none shadow-none text-black md:text-white flex items-center px-3 py-2 rounded-sm gap-2"
          >
            <img src="/images/icon-upgrade.svg" className="hidden md:block" />
            <img
              src="/images/icon-upgrade-black.svg"
              className="block md:hidden"
            />
            5 Credits Left
          </Button>
        </Link>
      </div>
      <div className="px-6">
        <div className="flex gap-5 border-b-2 w-full md:mt-4">
          <h1
            onClick={() => setshowresult(false)}
            className={`text-sm text-black font-medium p-2 ${
              !showresult
                ? `text-navblue border-b-2 border-navblue inline-block`
                : ``
            }`}
          >
            Profile
          </h1>
          <h1
            onClick={() => setshowresult(true)}
            className={`text-sm text-black font-medium p-2 ${
              showresult
                ? `text-navblue border-b-2 border-navblue inline-block`
                : ``
            }`}
          >
            Biling
          </h1>
        </div>
        <div className="flex mt-4 md:mt-10">
          <div className="grid grid-cols-12 min-w-full">
            <div
              className={`${
                showresult
                  ? `hidden col-span-12 md:col-span-7 overflow-y-scroll scrollbar-thin`
                  : `col-span-12 overflow-hidden md:col-span-7 md:overflow-y-scroll md:scrollbar-thin`
              }`}
              id="profile"
            >
              <div className="flex flex-col gap-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-[rgba(0,0,0,0.85)] dark:text-white">
                      Name
                    </label>
                    <Input
                      className="w-full rounded-sm text-base h-10 border-[#D9D9D9] hover:border-[#D9D9D9] focus:border-[#D9D9D9] focus:outline-none"
                      placeholder="Alan"
                    />
                  </div>
                </div>
                {changeEmail === false ? (
                  <div className="grid gap-6 md:grid-cols-2 items-end">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-[rgba(0,0,0,0.85)] dark:text-white">
                        Email
                      </label>
                      <Input
                        className="w-full rounded-sm text-base h-10 border-[#D9D9D9] hover:border-[#D9D9D9] focus:border-[#D9D9D9] focus:outline-none"
                        placeholder="altman@gmail.com"
                      />
                    </div>
                    <div className="text-end md:text-start">
                      <Button
                        className="px-7 py-2 border-[#D9D9D9] rounded-sm text-base text-[rgba(0,0,0,0.85)]"
                        onClick={() => {
                          setChangeEmail(true);
                          setIsEmailModalOpen(true);
                        }}
                      >
                        Change Email
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="grid gap-6 md:grid-cols-3 items-end">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-[rgba(0,0,0,0.85)] dark:text-white">
                          Email
                        </label>
                        <Input
                          className="w-full rounded-sm text-base h-10 border-[#D9D9D9] hover:border-[#D9D9D9] focus:border-[#D9D9D9] focus:outline-none"
                          placeholder="altman@gmail.com"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-[rgba(0,0,0,0.85)] dark:text-white">
                          New Email
                        </label>
                        <Input
                          className="w-full rounded-sm text-base h-10 border-[#D9D9D9] hover:border-[#D9D9D9] focus:border-[#D9D9D9] focus:outline-none"
                          placeholder="altman@gmail.com"
                        />
                      </div>
                      <div className="text-end md:text-start">
                        <Button
                          className="px-7 py-2 border-[#D9D9D9] rounded-sm text-base text-[rgba(0,0,0,0.85)] min-w-[150px]"
                          onClick={() => setSendCode(true)}
                        >
                          {sendCode === false ? (
                            <span>Send Code</span>
                          ) : (
                            <span>Resend Code</span>
                          )}
                        </Button>
                      </div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3 items-end">
                      <div></div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-[rgba(0,0,0,0.85)] dark:text-white">
                          Enter verification code
                        </label>
                        <Input
                          className="w-full rounded-sm text-base h-10 border-[#D9D9D9] hover:border-[#D9D9D9] focus:border-[#D9D9D9] focus:outline-none"
                          placeholder="Enter code "
                        />
                      </div>
                      <div className="text-end md:text-start">
                        <Button
                          className={`px-7 py-2 rounded-sm text-base border min-w-[150px] ${
                            sendCode === true
                              ? "text-white bg-[#0033FF] border-[#0033FF]"
                              : "text-[rgba(0,0,0,0.85)] bg-[#F5F5F5] border-[#D9D9D9]"
                          }`}
                          onClick={() => {
                            setChangeEmail(false);
                            setSendCode(false);
                          }}
                        >
                          Update Email
                        </Button>
                      </div>
                    </div>
                  </>
                )}
                {changePassword === false ? (
                  <div className="grid gap-6 md:grid-cols-2 items-end">
                    <div className="flex items-center justify-between md:block py-5 md:py-0">
                      <label className="block mb-2 text-sm font-medium text-[rgba(0,0,0,0.85)] dark:text-white">
                        Password
                      </label>
                      <Button
                        className="px-7 py-2 border-[#D9D9D9] rounded-sm text-base text-[rgba(0,0,0,0.85)]"
                        onClick={() => {
                          setChangePassword(true);
                          setIsPasswordModalOpen(true);
                        }}
                      >
                        Change Password
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="grid gap-6 md:grid-cols-3 items-end">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-[rgba(0,0,0,0.85)] dark:text-white">
                        Old Password
                      </label>
                      <Input
                        className="w-full rounded-sm text-base h-10 border-[#D9D9D9] hover:border-[#D9D9D9] focus:border-[#D9D9D9] focus:outline-none"
                        placeholder="altman@gmail.com"
                      />
                    </div>
                    <div>
                      {updatePassword === false ? (
                        <label className="block mb-2 text-sm font-medium text-[rgba(0,0,0,0.85)] dark:text-white">
                          New Password
                        </label>
                      ) : (
                        ""
                      )}
                      <Input
                        className="w-full rounded-sm text-base h-10 border-[#D9D9D9] hover:border-[#D9D9D9] focus:border-[#D9D9D9] focus:outline-none"
                        placeholder="altman@gmail.com"
                        onClick={() => setUpdatePassword(true)}
                      />
                    </div>
                    <div className="text-end md:text-start">
                      <Button
                        className={`px-7 py-2 rounded-sm text-base ${
                          updatePassword === true
                            ? "border-[#0033FF] text-white bg-[#0033FF]"
                            : "border-[#D9D9D9] text-[rgba(0,0,0,0.85)] bg-[#F5F5F5]"
                        }`}
                        onClick={() => {
                          setChangePassword(false);
                          setUpdatePassword(false);
                        }}
                      >
                        Update Password
                      </Button>
                    </div>
                  </div>
                )}
              </div>
              <div className="py-6 md:py-10">
                <label className="block mb-2 text-sm font-medium text-[rgba(0,0,0,0.85)] dark:text-white">
                  For queries
                </label>
                <p className="flex items-center gap-1 p-3 text-sm">
                  <span className="text-[rgba(0,0,0,0.25)]">
                    Anything else, email
                  </span>
                  <Link href="/">
                    <a className="text-[#0033FF] underline">help@anycopy.ai</a>
                  </Link>
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-between md:items-center border border-[rgba(0,0,0,0.25)] rounded-sm p-4 md:p-6 gap-4">
                <div className="flex flex-col gap-4 md:gap-6">
                  <h4 className="font-semibold text-sm text-[rgba(0,0,0,0.45)]">
                    Refer A Friend
                  </h4>
                  <p className="text-sm text-[rgba(0,0,0,0.45)]">
                    Earn 30% for referring a friend
                  </p>
                </div>
                <div>
                  <Button className="px-7 py-2 border-[#D9D9D9] rounded-sm text-base text-[rgba(0,0,0,0.85)]">
                    Get your link
                  </Button>
                </div>
              </div>
            </div>
            <div
              className={`${
                !showresult
                  ? `hidden col-span-12 md:col-span-5`
                  : `col-span-12 md:col-span-5`
              }`}
              id="billing"
            >
              <h2>Billing Section</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Change Password Modal */}
      <Modal
        open={isPasswordModalOpen && isMobile}
        footer={null}
        onCancel={handlePasswordCancel}
        maskClosable={false}
        className="setting-action-modal top-0"
        wrapClassName="bg-white"
      >
        <div className="grid gap-6 items-end">
          <div>
            <label className="block mb-2 text-sm font-medium text-[rgba(0,0,0,0.85)] dark:text-white">
              Old Password
            </label>
            <Input
              className="w-full rounded-sm text-base h-10 border-[#D9D9D9] hover:border-[#D9D9D9] focus:border-[#D9D9D9] focus:outline-none"
              placeholder="altman@gmail.com"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-[rgba(0,0,0,0.85)] dark:text-white">
              New Password
            </label>
            <Input
              className="w-full rounded-sm text-base h-10 border-[#D9D9D9] hover:border-[#D9D9D9] focus:border-[#D9D9D9] focus:outline-none"
              placeholder="altman@gmail.com"
              onClick={() => setUpdatePassword(true)}
            />
          </div>
          <div className="text-end md:text-start">
            <Button
              className={`px-7 py-2 rounded-sm text-base ${
                updatePassword === true
                  ? "border-[#0033FF] text-white bg-[#0033FF]"
                  : "border-[#D9D9D9] text-[rgba(0,0,0,0.85)] bg-[#F5F5F5]"
              }`}
              onClick={() => {
                setUpdatePassword(false);
                setIsPasswordModalOpen(false);
              }}
            >
              Update Password
            </Button>
          </div>
        </div>
      </Modal>

      {/* Change Email Modal */}
      <Modal
        open={isEmailModalOpen && isMobile}
        footer={null}
        onCancel={handleEmailCancel}
        maskClosable={false}
        className="setting-action-modal top-0"
        wrapClassName="bg-white"
      >
        <>
          <div className="grid gap-6 md:grid-cols-3 items-end">
            <div>
              <label className="block mb-2 text-sm font-medium text-[rgba(0,0,0,0.85)] dark:text-white">
                Email
              </label>
              <Input
                className="w-full rounded-sm text-base h-10 border-[#D9D9D9] hover:border-[#D9D9D9] focus:border-[#D9D9D9] focus:outline-none"
                placeholder="altman@gmail.com"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-[rgba(0,0,0,0.85)] dark:text-white">
                New Email
              </label>
              <Input
                className="w-full rounded-sm text-base h-10 border-[#D9D9D9] hover:border-[#D9D9D9] focus:border-[#D9D9D9] focus:outline-none"
                placeholder="altman@gmail.com"
              />
            </div>
            <div className="text-end md:text-start">
              <Button
                className="px-7 py-2 border-[#D9D9D9] rounded-sm text-base text-[rgba(0,0,0,0.85)] min-w-[150px]"
                onClick={() => setSendCode(true)}
              >
                {sendCode === false ? (
                  <span>Send Code</span>
                ) : (
                  <span>Resend Code</span>
                )}
              </Button>
            </div>
          </div>
          {sendCode === true ? (
            <div className="grid gap-6 md:grid-cols-3 items-end">
              <div></div>
              <div>
                <label className="block mb-2 text-sm font-medium text-[rgba(0,0,0,0.85)] dark:text-white">
                  Enter verification code
                </label>
                <Input
                  className="w-full rounded-sm text-base h-10 border-[#D9D9D9] hover:border-[#D9D9D9] focus:border-[#D9D9D9] focus:outline-none"
                  placeholder="Enter code "
                />
              </div>
              <div className="text-end md:text-start">
                <Button
                  className={`px-7 py-2 rounded-sm text-base border min-w-[150px] ${
                    sendCode === true
                      ? "text-white bg-[#0033FF] border-[#0033FF]"
                      : "text-[rgba(0,0,0,0.85)] bg-[#F5F5F5] border-[#D9D9D9]"
                  }`}
                  onClick={() => {
                    setChangeEmail(false);
                    setSendCode(false);
                    setIsEmailModalOpen(false);
                  }}
                >
                  Update Email
                </Button>
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      </Modal>
    </div>
  );
};
export default Settings;