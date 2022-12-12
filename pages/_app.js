import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className=" bg-[#202023] flex flex-col items-center justify-center">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
