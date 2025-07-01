import type React from "react";

interface ButtonProps {
    children : React.ReactNode;
    className?: string;
    onClick?: () => void
}

const Button = ({children, className, onClick} : ButtonProps) => {
  return (
    <button onClick={onClick} className={`px-6 py-3 rounded-full outline-none cursor-pointer relative border-transparent overflow-hidden border bg-violet-600 ${className}`}>
        {children}
    </button>
  )
}

export default Button