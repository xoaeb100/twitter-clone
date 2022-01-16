import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Login from "../components/Login";
import Modal from "../components/Modal";
import Widgets from "../components/Widgets";
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import { getProviders, getSession, useSession } from "next-auth/react";

export default function Home({ trendingResults, followResults, providers }) {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  if (!session) return <Login providers={providers} />;

  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="https://rb.gy/ogau5a" />
      </Head>
      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <Feed />
        <Widgets
          trendingResults={trendingResults}
          followResults={followResults}
        />
        {isOpen && <Modal />}
      </main>
    </div>
  );
}

// 👇 get dynamic props
export async function getServerSideProps(context) {
  const trendingResults = await fetch("https://jsonkeeper.com/b/92CZ").then(
    (res) => res.json()
  );
  const followResults = await fetch("https://jsonkeeper.com/b/SDMB").then(
    (res) => res.json()
  );
  const providers = await getProviders();
  const session = await getSession(context);
  // 👆 so that we have the session before user reaches the page!!
  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  };
}

//some random changes for git
