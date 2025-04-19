import React from "react";
import NextLink from "next/link";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "default" | "underline";
}

const CustomLink: React.FC<LinkProps> = ({ href, variant = "default", className = "", children, ...props }) => {
  const baseStyles = "text-blue-600 transition-all";
  const variants = {
    default: "hover:text-blue-700",
    underline: "underline hover:text-blue-700",
  };

  return (
    <NextLink href={href} className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </NextLink>
  );
};

export default CustomLink;
