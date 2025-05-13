import Header from "./Header";
import dynamic from "next/dynamic";
import Head from 'next/head';
// const Navbar = dynamic(
//   //@ts-ignore
//   () => import("@/components/Navbar"),
//   { ssr: false }
// );
import Navbar from "@/components/Navbar"

const Layout = (props: any) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/icon.png" type="image/png" />
      </Head>
      <Header
        title={props.title}
        des={props.des}
        can={props.can}
        image={props.image}
      />
      <header>
        {props.noNavbar ? null : <Navbar />}
      </header>
      <main className={`${!props.noFull && 'px-2 xs:px-0 bg-opacity-30'}`} style={{ background: "url(/images/marketplace.png)",}}>
        <div className="max-w-screen-xl mx-auto">
          {props.children}
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;