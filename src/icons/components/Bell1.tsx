import * as React from "react";
import Bell1Svg from "../svgs/Bell1.svg";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Bell1: React.FC<IconProps> = ({ size = 24, ...props }) => {
  return <Bell1Svg width={size} height={size} {...props} />;
};

export default Bell1;
