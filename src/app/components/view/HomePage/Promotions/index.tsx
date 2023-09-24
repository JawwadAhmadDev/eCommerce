import React from "react";
import Headings from "./Headings";
import Banners from "./Banners";

type Props = {};

const Promotions = (props: Props) => {
  return (
    <div className="py-16">
      <Headings />
      <Banners />
    </div>
  );
};

export default Promotions;
