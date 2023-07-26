import clsx from "clsx"
import { useEffect, useState } from "react"

type Props = {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">

export const InputFilter = ({
  value: initialValue,
  onChange,
  debounce = 500,
  className,
  ...props
}: Props) => {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value])

  return (
    <input
      {...props}
      value={value}
      className={clsx(className, "p-2 rounded-md border outline-none")}
      onChange={({ target }) => {
        if (!target.validity.valid) return
        setValue(target.value)
      }}
    />
  )
}
