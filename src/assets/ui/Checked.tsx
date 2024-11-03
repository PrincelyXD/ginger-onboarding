import { CheckedSvgColor } from "../../interfaces/Interface"


const Checked = ({bodyFill}:CheckedSvgColor) => {
  return (
    <svg className="mx-[5px]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill={bodyFill}/>
    <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke={bodyFill}/>
    <path d="M11.3332 5.5L6.74984 10.0833L4.6665 8" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
  )
} 

export default Checked
