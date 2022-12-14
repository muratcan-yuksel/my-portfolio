import Link from "next/link";
import Navbar from "../components/Navbar";

const index = () => {
  return (
    <div className="h-screen border w-full md:w-4/6 lg:w-3/6 flex flex-col ">
      <h2 className="underline ">About me</h2>
      <p className="indent-8 my-5">
        Hi! So I have a Master's degree in Semiotics, it's about sign systems,
        and I've learnt programming by myself. So far I've studied and worked in
        Turkey, Hungary, Estonia and France- worked in Belgium plus to that. I
        need to see difference, then I feel calmer. I speak fluent English,
        French and Turkish, can understand some Hungarian and Estonian, read the
        Cyrillic alphabet and find my way in Russian. I like coding. I really
        do. It makes me feel powerful and cool. That's why I do full-stack
        stuff, and web3 too. So I can write NodeJS and then fire a smart
        contract in Solidity and create a UI with EthersJS for instance. Don't
        ask me why would I need NodeJS with Solidity, some clients ask for that
        :) Anyway, I like learning more, and then more. Also cycling, I love
        cycling. Just come say hi, we'd work together, create something cool, or
        you'd have an idea and I'd build it for you, why not?
      </p>
      <Link href="/works" className="w-full flex items-center justify-center ">
        <button className="  heroButton w-50">My Portfolio</button>
      </Link>
    </div>
  );
};

export default index;
