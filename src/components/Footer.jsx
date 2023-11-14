const Footer = () => {
  return (
    <footer className="align-element pb-16 text-white">
      {/* A footer with 5 columns with the first column span upto 2 column. Each column have heading ane sub buttons. */}

      <div className="grid grid-cols-5 gap-8 mb-12">
        <div className="col-span-2 pr-24">
          <h1 className="text-4xl font-bold text-justify">
            Etiam et id tincidunt faucibus mollis a sociis pretium fermentum
            quis magna faucibus lacus.
          </h1>
          <p className="text-gray-500"></p>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-4">Marketplace</h1>
          <ul className="text-gray-200 flex flex-col gap-4">
            <li>Home</li>
            <li>Activity</li>
            <li>Discover</li>
            <li>Learn More</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-4">Company</h1>
          <ul className="text-gray-200 flex flex-col gap-4">
            <li>About Us</li>
            <li>Service</li>
            <li>Portfolio</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-4">Contact</h1>
          <ul className="text-gray-200 flex flex-col gap-4">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Email</li>
          </ul>
        </div>
      </div>
      {/* I want horizantal row with border top of 4 px */}
      <hr className="border-t-4 border-gray-300" />
      {/* I want 2 columns with 1st column span upto 2 columns */}
      <div className="flex justify-between mt-8">
        {/* one div for social logos and one for copyright */}
        <div className="flex gap-4 mt-4">
          <img
            src="https://www.computerhope.com/jargon/i/instagram.png"
            alt=""
            className="w-10 h-10"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/768px-Facebook_icon.svg.png"
            alt=""
            className="w-10 h-10"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/220px-Logo_of_Twitter.svg.png"
            alt=""
            className="w-10 h-10"
          />
        </div>
        <p className="text-gray-200 mt-4">© 2023 All Rights Reserved</p>
      </div>
    </footer>
  );
};
export default Footer;
