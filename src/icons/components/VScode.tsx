import * as React from "react";
import VScodeSvg from "../svgs/VScode.svg";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const VScode: React.FC<IconProps> = ({ size = 24, ...props }) => {
  return <VScodeSvg width={size} height={size} {...props} />;
};

export default VScode;