import * as React from "react";
import SvelteSvg from "../svgs/Svelte.svg";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Svelte: React.FC<IconProps> = ({ size = 24, ...props }) => {
  return <SvelteSvg width={size} height={size} {...props} />;
};

export default Svelte;