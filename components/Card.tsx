import Image from "next/image";
import React from "react";

function Card({
  image,
  title,
  description,
  link,
}: {
  image: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="px-2 py-1 bg-white w-fit rounded-lg ml-6 mt-3">
      <h3 className="text-xl font-bold">{title}</h3>
      <Image src={image} width={300} height={200} objectFit="cover" />
      <p>{description}</p>
      <a href={link}>{link}</a>
    </div>
  );
}

export default Card;
