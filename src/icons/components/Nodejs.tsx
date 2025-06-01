import * as React from "react";
import NodejsSvg from "../svgs/Nodejs.svg";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Nodejs: React.FC<IconProps> = ({ size = 24, ...props }) => {
  return <NodejsSvg width={size} height={size} {...props} />;
};

export default Nodejs;