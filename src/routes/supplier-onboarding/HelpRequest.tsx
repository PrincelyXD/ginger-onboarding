import { useEffect, useState } from "react";
import SelectOptions from "../../components/SelectOptions";
import {
  SupplierProfile,
  userOptionsInterface,
} from "../../interfaces/Interface";

interface HelpRequestInterface {
  setHelpRequestData: Function;
}

const HelpRequest = ({ setHelpRequestData }: HelpRequestInterface) => {
  const [userOptions, setUserOptions] = useState<userOptionsInterface>({
    introduceMyBrandToNewMarket: false,
    expandCustomerReach: false,
    kickstartDistributorJourney: false,
    streamlineExistingBusinessOperation: false,
  });

  useEffect(() => {
    const updateHelpRequestData = () => {
      setHelpRequestData((prevData: SupplierProfile) => {
        return {
          ...prevData,
          helpRequest: userOptions,
        };
      });
    };

    updateHelpRequestData();
  }, [userOptions]);

  return (
    <div className="mb-[20px]">
    <p className="text-[13px] mb-[10px] font-light text-[#262626]"> How can Ginger help you? </p>
    <div className="w-full bg-white h-fit rounded-[8px]">
           <SelectOptions optionName="Introduce my brand to a new market" optionStateName="introduceMyBrandToNewMarket" optionState={userOptions.introduceMyBrandToNewMarket} setOption={setUserOptions} />     
           <SelectOptions optionName="Expand my customer reach" optionStateName="expandCustomerReach" optionState={userOptions.expandCustomerReach} setOption={setUserOptions} />     
           <SelectOptions optionName="Kickstart my distributor journey" optionStateName="kickstartDistributorJourney" optionState={userOptions.kickstartDistributorJourney} setOption={setUserOptions} />     
           <SelectOptions optionName="Streamline my existing business operations" optionStateName="streamlineExistingBusinessOperation" optionState={userOptions.streamlineExistingBusinessOperation} setOption={setUserOptions} />     
    </div>
    </div>
  );
};

export default HelpRequest;
