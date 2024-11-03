import { CheckedSvgColor } from "../../interfaces/Interface"


const Unchecked =({bodyFill}:CheckedSvgColor) => {
  return (
    <svg className="mx-[5px]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="white"/>
    <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke={bodyFill}/>
    </svg>
    
  )
}

export default Unchecked
