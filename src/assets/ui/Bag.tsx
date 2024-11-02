
interface SvgColor {
  color: string
}
const Bag = ({color}:SvgColor) => {
  return (
    <svg className="transition-colors duration-300" width="35" height="50" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 12.5H35.5L33.8333 35H7.16667L5.5 12.5Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    <path d="M13.833 15.8333V5H27.1663V15.8333" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.833 28.332H27.1663" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}
 
export default Bag
