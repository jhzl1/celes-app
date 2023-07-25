import { SpinIcon } from "assets/icons"
import clsx from "clsx"

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  isLoading?: boolean
  variant?: "normal" | "outline"
  size?: "sm" | "md"
}

export const Button = ({
  children,
  isLoading,
  size = "md",
  disabled,
  variant = "normal",
  className,
  onClick,
  ...rest
}: Props) => {
  const _onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!isLoading && onClick) {
      onClick(event)
    }
  }

  return (
    <button
      className={clsx(className, "rounded-md transition-all duration-200", {
        "bg-primary text-white hover:bg-[#393F4C]": variant === "normal",
        "bg-white text-primary border border-primary hover:bg-neutral-100": variant === "outline",
        "px-2 py-1 text-sm": size === "sm",
        "px-4 py-2 text-base": size === "md",
        "cursor-default": isLoading,
      })}
      disabled={disabled}
      onClick={_onClick}
      {...rest}
    >
      <span
        className={clsx("block w-full text-center", {
          "min-h-[20px] leading-5": size === "sm",
          "min-h-[24px] leading-6": size === "md",
        })}
      >
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <SpinIcon
              className={clsx("animate-spin", {
                "w-4 h-4": size === "sm",
                "w-5 h-5": size === "md",
              })}
            />
          </div>
        ) : (
          children
        )}
      </span>
    </button>
  )
}
