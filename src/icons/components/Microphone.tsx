import * as React from "react";
import MicrophoneSvg from "../svgs/Microphone.svg";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Microphone: React.FC<IconProps> = ({ size = 24, ...props }) => {
  return <MicrophoneSvg width={size} height={size} {...props} />;
};

export default Microphone;