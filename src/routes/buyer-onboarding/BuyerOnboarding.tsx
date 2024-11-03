import { useState } from "react";
import ChevDown from "../../assets/ui/ChevDown";
import PillButton from "../../components/PillButton";
import UserRegistrationForm from "../../components/UserRegistrationForm";
import { useDocumentTitle } from "../../resources/Resources";

const BuyerOnboarding = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selection, setSelection] = useState<string | null>(null);
  const [hideDropDown, setHideDropDown] = useState<boolean>(false);

  useDocumentTitle("Buyer Onboarding | Ginger");

  const setDescription = (value: string) => {
    setSelection(value);
    setOpen(false);
  };

  const showForm = () => {
    setHideDropDown((prevValue) => !prevValue);
  };

  return (
    <section>
      {hideDropDown ? (
        <UserRegistrationForm />
      ) : (
        <div className="flex h-[610px] w-[480px] flex-col items-center">
          <h1 className="font-merchant text-[33px]">Let’s get started!</h1>
          <p className="text-[13px] font-light text-[#262626]">
            {" "}
            Select your preferred user type
          </p>

          <div
            onClick={() => setOpen((prev) => !prev)}
            className={` ${open ? "h-[450px]" : "h-[50px]"} mb-[40px] mt-[40px] w-full cursor-pointer overflow-hidden rounded-[8px] bg-white px-[15px] text-[13px] font-light text-[#262626] transition-all duration-500 ease-in-out`}
          >
            <ul>
              <h2 className="flex items-center justify-between py-[15px] font-semibold">
                {selection ? selection : "What best describes you?"}{" "}
                <span>
                  <ChevDown />
                </span>
              </h2>
              <li
                onClick={(e) => {
                  e.stopPropagation();
                  setDescription("Salon");
                }}
                className="border-b border-solid py-[13px] transition-colors duration-100 hover:bg-slate-100"
              >
                Salon
              </li>
              <li
                onClick={(e) => {
                  e.stopPropagation();
                  setDescription("Beauty Spa");
                }}
                className="border-b border-solid py-[13px] transition-colors duration-100 hover:bg-slate-100"
              >
                Beauty Spa
              </li>
              <li
                onClick={(e) => {
                  e.stopPropagation();
                  setDescription("Medical Aesthetics Clinic");
                }}
                className="border-b border-solid py-[13px] transition-colors duration-100 hover:bg-slate-200"
              >
                Medical Aesthetics Clinic
              </li>
              <li
                onClick={(e) => {
                  e.stopPropagation();
                  setDescription("Beauty Professional");
                }}
                className="border-b border-solid py-[13px] transition-colors duration-100 hover:bg-slate-100"
              >
                Beauty Professional
              </li>
              <li
                onClick={(e) => {
                  e.stopPropagation();
                  setDescription("Retail Shop");
                }}
                className="border-b border-solid py-[13px] transition-colors duration-100 hover:bg-slate-100"
              >
                Retail Shop
              </li>
              <li
                onClick={(e) => {
                  e.stopPropagation();
                  setDescription("Pharmacy");
                }}
                className="border-b border-solid py-[13px] transition-colors duration-100 hover:bg-slate-100"
              >
                Pharmacy
              </li>
              <li
                onClick={(e) => {
                  e.stopPropagation();
                  setDescription("Hospital");
                }}
                className="border-b border-solid py-[13px] transition-colors duration-100 hover:bg-slate-100"
              >
                Hospital
              </li>
              <li
                onClick={(e) => {
                  e.stopPropagation();
                  setDescription("Other");
                }}
                className="py-[13px] transition-colors duration-100 hover:bg-slate-200"
              >
                Other
              </li>
            </ul>
          </div>

          <div
            onClick={showForm}
            className={`w-full ${selection === null && "pointer-events-none cursor-not-allowed"}`}
          >
            <PillButton
              name="Continue"
              disabled={selection !== null ? false : true}
              paddingY="py-[10px]"
              href="."
            />{" "}
          </div>
        </div>
      )}
    </section>
  );
};

export default BuyerOnboarding;
