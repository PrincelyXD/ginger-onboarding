import Checked from "../assets/ui/Checked"
import Unchecked from "../assets/ui/Unchecked"
import { SelectOptionsInterface, userOptionsInterface } from "../interfaces/Interface"

const SelectOptions = ({optionState,optionStateName, optionName, setOption}:SelectOptionsInterface) => {

const setSelectState =()=>{
setOption((prevValue: userOptionsInterface) => {
    return {...prevValue, [optionStateName]: !optionState  }
})
}


  return (
    <div>
      <div onClick={setSelectState} className=" text-[15px] h-[50px]  flex items-center border-solid border-b cursor-pointer">
        <span className="mx-[10px]">
      { optionState?  <Checked bodyFill="#ff4623"/>: <Unchecked bodyFill="#ff4623"/>} </span> {optionName} </div>
    </div>
  )
}

export default SelectOptions
