import * as React from "react";
import Chef1Svg from "../svgs/Chef1.svg";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Chef1: React.FC<IconProps> = ({ size = 24, ...props }) => {
  return <Chef1Svg width={size} height={size} {...props} />;
};

export default Chef1;