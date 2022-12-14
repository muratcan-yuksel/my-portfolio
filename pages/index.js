import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import BioItem from "../components/BioItem";

const index = () => {
  const bio = [
    {
      date: "2021-2022",
      content: "Front end developer at DijitalGaraj",
      location: "Remote",
    },
    {
      date: "2017-2020",
      content: "Master's in Semiotics at University of Tartu",
      location: "Tartu/Estonia",
    },
    {
      date: "2018",
      content: "Marketing Specialist at Langues Immersion Pro",
      location: "Montauban/France",
    },
    {
      date: "2018-2019",
      content: "Master's with Erasmus+ at L'Université Bordeaux-Montaigne",
      location: "Bordeaux/France",
    },
    {
      date: "2016",
      content: "Journalist at Inter-Media Bruxelles",
      location: "Brussels/Belgium",
    },
    {
      date: "2015-2015",
      content: "Bachelor's in Comp. Lit. at Eötvos Loránd University",
      location: "Budapest/Hungary",
    },
  ];
  return (
    <div className="h-full border px-5 w-full md:w-4/6 lg:w-3/6 flex flex-col ">
      <h2 className="underline underline-offset-4 tracking-widest ">
        About me
      </h2>
      <p className="indent-8 my-5 tracking-wide">
        Hi! So I have a Master's degree in Semiotics, it's about sign systems,
        and I've learnt programming by myself. So far I've studied and worked in
        Turkey, Hungary, Estonia and France- worked in Belgium plus to that. I
        need to see difference, then I feel calmer. I speak fluent English,
        French and Turkish, can understand some Hungarian and Estonian, read the
        Cyrillic alphabet and find my way in Russian. I like coding. I really
        do. It makes me feel powerful and cool. That's why I do full-stack
        stuff, and web3 too. So I can write NodeJS and then fire a smart
        contract in Solidity and create a UI with EthersJS for instance. Don't
        ask me why would I need NodeJS with Solidity, some clients want that.
        Anyway, I like learning more, and then more. Also cycling, I love
        cycling. Just come say hi, we'd work together, create something cool, or
        you'd have an idea and I'd build it for you, why not?
      </p>
      <Link href="/works" className="w-full flex items-center justify-center ">
        <button className=" bg-[#1149a1] font-bold text-white heroButton w-50">
          My Portfolio
        </button>
      </Link>
      <h2 className="underline underline-offset-4 tracking-widest ">Bio</h2>
      {bio.map((item, index) => {
        if (index == 0) {
          console.log("do sth");
        }
        return (
          <BioItem
            key={index}
            date={item.date}
            content={item.content}
            location={item.location}
            index={index}
          />
        );
      })}
      <h2 className="underline mt-5 mb-2 underline-offset-4 tracking-widest ">
        On the web
      </h2>
      {/* social icons */}
      <div className="flex">
        <SocialIcon
          url="https://github.com/muratcan-yuksel"
          fgColor="gray"
          bgColor="transparent"
          target={"_blank"}
        />{" "}
        <SocialIcon
          url="https://www.linkedin.com/in/murat-can-y%C3%BCksel-2b1347119/"
          fgColor="gray"
          bgColor="transparent"
          target={"_blank"}
        />{" "}
        <SocialIcon
          url="https://dev.to/muratcanyuksel"
          fgColor="gray"
          bgColor="transparent"
          target={"_blank"}
        />{" "}
        <SocialIcon
          url="https://twitter.com/codingsirius"
          fgColor="gray"
          bgColor="transparent"
          target={"_blank"}
        />
      </div>
      <Link
        href="/posts"
        className="w-full  h-full flex items-center justify-center "
      >
        <button className=" bg-[#1149a1] font-bold text-white heroButton w-50">
          Blog posts
        </button>
      </Link>
    </div>
  );
};

export default index;
