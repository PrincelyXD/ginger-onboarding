
import PillButton from "../../components/PillButton"
import { revenueStatus, supplierTypes, useDocumentTitle } from "../../resources/Resources"
import { useState } from "react"
import DropdownSelect from "./DropdownSelect";
import HelpRequest from "./HelpRequest";
import { SupplierProfile } from "../../interfaces/Interface";
import UserRegistrationForm from "../../components/UserRegistrationForm";



const SupplierOnboarding = () => {
  const [SupplierProfile, setSupplierProfile] = useState<SupplierProfile>({
    description: "",
    revenueStatus:"",
    helpRequest: null
  })
  const [hideDropDown, setHideDropDown] = useState<boolean>(false)

  useDocumentTitle("Supplier Onboarding | Ginger")

    const showForm = ()=>{
      setHideDropDown(prevValue => !prevValue)
    }

  
const proceedConditions = ()=>{
  if(SupplierProfile.helpRequest){
    const description = SupplierProfile.description
  const revenueStatus = SupplierProfile.revenueStatus
  // const helpRequest = Object.values(SupplierProfile.helpRequest).every(value => value === false)

   return description && revenueStatus 

  }

}

    
    return (
    
      <section className="">
         
         {hideDropDown ? (<UserRegistrationForm/>) : (
         <div className="flex h-[610px] w-[480px] flex-col  ">
              <h1 className="font-merchant text-[33px] mb-[15px]">Let’s get started!</h1>

             <DropdownSelect value={SupplierProfile.description} setValue= {setSupplierProfile} items={supplierTypes} dropDownType= "description" label="What best describes you?" />
             <DropdownSelect value={SupplierProfile.revenueStatus} setValue= {setSupplierProfile} items={revenueStatus} dropDownType= "revenueStatus" label="Select your current revenue status "/>
             <HelpRequest  setHelpRequestData={setSupplierProfile} />

             <p className="text-[12px] mt-[15px] mb-[20px] font-light">For buyers, Ginger provides a curated marketplace where you can find the best beauty and fashion products from trusted wholesalers around the world.</p>
             <div onClick={showForm}   className={`w-full ${ !proceedConditions() && "pointer-events-none  cursor-not-allowed"}`}> <PillButton name="Continue" disabled={ proceedConditions()? false : true} paddingY="py-[10px]" href="."/> </div> 
             </div>
         )}
           
        
            
            
      
        
      </section>
         
        )
      }


export default SupplierOnboarding
