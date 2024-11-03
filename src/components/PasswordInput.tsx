import { useState, useId } from "react";
import ViewPasswordSvg from "../assets/ui/ViewPasswordSvg";
import ViewOff from "../assets/ui/ViewOff";
import ProgressBar from "./ProgressBar";
import Checked from "../assets/ui/Checked";
import Unchecked from "../assets/ui/Unchecked";
interface TextInputProps {
  inputName: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  inputInteraction:boolean
setInputInteraction: Function
}

const PasswordInput = ({
  inputName,
  label,
  onChange,
  value,
  inputInteraction,
  setInputInteraction,
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(false)

    const id = useId();
  const isError = inputInteraction && value === "";



  const hasUppercase = (str: string): boolean => /[A-Z]/.test(str);
  const hasSpecialCharacter = (str: string): boolean => /[^a-zA-Z0-9]/.test(str);
  const hasNumber = (str: string): boolean => /\d/.test(str);


    
  return (
    <section className="w-full mb-[10px] relative z-[5]">
         <div className={`${isError ? "border-[1px] border-[red] border-solid": "border-[1px] border-white"} bg-white  transition-all duration-500 relative mb-[10px] flex h-[55px] w-full rounded-t-lg   items-center`}>
       <label
          className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 transform px-[5px] transition-all duration-300 ${isFocused || value || isError ? " top-[-1px] bg-white text-[12px] rounded-t-lg" : "text-[13px] text-[#6E6E6E]"}`}
          htmlFor={`${id}-${inputName}`}
        >
       <span className={`${isError && "text-[red]"}`}>{ label}</span> 
        </label>
        
   <span onClick={()=>{setIsVisible(prevValue => !prevValue)} } className="absolute right-[15px] cursor-pointer"> {isVisible? <ViewPasswordSvg/>: <ViewOff/>} </span>
      <input
        type={isVisible? "text": "password"}
        id={`${id}-${inputName}`}
        name={inputName}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {setIsFocused(false); setInputInteraction(true)}}
        required
        value={value}
        onChange={onChange}
        className={`h-[45px] w-full rounded-t-[5px] border-none bg-white px-4 text-[15px] text-black outline-none`}
      />
    </div>  

    <div className="flex flex-col ">
        <span className="text-[12px] text-[#6E6E6E]">Password strength</span>
        <div className="flex w-full justify-between my-2">
        <span className="text-white"> { value.length >= 8? <ProgressBar color="#03C161"/>:  <ProgressBar color="white"/>} </span>
        <span className="text-white"> { hasUppercase(value)? <ProgressBar color="#03C161"/>:  <ProgressBar color="white"/>} </span>
        <span className="text-white"> { hasSpecialCharacter(value)&& hasNumber(value)? <ProgressBar color="#03C161"/>:  <ProgressBar color="white"/>} </span>
        </div>
    </div>

    <div className=" text-[#6E6E6E] text-[13px]">
        <span className=" flex items-center font-light mb-[5px] ml-[-5px] "> {value.length >= 8? <Checked bodyFill="#03C161"/>: <Unchecked bodyFill="#6E6E6E"/>} Minimum of 8 characters</span>
        <span className=" flex items-center font-light mb-[5px] ml-[-5px] "> {hasUppercase(value)? <Checked bodyFill="#03C161"/>: <Unchecked bodyFill="#6E6E6E"/>} One UPPERCASE character</span>
        <span className=" flex items-center font-light mb-[5px] ml-[-5px] "> { hasSpecialCharacter(value)&& hasNumber(value)? <Checked bodyFill="#03C161"/>: <Unchecked bodyFill="#6E6E6E"/>} A number and a unique character</span>
    </div>
    </section>
   
  );
};

export default PasswordInput;
