import Atropos from "atropos/react";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white";
  color?: string; // Tailwind text color (e.g., "text-red-500")
  bgColor?: string; // Tailwind bg color (e.g., "bg-blue-500")
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  color = "",
  bgColor = "",
  type = "button",
  onClick,
  ...props
}) => {
  const baseStyles = "px-4 py-2 lg:px-8 lg:py-3 cursor-pointer rounded-lg font-medium transition-all h-full";

  const variants: Record<string, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    white: "bg-gray-50 text-blue-600 hover:bg-gray-100",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border-2 border-blue-600 text-blue-600 font-semibold hover:bg-gray-100",
  };

  return (
    <>
    <Atropos className="my-atropos" shadow={false} highlight={false} >
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${color} ${bgColor} ${className}`}
      {...props}
    >
      {children}
    </button>
    </Atropos>
    </>
  );
};

export default Button;
