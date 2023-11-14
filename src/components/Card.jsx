const Card = () => {
  return (
    <article className="card text-white">
      <img
        src="https://plus.unsplash.com/premium_photo-1697898008728-9e6a29851321?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // make it round and give some shadow as well.
        className="card-img-top rounded-lg shadow-lg"
        alt="Image"
      />
      <div className="">
        <div className="flex justify-between my-4">
          <h5 className="card-title">Lorem Ipsum</h5>
          <p className="card-text">1.20 Weth</p>
        </div>
        <hr className="border-t-2" />
        <div className="flex justify-between my-4">
          <p className="card-text">
            End in <span className="font-bold">01:34:45</span>
          </p>
          <button
            type="button"
            className=" text-white px-2 rounded border border-gray-200 hover:bg-gray-300 hover:text-black"
          >
            Bid
          </button>
        </div>
      </div>
    </article>
  );
};
export default Card;
