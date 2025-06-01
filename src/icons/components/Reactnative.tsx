import * as React from "react";
import ReactnativeSvg from "../svgs/Reactnative.svg";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Reactnative: React.FC<IconProps> = ({ size = 24, ...props }) => {
  return <ReactnativeSvg width={size} height={size} {...props} />;
};

export default Reactnative;