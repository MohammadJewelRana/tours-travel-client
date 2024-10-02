/* eslint-disable react/no-unknown-property */
 
const loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
    <div className="loader border-8 border-t-8 border-gray-200 border-t-blue-500 rounded-full w-16 h-16 animate-spin mb-4"></div>
    <h1 className="text-4xl text-gray-700">Loading...</h1>
  </div>
  );
};

export default loading;