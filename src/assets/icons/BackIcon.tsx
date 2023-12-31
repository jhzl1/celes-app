interface Props {
  className?: string
}

export const BackIcon = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M9 14l-4 -4l4 -4"></path>
      <path d="M5 10h11a4 4 0 1 1 0 8h-1"></path>
    </svg>
  )
}
