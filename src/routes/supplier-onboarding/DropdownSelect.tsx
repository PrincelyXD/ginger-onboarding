import { useState } from "react";
import ChevDown from "../../assets/ui/ChevDown";

interface DropdownSelect {
  value: string;
  items: string[]
  setValue: Function;
dropDownType: string;
label: string
}
interface SupplierProfile {
  description: string;
  revenueStatus: string;
  helpRequest: string;
}

const DropdownSelect = ({ value, setValue, items, dropDownType, label }: DropdownSelect) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selection, setSelection] = useState<string | null>(null);

  const selectValue = (name: string, selectionValue: string) => {
    setValue((prevData: SupplierProfile) => {
      return { ...prevData, [name]: selectionValue };
    });
    setSelection(selectionValue);
    setOpen(false);
  };


  return (
    <section>
      { selection && <p className="text-[13px] font-light text-[#262626]"> {label}  </p>}
               <div onClick={()=> setOpen(prev => !prev)} className={ ` ${open? "h-[270px] overflow-scroll": "h-[50px]"} text-[13px] px-[15px] font-light text-[#262626]  cursor-pointer mt-[10px] mb-[20px] transition-all duration-500 ease-in-out w-full bg-white rounded-[8px] overflow-hidden relative`}>
     
                    <ul> 
                     <h2 className="sticky top-0 flex w-full items-center justify-between bg-white py-[15px] text-[15px] font-medium">{ value? selection: label  } <span><ChevDown/></span></h2>
                            {items.map((item, idx) => {
                                return <li key={idx} onClick={(e)=> {e.stopPropagation(); selectValue(dropDownType,item)}} className="py-[13px] border-solid border-b hover:bg-slate-100 transition-colors duration-100 ">{item}</li>
                            })}
                            
                    </ul>
      
               </div>
    </section>
  );
};


export default DropdownSelect;
