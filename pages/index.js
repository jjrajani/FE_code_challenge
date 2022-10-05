import Head from "next/head";
import styles from "../styles/Home.module.css";
import ModalPage from "../components/ModalPage";
import Instructions from "../components/Instructions/Instructions";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Transform Test - React</title>
        <meta name="description" content="Transform Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Instructions />

      <div>
        <ModalPage />
      </div>
    </div>
  );
}
