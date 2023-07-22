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
import Loader from "../Components/Loader";
import { InfinitySpin } from "react-loader-spinner";
import { ColorRing } from "react-loader-spinner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { Navigation, Pagination } from "swiper";
import { useSelector } from "react-redux";

import { Modal } from "antd";
import Table from "./Analytics/Table";
import { toast } from "react-toastify";

export default function Home() {
  const user = useSelector((state) => state.user.value);
  // const [currentpage, setCurrentpage] = useState("/");
  const [number, setNumber] = useState(undefined);
  const router = useRouter();
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // her goes id of the offer letter
  const handelConfirmJobdesc = (id) => {
    axios.get(URL + "/confirmoffer", { params: { id: id } }).then((res) => {
      toast.success("Succesfully confirm Job Offer");
    });
  };

  // her new date of to be chnges and start and end of date need to be passed for chnging
  const handelReconfigureJobdesc = (id, start, end) => {
    axios.put(URL + "/editoffer", {
      id: id,
      start: new Date(start),
      end: new Date(start),
    });
  };

  console.log(user, "usersss");
  useEffect(() => {
    axios
      .get(URL + "/student/getdashboard")
      .then((res) => {
        console.log(res.data, "data res");
        setNumber({
          student: res.data.student,
          companycount: res.data.companycount,
        });
        setCompanies(res.data.upcoming);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user]);

  if (user == null) return <></>;
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.descboxes}>
          <div className={styles.box}>
            <div className={styles.mainicon}>
              <div className={styles.icon}>
                <Icon
                  icon="mdi:account-school-outline"
                  width={"4rem"}
                  onClick={() => {
                    router.push("/Analytics");
                  }}
                />
              </div>
            </div>
            <p className={styles.head}>Total Students</p>
            <p className={styles.p}>
              {isLoading ? (
                <InfinitySpin width="200" color="#4fa94d" />
              ) : (
                <>
                  {" "}
                  {number != undefined
                    ? number.student[0]?.count + number.student[1]?.count
                    : 0}
                </>
              )}
            </p>
          </div>
          <div className={styles.box}>
            <div className={styles.mainicon}>
              <div className={styles.icon}>
                <Icon
                  icon="mdi:handshake"
                  width={"4rem"}
                  onClick={() => {
                    router.push("/Students");
                  }}
                />
              </div>
            </div>
            <p className={styles.head}>Students Placed</p>
            <p className={styles.p}>
              {isLoading ? (
                <InfinitySpin width="200" color="#4fa94d" />
              ) : (
                <>
                  {" "}
                  {number != undefined
                    ? number.student[0]?._id
                      ? number.student[0]?.count
                      : number.student[1]?.count +
                        "/" +
                        (
                          number.student[0]?.count + number.student[1]?.count
                        ).toString()
                    : 0}
                </>
              )}
            </p>
          </div>
          <div className={styles.box}>
            <div className={styles.mainicon}>
              <div className={styles.icon}>
                <Icon
                  icon="ri:building-2-line"
                  width={"4rem"}
                  onClick={() => {
                    router.push("/Company");
                  }}
                />
              </div>
            </div>
            <p className={styles.head}>Company Arrived</p>
            <p className={styles.p}>
              {isLoading ? (
                <InfinitySpin width="200" color="#4fa94d" />
              ) : (
                <> {number ? number.companycount : 0}</>
              )}
            </p>
          </div>
        </div>
        <div className={styles.mainCon1}>
          <div className={styles.company1box}>
            <div className={styles.carobox}>
              <div className={styles.Carouselh1Box}>
                <h1 className={styles.h1}>Upcoming Companies</h1>
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
                                {new Date(
                                  ele.dates[0]?.start
                                ).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                })}{" "}
                                To{" "}
                                {new Date(ele.dates[0]?.end).toLocaleDateString(
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
                                <p className={styles.rolp}> Roles:</p>
                                <div className={styles.roles}>
                                  {ele.roles.map((item, i) => {
                                    return <span key={i}>{item}</span>;
                                  })}
                                </div>
                              </div>
                            </div>
                            <div className={styles.cardPackage}>
                              <div className={styles.packageHead}>
                                <p> CTC :</p>
                              </div>

                              <div className={styles.packageAm}>
                                <p key={index}>{ele.ctc}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })
                ) : (
                  <>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={[
                          "#806BFF",
                          "#A15BF9",
                          "#23B9F9",
                          "#2200F4",
                          "#47FFDE",
                          "#002966",
                        ]}
                      />
                      Loading...
                    </div>
                  </>
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
