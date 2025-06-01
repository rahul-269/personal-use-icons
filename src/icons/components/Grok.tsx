import * as React from "react";
import GrokSvg from "../svgs/Grok.svg";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Grok: React.FC<IconProps> = ({ size = 24, ...props }) => {
  return <GrokSvg width={size} height={size} {...props} />;
};

export default Grok;