import { XIcon } from "assets/icons"
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
    <div className={clsx(className, "p-2 rounded-md border bg-white flex items-center")}>
      <input
        {...props}
        value={value}
        className="outline-none mr-3"
        onChange={({ target }) => {
          if (!target.validity.valid) return
          setValue(target.value)
        }}
      />
      {value && (
        <button className="bg-neutral-300 rounded-full w-5 h-5" onClick={() => setValue("")}>
          <XIcon className="m-auto" />
        </button>
      )}
    </div>
  )
}
