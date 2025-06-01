import * as React from "react";
import ReactIconSvg from "../svgs/ReactIcon.svg";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const ReactIcon: React.FC<IconProps> = ({ size = 24, ...props }) => {
  return <ReactIconSvg width={size} height={size} {...props} />;
};

export default ReactIcon;