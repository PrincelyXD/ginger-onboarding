import { Link } from "react-router-dom"

interface PillButtonInterface {
name: string
href: string
disabled: boolean
paddingY:string
}

const PillButton = ({name, disabled, href, paddingY}:PillButtonInterface) => {
  
  return (
    <Link className={`w-full ${paddingY} flex items-center transition-colors duration-500 justify-center  text-white rounded-full ${disabled? "pointer-events-none  cursor-not-allowed bg-[#FF462361]": "bg-ginger-red"}`}  to={href}><span className={`w-ful `} > {name}  </span> </Link> 
  )
}

export default PillButton
