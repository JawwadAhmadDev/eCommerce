import React from "react";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";

type Props = {};

const OffBanners = (props: Props) => {
  return (
    <div className="flex flex-col justify-between gap-4">
      <Banner1 />
      <Banner2 />
    </div>
  );
};

export default OffBanners;
