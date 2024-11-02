import { useState } from "react";
import Mailbox from "../assets/ui/Mailbox";
import Modal from "./Modal";

const EmailVerification = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section>
      {showModal ? (
        <Modal />
      ) : (
        <div className="mt-[30px] flex h-[500px] w-[400px] flex-col items-center justify-center px-[40px] text-center">
          <span>
            <Mailbox />
          </span>
          <h2 className="font-merchant text-[40px] leading-[1.5]">
            Verify Your Email
          </h2>
          <p className="mb-[30px] px-[20px] text-[14px] font-light text-[#262626]">
            We just sent you a verification link to verify your account
            information. Click the link in the email to continue{" "}
          </p>
          <span className="text-[12px] font-light text-[#6E6E6E]">
            No email yet?{" "}
            <span onClick={()=> setShowModal(true)} className="cursor-pointer font-medium text-ginger-red">
              Resend Email
            </span>{" "}
          </span>
        </div>
      )}
    </section>
  );
};

export default EmailVerification;
