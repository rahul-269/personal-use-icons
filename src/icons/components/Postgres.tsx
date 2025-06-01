import * as React from "react";
import PostgresSvg from "../svgs/Postgres.svg";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Postgres: React.FC<IconProps> = ({ size = 24, ...props }) => {
  return <PostgresSvg width={size} height={size} {...props} />;
};

export default Postgres;