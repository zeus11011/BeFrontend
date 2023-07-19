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

  const [showModal1, setShowModal1] = useState(false);

  const handleBoxClick1 = () => {
    setShowModal1(true);
  };

  const handleCloseModal1 = () => {
    setShowModal1(false);
  };

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
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.main}>
          <div className={styles.descboxes}>
            <div className={styles.box}>
              <div className={styles.mainicon}>
                <div className={styles.icon}>
                  <Icon
                    icon="mdi:account-school-outline"
                    width={"4rem"}
                    // onClick={() => {
                    //   router.push("Analytics");
                    // }}
                  />
                </div>
              </div>
              <p className={styles.head}>Total Students</p>
              <p className={styles.p}>
                {number != undefined
                  ? number.student[0]?.count + number.student[1]?.count
                  : 0}
              </p>
            </div>
            <div className={styles.box}>
              <div className={styles.mainicon}>
                <div className={styles.icon}>
                  <Icon
                    icon="mdi:handshake"
                    width={"4rem"}
                    // onClick={() => {
                    //   router.push("Placed");
                    // }}
                  />
                </div>
              </div>
              <p className={styles.head}>Students Placed</p>
              <p className={styles.p}>
                {number != undefined
                  ? number.student[0]?._id
                    ? number.student[0]?.count
                    : number.student[1]?.count +
                      "/" +
                      (
                        number.student[0]?.count + number.student[1]?.count
                      ).toString()
                  : 0}
              </p>
            </div>
            <div className={styles.box}>
              <div className={styles.mainicon}>
                <div className={styles.icon}>
                  <Icon
                    icon="ri:building-2-line"
                    width={"4rem"}
                    // onClick={() => {
                    //   router.push("Company");
                    // }}
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
                  onClick={handleBoxClick1}
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
                                    ele.dates?.start
                                  ).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  })}{" "}
                                  To{" "}
                                  {new Date(ele.dates?.end).toLocaleDateString(
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
                                <span className={styles.packageHead}>
                                  {" "}
                                  <p> CTC:</p>
                                </span>

                                <span className={styles.packageAm}>
                                  {ele.ctc.map((item, index) => {
                                    return <p key={index}>{item}</p>;
                                  })}
                                </span>
                              </div>
                            </div>
                          </div>
                          <Modal
                            visible={showModal1}
                            onCancel={handleCloseModal1}
                            footer={null}
                            width={"72vw"}
                          >
                            <Table />
                          </Modal>
                        </SwiperSlide>
                      );
                    })
                  ) : (
                    <>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "4rem",
                          fontWeight: "600",
                          marginTop: "6rem",
                          height: "100%",
                        }}
                      >
                        Nothing to show
                      </div>
                    </>
                  )}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
