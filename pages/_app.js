import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="h-screen  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#1149a1]/80">
        <div className="h-full">
          <Navbar />
          <Hero />
          <motion.div
            className=" bg-[#202023] flex flex-col items-center justify-center"
            key={router.route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            variants={{
              initialState: {
                opacity: 0,
              },
              animateState: {
                opacity: 1,
              },
              exitState: {
                opacity: 0,
              },
            }}
          >
            <Component {...pageProps} />
            <Footer />
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default MyApp;
