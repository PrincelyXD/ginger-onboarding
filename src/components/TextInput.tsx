import { useState, useId } from "react";
interface TextInputProps {
inputName: string;
inputType: string;
label: string;
onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
value: string;
inputInteraction:boolean
setInputInteraction: Function
}

 
const TextInput = ({
    inputName,
    inputType,
    label,
    onChange,
    value,
    inputInteraction,
    setInputInteraction,
}:TextInputProps) => {
    const [isFocused, setIsFocused] = useState(false);
const id = useId()
const isError = inputInteraction && value === "";
    
  return (
    <div className={`${isError ? "border-[1px] border-[red] border-solid": "border-[1px] border-white"} bg-white  transition-all duration-500 relative mb-[10px] flex h-[55px] w-full rounded-t-lg   items-center`}>
       <label
          className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 transform px-[5px] transition-all duration-300 ${isFocused || value || isError ? " top-[-1px] bg-white text-[12px] rounded-t-lg" : "text-[13px] text-[#6E6E6E]"}`}
          htmlFor={`${id}-${inputName}`}
        >
       <span className={`${isError && "text-[red]"}`}>{ label}</span> 
        </label>
          
        <input
          type={inputType}
          id={`${id}-${inputName}`}
          name={inputName}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {setIsFocused(false); setInputInteraction(true)}}
          required
          value={value}
          onChange={onChange}
          className={`h-[50px] w-full rounded-t-[5px] bg-white px-4 text-[15px] text-black border-none outline-none`}
        />
    </div>
  )
}

export default TextInput
