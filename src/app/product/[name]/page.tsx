import React from "react";

type Props = {
  params: { name: string };
};

const Product = (props: Props) => {
  return <div>This is product named {props.params.name}</div>;
};

export default Product;
