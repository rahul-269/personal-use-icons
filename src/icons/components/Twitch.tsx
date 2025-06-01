import * as React from "react";
import TwitchSvg from "../svgs/Twitch.svg";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Twitch: React.FC<IconProps> = ({ size = 24, ...props }) => {
  return <TwitchSvg width={size} height={size} {...props} />;
};

export default Twitch;