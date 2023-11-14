const TitleHeader = () => {
  return (
    <div className="flex justify-between text-white">
      <h1 className="text-3xl ">Discover</h1>
      <div className="flex gap-8">
        <button className="text-white text-lg font-semibold hover:text-black hover:bg-white px-4 py-1 rounded-lg transition-all duration-300 ">
          Category
        </button>
        <button className="text-white text-lg font-semibold hover:text-black hover:bg-white px-4 py-1 rounded-lg transition-all duration-300 ">
          Cheapest
        </button>
        <button className="text-white text-lg font-semibold hover:text-black hover:bg-white px-4 py-1 rounded-lg transition-all duration-300 ">
          Newest
        </button>
        <button className="bg-blue-600 text-white -lg font-semibold hover:text-white hover:bg-black px-6 py-1 rounded-lg transition-all duration-300">
          Filter
        </button>
      </div>
    </div>
  );
};
export default TitleHeader;
