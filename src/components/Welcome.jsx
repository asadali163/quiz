const Welcome = () => {
  return (
    <article className="align-element pt-16 pb-24 text-white">
      {/* I want to return the hero component with the text on left and image on right */}
      <div className="flex justify-between items-center gap-12">
        {/* I want to return the text on left */}
        <div className="flex flex-col justify-center items-start w-1/2">
          <h1 className="text-5xl font-bold mb-4">
            Discover, collect, and charity in extraordinary NFT marketplace
          </h1>
          <p className="text-gray-100 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
            elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin
            eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet.
            Duis dapibus diam vel metus tempus vulputate.
          </p>
          <div className="flex justify-between gap-8">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Explore
            </button>
            <button className=" px-4 py-2 rounded-md border">Create</button>
          </div>
        </div>
        {/* I want to return the image on right */}
        <div className="w-1/2">
          <img
            src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-4/6 h-4/6 rounded-lg"
          />
        </div>
      </div>
    </article>
  );
};
export default Welcome;
