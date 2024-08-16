import { FaSpinner } from "react-icons/fa";

const LoadingSpinner = () => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-white bg-opacity-70 backdrop-blur-sm"></div>
        <FaSpinner className="relative text-4xl text-blue-500 animate-spin" />
      </div>
    </>
  );
};

export default LoadingSpinner;
