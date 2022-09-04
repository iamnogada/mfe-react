import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Logo = dynamic(() => import("remoteApp/Logo"), {
  loading: () => <>loading..</>,
  ssr: false
});

const Wrapper: NextPage = () => {
  const router = useRouter();
  const { apps } = router.query;
  // console.log(router.query);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Apps: {apps}</div>
      <Logo />
    </div>
  );
};

export default Wrapper;