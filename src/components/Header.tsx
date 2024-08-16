import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
      <div className="container mx-auto px-4 py-10">
        <div className="text-white text-center text-5xl font-extrabold tracking-wide">
          <Link href={"/"}>
            <span className="block mb-4">MoviesVerse</span>
          </Link>
          <span className="block text-lg text-gray-400 font-medium">
            Your Ultimate Movie Destination
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
