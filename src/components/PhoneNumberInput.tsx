import { useState, useId } from "react";
interface TextInputProps {
inputName: string;
inputType: string;
label: string;
onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
value: string;
prefix: string
inputInteraction:boolean
setInputInteraction: Function
}



const PhoneNumberInput = ({
    inputName,
    inputType,
    label,
    onChange,
    value,
    prefix,
    inputInteraction,
    setInputInteraction,
}:TextInputProps) => {
    const [isFocused, setIsFocused] = useState(false);

    const isError = inputInteraction && value === "";

    const id = useId()
  return (
    <div className={` ${isError ? "border-[1px] border-[red] border-solid": "border-[1px] border-white"} bg-white  transition-all duration-500 relative mb-[15px] flex h-[60px] w-full rounded-t-lg  items-center`}>
       <label
          className={`pointer-events-none absolute  top-1/2 -translate-y-1/2 transform px-[5px] transition-all duration-300 ${isFocused || value ? " top-[1px] left-3  bg-white text-[12px] rounded-t-lg" : "text-[13px] left-[70px] text-[#6E6E6E]"}`}
          htmlFor={`${id}-${inputName}`}
        >
         <span className={`${isError && isFocused? "text-[red]": "text-[#6E6E6E]"} transition-colors duration-300`}> { isFocused || value ? label: "801 2345 678" }</span>
        </label>
          <span className="absolute left-[20px]">
            {prefix}
          </span>
        <input
          type={inputType}
          id={`${id}-${inputName}`}
          name={inputName}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {setIsFocused(false); setInputInteraction(true)}}
          required
          value={value}
          onChange={onChange}
          className={` h-[55px] pl-[70px] w-full rounded-t-[5px] bg-white px-4 text-[15px] text-black border-none outline-none`}
        />
    </div>
  )
}

export default PhoneNumberInput;
