import * as React from "react";
import Circle1Svg from "../svgs/Circle1.svg";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Circle1: React.FC<IconProps> = ({ size = 24, ...props }) => {
  return <Circle1Svg width={size} height={size} {...props} />;
};

export default Circle1;