import * as React from "react";
import TailwindSvg from "../svgs/Tailwind.svg";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Tailwind: React.FC<IconProps> = ({ size = 24, ...props }) => {
  return <TailwindSvg width={size} height={size} {...props} />;
};

export default Tailwind;