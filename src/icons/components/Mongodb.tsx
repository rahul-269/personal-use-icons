import * as React from "react";
import MongodbSvg from "../svgs/Mongodb.svg";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Mongodb: React.FC<IconProps> = ({ size = 24, ...props }) => {
  return <MongodbSvg width={size} height={size} {...props} />;
};

export default Mongodb;