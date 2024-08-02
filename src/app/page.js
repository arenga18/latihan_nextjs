import Link from "next/link";
import AnimeList from "./components/AnimeList";
import Search from "./components/Search";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const anime = await response.json();

  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Top Anime</h1>
        <Link href={"/topAnime"}>See All</Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 py-5">
        {anime.data.map((res) => {
          return (
            <AnimeList
              title={res.title}
              images={res.images.webp.image_url}
              id={res.mal_id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
