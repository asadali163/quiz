import "../App.css";

const Navbar = () => {
  return (
    <nav className="align-element text-white">
      {/* create a nav bar with logo on left navigation link on middle and create and sing in button on right side */}
      <div className="flex justify-between">
        <div>
          {/* logo */}
          <img
            src="https://static.wixstatic.com/media/219356_4cb296fb0af44be38b59eadf1db0ec73~mv2.png/v1/fit/w_2500,h_1330,al_c/219356_4cb296fb0af44be38b59eadf1db0ec73~mv2.png"
            alt="logo"
            className="w-30 h-20"
          />
        </div>
        <div className="flex space-x-4">
          <a
            href="/"
            className="flex items-center py-5 px-3 text-gray-100 hover:text-gray-300"
          >
            {/* navigation link */}
            Home
          </a>
          <a
            href="/"
            className="flex items-center py-5 px-3 text-gray-100 hover:text-gray-300"
          >
            {/* navigation link */}
            My Profile
          </a>
          <a
            href="/"
            className="flex items-center py-5 px-3 text-gray-100 hover:text-gray-300"
          >
            {/* navigation link */}
            Activity
          </a>

          <a
            href="/"
            className="flex items-center py-5 px-3 text-gray-100 hover:text-gray-300"
          >
            {/* navigation link */}
            How it Works
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="/" className="py-5 px-3">
            {/* create button */}
            Create Account
          </a>
          <a href="/" className="py-5 px-3">
            {/* sign in button */}
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
