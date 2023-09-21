import React from "react";
import OffBanners from "./OffBanners";
import OffProductsBanners from "./OffProductsBanners";

type Props = {};

const Banners = (props: Props) => {
  return (
    <div>
      <OffBanners />
      <OffProductsBanners />
    </div>
  );
};

export default Banners;
