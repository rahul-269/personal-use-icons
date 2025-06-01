import * as React from "react";
import GithubSvg from "../svgs/Github.svg";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Github: React.FC<IconProps> = ({ size = 24, ...props }) => {
  return <GithubSvg width={size} height={size} {...props} />;
};

export default Github;