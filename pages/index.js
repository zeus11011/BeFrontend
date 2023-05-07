/* eslint-disable @next/next/no-img-element */
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
import { URL } from "../creds";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { Navigation, Pagination } from "swiper";
import { useSelector } from "react-redux";

export default function Home() {
  const user = useSelector((state) => state.user.value);
  // const [currentpage, setCurrentpage] = useState("/");
  const [number, setNumber] = useState(undefined);
  const router = useRouter();
  const [companies, setCompanies] = useState([]);
  console.log(user, "usersss");
  useEffect(() => {
    axios
      .get(URL + "/student/getdashboard")
      .then((res) => {
        console.log(res.data);
        setNumber({
          student: res.data.student,
          companycount: res.data.companycount,
        });
        setCompanies(res.data.upcoming);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  if (user == null) return <></>;
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
          <p className={styles.p}>
            {number != undefined
              ? number.student[0].count + number.student[1].count
              : 0}
          </p>
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
          <p className={styles.p}>
            {number != undefined
              ? number.student[0].count +
                "/" +
                (number.student[0].count + number.student[1].count).toString()
              : 0}
          </p>
        </div>
        <div className={styles.box}>
          <div className={styles.mainicon}>
            <div className={styles.icon}>
              <Icon
                icon="ri:building-2-line"
                width={"4rem"}
                onClick={() => {
                  router.push("Company");
                }}
              />
            </div>
          </div>
          <p className={styles.head}>Company Arrived</p>
          <p className={styles.p}>{number ? number.companycount : 0}</p>
        </div>
      </div>
      <div className={styles.mainCon1}>
        <div className={styles.company1box}>
          <div className={styles.carobox}>
            <div className={styles.Carouselh1Box}>
              <h1 className={styles.h1}>On-Going Companies</h1>
            </div>
            <Swiper
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {companies.length > 0 ? (
                companies.map((ele, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className={styles.card1box}>
                        <div className={styles.box}>
                          <div className={styles.cardName}>
                            <h1>{ele.nameCompany}</h1>
                          </div>
                          <div className={styles.cardDate}>
                            <p className={styles.p}>
                              {new Date(ele.dates[0].start).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                }
                              )}{" "}
                              To{" "}
                              {new Date(ele.dates[0].end).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                }
                              )}
                            </p>
                          </div>
                          <div className={styles.cardRoles}>
                            <div className={styles.rolesHead}>
                              <p> Roles:</p>
                            </div>
                            <div className={styles.roles}>
                              {ele.roles.map((item, i) => {
                                return <p key={i}>{item}</p>;
                              })}
                            </div>
                          </div>
                          <div className={styles.cardPackage}>
                            <div className={styles.packageHead}>
                              {" "}
                              <p> CTC:</p>
                            </div>

                            <div className="">
                              {ele.ctc.map((item, index) => {
                                return <p>{item}</p>;
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })
              ) : (
                <>Nothing to show</>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
