interface ProgressBarProps {
  color: string;
}

const ProgressBar = ({color}:ProgressBarProps) => {
  return (
    <svg className="" width="155" height="3" viewBox="0 0 155 3" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 1.5H153" stroke={color} strokeWidth="3" strokeLinecap="round"/>
    </svg>
  )
}

export default ProgressBar
