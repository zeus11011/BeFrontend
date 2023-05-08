import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/Drawer.module.scss";
import { Montserrat } from "@next/font/google";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { URL } from "../creds";
import { setUser } from "../store/Reducers/userSlice";
import { toast } from "react-toastify";

const font = Montserrat({ subsets: ["latin"] });
function Drawer() {
  const dispatch = useDispatch();

  const [currentpage, setCurrentpage] = useState("/");
  const router = useRouter();
  useEffect(() => {
    // localStorage.removeItem("token");
    // console.log(localStorage.getItem("token"), "otken adta");
    // if (localStorage.getItem("token") === null) {
    //   console.log("navigating");
    //   router.push("/login");
    //   // return;
    // } else {

    console.log(router.pathname, "name");
    setCurrentpage(router.pathname);
    // }
  }, [router]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token, "token");
    if (token) {
      axios
        .get(URL + "/auth/admin/verify", { headers: { Authorization: token } })
        .then((res) => {
          console.log("tooken", res.data);
          dispatch(setUser(res.data));
        });
    } else {
      toast.error("Authentication error!!!", { theme: "dark" });
      router.push("/login");
    }
  }, []);
  return (
    <div className={[styles.drawer, font.className].join(" ")}>
      <div className={styles.contmain}>
        <div className={styles.image}>
          <Image
            src={"/gec.svg"}
            alt=""
            height={185}
            width={210}
            onClick={() => {
              router.push("/");
            }}
          />
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
            <p>Dashboard</p>
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
        {/* <div
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
            <Icon icon="mdi:handshake" color="white" width={"2.5rem"} />
            <p>Placed</p>
          </div>
        </div> */}
        <div
          className={styles.mainitem}
          onClick={() => {
            router.push("Students");
          }}
        >
          <div
            className={
              currentpage === "/Students"
                ? [styles.selected, styles.item].join(" ")
                : styles.item
            }
          >
            <Icon
              icon="material-symbols:school-outline"
              color="white"
              width={"2.5rem"}
            />
            <p>Students</p>
          </div>
        </div>
        <div
          className={styles.mainitem}
          onClick={() => {
            router.push("Company");
          }}
        >
          <div
            className={
              currentpage === "/Company"
                ? [styles.selected, styles.item].join(" ")
                : styles.item
            }
          >
            <Icon icon="ri:building-2-line" color="white" width={"2.5rem"} />
            <p>Company</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
