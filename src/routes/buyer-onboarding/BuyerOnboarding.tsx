import { useState } from "react"
import ChevDown from "../../assets/ui/ChevDown"
import PillButton from "../../components/PillButton"
import BuyerRegistrationForm from "./BuyerRegistrationForm"
import { useDocumentTitle } from "../../resources/Resources"



const BuyerOnboarding = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [selection, setSelection] = useState<string | null>(null)
    const [hideDropDown, setHideDropDown] = useState<boolean>(false)

    useDocumentTitle("Buyer Onboarding | Ginger")


    const setDescription =(value:string)=>{
      setSelection(value)
      setOpen(false)
      }
      
      const showForm = ()=>{
        setHideDropDown(prevValue => !prevValue)
      }
      

  return (
    
<section>
   
   {hideDropDown ? (<BuyerRegistrationForm/>) : (
   <div className="flex h-[610px] w-[480px] flex-col items-center ">
        <h1 className="font-merchant text-[33px]">Let’s get started!</h1>
         <p className="text-[13px] font-light text-[#262626]">
           {" "}
           Select your preferred user type
         </p>
   
         <div onClick={()=> setOpen(prev => !prev)} className={ ` ${open? "h-[450px]": "h-[50px]"} text-[13px] px-[15px] font-light text-[#262626]  cursor-pointer mt-[40px] mb-[40px] transition-all duration-500 ease-in-out w-full bg-white rounded-[8px] overflow-hidden`}>
              <ul>
               <h2 className=" font-semibold flex items-center justify-between py-[15px]">{ selection? selection: 'What best describes you?'  } <span><ChevDown/></span></h2>
                       <li onClick={(e)=> {e.stopPropagation(); setDescription("Salon")}} className="py-[13px] border-solid border-b hover:bg-slate-100 transition-colors duration-100  ">Salon</li>
                       <li onClick={(e)=> {e.stopPropagation(); setDescription("Beauty Spa")}} className="py-[13px] border-solid border-b hover:bg-slate-100 transition-colors duration-100 ">Beauty Spa</li>
                       <li onClick={(e)=> {e.stopPropagation(); setDescription("Medical Aesthetics Clinic")}} className="py-[13px] border-solid border-b hover:bg-slate-200 transition-colors duration-100 ">Medical Aesthetics Clinic</li>
                       <li onClick={(e)=> {e.stopPropagation(); setDescription("Beauty Professional")}} className="py-[13px] border-solid border-b hover:bg-slate-100 transition-colors duration-100 ">Beauty Professional</li>
                       <li onClick={(e)=> {e.stopPropagation(); setDescription("Retail Shop")}} className="py-[13px] border-solid border-b hover:bg-slate-100 transition-colors duration-100 ">Retail Shop</li>
                       <li onClick={(e)=> {e.stopPropagation(); setDescription("Pharmacy")}} className="py-[13px] border-solid border-b hover:bg-slate-100 transition-colors duration-100 ">Pharmacy</li>
                       <li onClick={(e)=> {e.stopPropagation(); setDescription("Hospital")}} className="py-[13px] border-solid border-b hover:bg-slate-100 transition-colors duration-100 ">Hospital</li>
                       <li  onClick={(e)=> {e.stopPropagation(); setDescription("Other")}} className="py-[13px]  hover:bg-slate-200 transition-colors duration-100">Other</li>
              </ul>
   
             
         </div>
       
       <div onClick={showForm}   className={`w-full ${selection === null && "pointer-events-none  cursor-not-allowed"}`}><PillButton name="Continue" disabled={selection !== null? false : true} paddingY="py-[10px]" href="."/> </div> 
       </div>
   )}
     
  
      
      

  
</section>
   
  )
}

export default BuyerOnboarding
