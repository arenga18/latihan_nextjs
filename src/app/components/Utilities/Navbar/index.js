import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-violet-300 p-5">
      <div className="flex justify-between items-center">
        <Link href={"/"} className="font-bold text-2xl text-white">
          CuyAnime
        </Link>
        <input placeholder="Search..." className="p-2"></input>
      </div>
    </header>
  );
};

export default Navbar;
