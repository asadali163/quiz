import Card from "./Card";
import TitleHeader from "./TitleHeader";

const Discover = () => {
  return (
    <section className="align-element my-20 text-white">
      {/* I want the title on the left and the following buttons on right side "Category, Cheapest, Newest, Filter with the filter have active button which has different background from the rest" */}
      <TitleHeader />
      <article className="mt-8">
        <div className="grid grid-cols-4 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </article>
      <div className="mt-16 text-center">
        {/* a load more button in center of the screen */}
        <button className="border-2 border-gray-400 font-semibold hover:text-white hover:bg-black px-6 py-1 rounded-lg transition-all duration-300">
          Load More
        </button>
      </div>
    </section>
  );
};
export default Discover;
