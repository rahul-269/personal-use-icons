import * as React from "react";
import NextjsSvg from "../svgs/Nextjs.svg";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Nextjs: React.FC<IconProps> = ({ size = 24, ...props }) => {
  return <NextjsSvg width={size} height={size} {...props} />;
};

export default Nextjs;