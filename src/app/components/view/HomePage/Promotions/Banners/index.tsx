import React from "react";
import OffBanners from "./OffBanners";
import OffProductsBanners from "./OffProductsBanners";

type Props = {};

const Banners = (props: Props) => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
      <OffBanners />
      <OffProductsBanners />
    </div>
  );
};

export default Banners;
