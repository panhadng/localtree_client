import Image from "next/image";
import React from "react";

interface LogoProps {
  width?: number;
  height?: number;
  textSize?: "sm" | "md" | "lg" | "xl";
  className?: string;
  imageClassName?: string;
}

const Logo: React.FC<LogoProps> = ({
  width = 48,
  height = 48,
  textSize = "lg",
  className = "",
  imageClassName = "mr-2",
}) => {
  const getTextSizeClasses = () => {
    switch (textSize) {
      case "sm":
        return "text-sm";
      case "md":
        return "text-base";
      case "lg":
        return "text-xl";
      case "xl":
        return "text-2xl";
      default:
        return "text-xl";
    }
  };

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/images/logo_2.png"
        alt="LocalTree Logo"
        width={width}
        height={height}
        className={imageClassName}
      />
      <span className={`${getTextSizeClasses()} font-bold text-[#185659]`}>
        Local
      </span>
      <span className={`${getTextSizeClasses()} font-bold text-[#ed8c15] ml-1`}>
        Tree
      </span>
    </div>
  );
};

export default Logo;
