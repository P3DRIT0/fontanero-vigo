'use client' 
import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  href: string;
  className?: string;
}

export const Button = ({ text, href, className = "" }: ButtonProps) => {
  return (
    <Link
      to={href}
      className={`px-6 py-3 rounded-lg font-bold transition-colors ${className}`}
    >
      {text}
    </Link>
  );
};