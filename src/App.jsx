import Auctions from "./components/Auctions";
import Discover from "./components/Discover";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Auctions />
      <Discover />
      <Footer />
    </main>
  );
}

export default App;
