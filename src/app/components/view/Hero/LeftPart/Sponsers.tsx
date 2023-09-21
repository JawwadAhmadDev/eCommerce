import Image from "next/image";
import React from "react";

type Props = {};

const Sponsers = (props: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* sponser 1 */}
      <Image
        src="/sponsers/1.png"
        alt="sponser1"
        width="100"
        height="100"
      ></Image>
      {/* sponser 2 */}
      <Image
        src="/sponsers/2.png"
        alt="sponser2"
        width="100"
        height="100"
      ></Image>
      {/* sponser 3 */}
      <Image
        src="/sponsers/3.png"
        alt="sponser3"
        width="100"
        height="100"
      ></Image>
      {/* sponser 4 */}
      <Image
        src="/sponsers/4.png"
        alt="sponser4"
        width="100"
        height="100"
      ></Image>
    </div>
  );
};

export default Sponsers;
