import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/Drawer.module.scss";
import { Montserrat } from "@next/font/google";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

const font = Montserrat({ subsets: ["latin"] });
function Drawer() {
  const [currentpage, setCurrentpage] = useState("/");
  const router = useRouter();
  useEffect(() => {
    console.log(router.pathname, "name");
    setCurrentpage(router.pathname);
  }, [router]);
  return (
    <div className={[styles.drawer, font.className].join(" ")}>
      <div className={styles.contmain}>
        <div className={styles.image}>
          <Image src={"/gec.svg"} alt="" height={185} width={210} />
        </div>
        <div
          className={styles.mainitem}
          onClick={() => {
            router.push("/");
          }}
        >
          <div
            className={
              currentpage === "/"
                ? [styles.selected, styles.item].join(" ")
                : styles.item
            }
          >
            <Icon
              icon="material-symbols:dashboard"
              color="white"
              width={"2.5rem"}
            />
            <p>Dashborad</p>
          </div>
        </div>
        <div
          className={styles.mainitem}
          onClick={() => {
            router.push("Analytics");
          }}
        >
          <div
            className={
              currentpage === "/Analytics"
                ? [styles.selected, styles.item].join(" ")
                : styles.item
            }
          >
            <Icon
              icon="material-symbols:analytics-outline-rounded"
              color="white"
              width={"2.5rem"}
            />
            <p> Analytics</p>
          </div>
        </div>
        <div
          className={styles.mainitem}
          onClick={() => {
            router.push("Calendar");
          }}
        >
          <div
            className={
              currentpage === "/Calendar"
                ? [styles.selected, styles.item].join(" ")
                : styles.item
            }
          >
            <Icon icon="uil:calender" color="white" width={"2.5rem"} />
            <p>Calendar</p>
          </div>
        </div>
        <div
          className={styles.mainitem}
          onClick={() => {
            router.push("Archive");
          }}
        >
          <div
            className={
              currentpage === "/Archive"
                ? [styles.selected, styles.item].join(" ")
                : styles.item
            }
          >
            <Icon
              icon="material-symbols:archive-outline"
              color="white"
              width={"2.5rem"}
            />
            <p>Archive</p>
          </div>
        </div>
        <div
          className={styles.mainitem}
          onClick={() => {
            router.push("Placed");
          }}
        >
          <div
            className={
              currentpage === "/Placed"
                ? [styles.selected, styles.item].join(" ")
                : styles.item
            }
          >
            <Icon
              icon="material-symbols:person-pin-outline-sharp"
              color="white"
              width={"2.5rem"}
            />
            <p>Placed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
