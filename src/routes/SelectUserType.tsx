import { useState } from "react";
import Bag from "../assets/ui/Bag";
import Tag from "../assets/ui/Tag";
import PillButton from "../components/PillButton";
import { useDocumentTitle } from "../resources/Resources";
const SelectUserType = () => {
  const [userType, setUserType] = useState<string | null>(null);

  useDocumentTitle("Ginger | Onboarding")
  return (
    <div className="flex h-[600px] w-[480px] flex-col items-center justify-center ">
      <h1 className="font-merchant text-[33px]">Let’s get started!</h1>
      <p className="text-[13px] font-light text-[#262626]">
        {" "}
        Select your preferred user type
      </p>

      <div className="flex mt-[50px] mb-[70px]">
        <span
          onClick={() => setUserType("buyer")}
          className={`mr-[10px] flex h-[158px] w-[170px] cursor-pointer flex-col items-center justify-center rounded-[10px] border-[#E5E2E1] p-[30px] font-medium uppercase transition-all duration-300 ${userType === "buyer" ? "bg-[#374151] text-white hover:scale-[1]": "hover:scale-[1.1]"} border-[1px] border-solid`}
        >
          {" "}
          {<Bag color={userType === "buyer" ? "white" : "black"} />} buyer
        </span>
        <span
          onClick={() => setUserType("supplier")}
          className={`ml-[10px] flex h-[158px] w-[170px] cursor-pointer flex-col items-center justify-center rounded-[10px] border-[#E5E2E1] p-[30px] font-medium uppercase transition-all  duration-300 ${userType === "supplier" ? "bg-[#374151] text-white hover:scale-[1]": "hover:scale-[1.1]"} border-[1px] border-solid`}
        >
          {" "}
          {<Tag color={userType === "supplier" ? "white" : "black"} />}supplier
        </span>
      </div>

        <PillButton name="Continue" paddingY="py-[20px]" disabled={userType === null?  true : false} href={userType === "buyer"? "buyer-onboarding":"supplier-onboarding" }/>
    </div>
  );
};

export default SelectUserType;
