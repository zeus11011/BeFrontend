import Head from "next/head";
import Image from "next/image";
import Drawer from "../Components/Drawer";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.main}>
      <Drawer />
      <div className={styles.cont}>
        <h1>cont</h1>
      </div>
    </div>
  );
}
