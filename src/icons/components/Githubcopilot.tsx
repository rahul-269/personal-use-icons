import * as React from "react";
import GithubcopilotSvg from "../svgs/Githubcopilot.svg";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Githubcopilot: React.FC<IconProps> = ({ size = 24, ...props }) => {
  return <GithubcopilotSvg width={size} height={size} {...props} />;
};

export default Githubcopilot;