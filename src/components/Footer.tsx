const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-gray-400 py-10 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center text-gray-500 text-sm mt-6">
            &copy; {new Date().getFullYear()} MoviesVerse. All rights reserved.
          </div>

          <div className="text-center text-gray-500 text-sm mt-2">
            Made with <span className="text-red-500 text-lg">❤️</span> by{" "}
            <span className="text-white font-semibold">Pardeep</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
