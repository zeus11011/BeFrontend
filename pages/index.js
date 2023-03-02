import Head from "next/head";
import Image from "next/image";
import Drawer from "../Components/Drawer";
import Navbar from "../Components/Navbar";
import styles from "../styles/Home.module.scss";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Icon } from "@iconify/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRouter } from "next/router";

export default function Home() {
  const [currentpage, setCurrentpage] = useState("/");
  const router = useRouter();
  useEffect(() => {
    console.log(router.pathname, "name");
    setCurrentpage(router.pathname);
  }, [router]);
  return (
    <div className={styles.main}>
      <div className={styles.descboxes}>
        <div className={styles.box}>
          <div className={styles.mainicon}>
            <div className={styles.icon}>
              <Icon
                icon="mdi:account-school-outline"
                width={"4rem"}
                onClick={() => {
                  router.push("Analytics");
                }}
              />
            </div>
          </div>
          <p className={styles.head}>Total Students</p>
          <p className={styles.p}>1600</p>
        </div>
        <div className={styles.box}>
          <div className={styles.mainicon}>
            <div className={styles.icon}>
              <Icon
                icon="mdi:handshake"
                width={"4rem"}
                onClick={() => {
                  router.push("Placed");
                }}
              />
            </div>
          </div>
          <p className={styles.head}>Students Placed</p>
          <p className={styles.p}>160/1600</p>
        </div>
        <div className={styles.box}>
          <div className={styles.mainicon}>
            <div className={styles.icon}>
              <Icon
                icon="mdi:company"
                width={"4rem"}
                onClick={() => {
                  router.push("Archive");
                }}
              />
            </div>
          </div>
          <p className={styles.head}>Company Arrived</p>
          <p className={styles.p}>1600</p>
        </div>
      </div>
      <div className={styles.carobox}>
        <Carousel showStatus={false}>
          <div className={styles.box1}>
            <div className={styles.box2}>
              <Image
                className={styles.img}
                alt=""
                width={100}
                height={200}
                src="/Infosys_logo.svg.png"
              />
              <p className={styles.legend}>
                Nov 5, 2022 at 9.30 <br /> CGPA-8 <br />
                8-9Lk
              </p>
            </div>
            <div className={styles.box3}>
              <Image
                className={styles.img}
                alt=""
                width={100}
                height={200}
                src="/Tata_Consultancy_Services_Logo.svg.png"
              />
              <p className={styles.legend}>
                Nov 5, 2022 at 9.30 <br /> CGPA-8 <br />
                8-9Lk
              </p>
            </div>
          </div>
          <div className={styles.box1}>
            <div className={styles.box2}>
              <Image
                className={styles.img}
                alt=""
                width={100}
                height={200}
                src="/Infosys_logo.svg.png"
              />
              <p className={styles.legend}>
                Nov 5, 2022 at 9.30 <br /> CGPA-8 <br />
                8-9Lk
              </p>
            </div>
            <div className={styles.box3}>
              <Image
                className={styles.img}
                alt=""
                width={100}
                height={200}
                src="/Tata_Consultancy_Services_Logo.svg.png"
              />
              <p className={styles.legend}>
                Nov 5, 2022 at 9.30 <br /> CGPA-8 <br />
                8-9Lk
              </p>
            </div>
          </div>
          <div className={styles.box1}>
            <div className={styles.box2}>
              <Image
                className={styles.img}
                alt=""
                width={100}
                height={200}
                src="/Infosys_logo.svg.png"
              />
              <p className={styles.legend}>
                Nov 5, 2022 at 9.30 <br /> CGPA-8 <br />
                8-9Lk
              </p>
            </div>
            <div className={styles.box3}>
              <Image
                className={styles.img}
                alt=""
                width={100}
                height={200}
                src="/Tata_Consultancy_Services_Logo.svg.png"
              />
              <p className={styles.legend}>
                Nov 5, 2022 at 9.30 <br /> CGPA-8 <br />
                8-9Lk
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
