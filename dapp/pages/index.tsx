import Layout from "@/components/Layout";
import Link from "next/link";

const Home = () => {
  const Nav = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "HowToPlay",
      href: "/how"
    },
    {
      name: "Marketplace",
      href: "/marketplace"
    },
    {
      name: "Github",
      href: "https://github.com/kai63001/wildcard-game"
    }
  ];
  return (
    <Layout noFull noNavbar>
      <div className=" w-full flex overflow-y-hidden relative text-white">
        {/* navbar absoulte */}
        <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black to-transparent">
          <div className="max-w-screen-xl mx-auto mt-3 px-2 xs:px-0 flex justify-between">
            <div className="text-2xl mt-1 ">
              <Link href="/">
                <a className="">WILD GAME</a>
              </Link>
            </div>
            <div className="flex justify-between w-1/4">
              {/* loop Nav */}
              {Nav.map((item, index) => {
                return (
                  <div key={index} className="text-1xl mt-2">
                    <Link href={`${item.href}`}>
                      <a target={item.name == 'Github' ? '_blank':''} className="hover:bg-purple-900 hover:text-white px-4 py-2 duration-300 rounded-md">
                        {item.name}
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="mt-2">
              <Link href="/marketplace">
                <a className="relative w-full hover:scale-105 scale-100">
                  <img src="/images/button.png" width={100} alt="" />
                  <p className="absolute top-1 w-full ml-6 text-white whitespace-nowrap">
                    LOG IN
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-20 left-0 w-full">
          <div className="max-w-screen-xl mx-auto mt-3 px-2 xs:px-0 flex flex-col items-start">
            <h1 className="text-7xl text-amber-300">
              Game Card NFT
              <br />
              Multiplayer
            </h1>
            <div className="flex mt-2 text-2xl text-gray-300 bg-black bg-opacity-40 p-4 rounded-xl">
              <p>
                It is a card game based on blackjack.
                <br /> You can battle other players with Card NFTs with
                different abilities.
              </p>
            </div>
            <div className="relative mt-2">
              <Link href="/game">
                <a target="_blank" className="inline-block">
                  <div className="absolute top-2 mt-1 ml-10 text-white text-4xl">
                    START
                  </div>
                  <img width={200} src="/images/button2.png" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <img
          width={"100%"}
          className="m-auto h-screen w-full object-cover overflow-y-hidden"
          src="/images/wallpaper.jpeg"
          alt=""
        />

        <br />
      </div>
    </Layout>
  );
};

export default Home;
