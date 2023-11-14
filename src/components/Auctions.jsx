import Card from "./Card";
import Title from "./Title";

const Auctions = () => {
  return (
    <section className="align-element">
      <Title title="Auctions" />
      {/* give me a div with 4 card in each row with tailwind css. */}
      <div className="grid grid-cols-4 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        {/* <Card />
        <Card /> */}
      </div>
    </section>
  );
};
export default Auctions;
