import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ title, images, id }) => {
  return (
    <Link href={`/${id}`} className="card shadow-xl">
      <Image src={images} width={300} height={300} alt="..." />
      <h2 className="font-bold md:text-xl text-md p-4">{title}</h2>
    </Link>
  );
};

export default AnimeList;
