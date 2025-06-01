import * as React from "react";
import NestjsSvg from "../svgs/Nestjs.svg";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Nestjs: React.FC<IconProps> = ({ size = 24, ...props }) => {
  return <NestjsSvg width={size} height={size} {...props} />;
};

export default Nestjs;