import React from "react";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";

type Props = {};

const OffProductsBanners = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
      <Banner1 />
      <Banner2 />
    </div>
  );
};

export default OffProductsBanners;
