import * as React from "react";
import House1Svg from "../svgs/House1.svg";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const House1: React.FC<IconProps> = ({ size = 24, ...props }) => {
  return <House1Svg width={size} height={size} {...props} />;
};

export default House1;