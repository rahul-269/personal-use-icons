import * as React from "react";
import MobileSuccessSvg from "../svgs/MobileSuccess.svg";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const MobileSuccess: React.FC<IconProps> = ({ size = 24, ...props }) => {
  return <MobileSuccessSvg width={size} height={size} {...props} />;
};

export default MobileSuccess;