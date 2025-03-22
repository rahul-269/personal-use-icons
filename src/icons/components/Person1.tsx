import * as React from "react";
import Person1Svg from "../svgs/Person1.svg";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Person1: React.FC<IconProps> = ({ size = 24, ...props }) => {
  return <Person1Svg width={size} height={size} {...props} />;
};

export default Person1;
