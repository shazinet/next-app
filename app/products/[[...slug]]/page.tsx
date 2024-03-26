import React from "react";

interface Props {
  params: { slug: string[] };
}

const ProductSlug = ({ params: { slug } }: Props) => {
  return <div>ProductSlug {slug}</div>;
};

export default ProductSlug;
