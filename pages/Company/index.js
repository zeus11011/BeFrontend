import React, { useEffect, useState } from "react";
import styles from "../../styles/Company.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Modal } from "antd";
import { DataGrid } from "@mui/x-data-grid";
import Dropdown from "react-dropdown";

import Table from "../Analytics/Table";

import { URL } from "../../creds";

import { Navigation, Pagination } from "swiper";
import axios from "axios";
import { useSelector } from "react-redux";
import Loader from "../../Components/Loader";
import ConfirmationModel from "../../Components/ConfirmationModel";

const Company = () => {
  const [pending, setPending] = useState([]);
  const [ongoin, setOngoin] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // nir
  //  analytic table
  //  analytic table

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  // nir

  const handleBoxClick1 = () => {
    setShowModal1(true);
  };

  const handleBoxClick2 = () => {
    setShowModal2(true);
  };

  const handleCloseModal1 = () => {
    setShowModal1(false);
  };

  const handleCloseModal2 = () => {
    setShowModal2(false);
  };

  useEffect(() => {
    axios
      .get(URL + "/offerdetails/admin/companies")
      .then((res) => {
        console.log(res.data.ongoing);
        setOngoin(res.data.ongoing);
        setPending(res.data.pendingdocs);
        setUpcoming(res.data.upcoming);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  const user = useSelector((state) => state.user.value);
  if (user == null) return <></>;

  // nir
  const table = (
    <>
      {" "}
      <h1>hiii</h1>
    </>
  );

  // nir
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.main}>
          <div className={styles.mainCon1}>
            <div className={styles.company1box}>
              <div className={styles.carobox}>
                <div className={styles.Carouselh1Box}>
                  <h1 className={styles.h1}>Pending Requests</h1>
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
                  {pending.length !== 0 ? (
                    pending.map((ele, index) => {
                      console.log(ele, "params");
                      return (
                        <SwiperSlide key={index}>
                          <div
                            className={styles.card1box}
                            onClick={handleBoxClick1}
                          >
                            <div className={styles.box}>
                              <h1 className="Ph">{ele.nameCompany}</h1>
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
                              <div className={styles.rolesHead}>
                                <p className={styles.rolp}> Roles:</p>
                              </div>
                              <div className={styles.roles}>
                                {ele.roles.map((item, i) => {
                                  return <span key={i}>{item}</span>;
                                })}
                              </div>
                              <div className="ctc">
                                <span>
                                  CTC:{" "}
                                  {ele.ctc.map((item, index) => {
                                    return (
                                      <p
                                        style={{ display: "inline" }}
                                        key={index}
                                      >
                                        {item}
                                      </p>
                                    );
                                  })}
                                </span>
                              </div>
                            </div>
                          </div>
                          <Modal
                            open={showModal1}
                            onCancel={handleCloseModal1}
                            footer={null}
                          >
                            <ConfirmationModel
                              data={ele}
                              close={handleBoxClick1}
                            />
                          </Modal>
                        </SwiperSlide>
                      );
                    })
                  ) : (
                    <div className={styles.blankbox}>No companies to show</div>
                  )}
                </Swiper>
              </div>
            </div>
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
                  {ongoin.length != 0 ? (
                    ongoin.map((ele, index) => {
                      console.log(ele, "params");
                      return (
                        <SwiperSlide key={index}>
                          <div
                            className={styles.card1box}
                            onClick={handleBoxClick2}
                          >
                            <div className={styles.box}>
                              <h1 className="onGh1">{ele.nameCompany}</h1>
                              <p className={styles.p}>
                                {new Date(ele.dates.start).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  }
                                )}{" "}
                                To{" "}
                                {new Date(ele.dates.end).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  }
                                )}
                              </p>
                              <div className={styles.rolesHead}>
                                <p className={styles.rolp}> Roles:</p>
                              </div>
                              <div className={styles.roles}>
                                {ele.roles.map((item, i) => {
                                  return <span key={i}>{item}</span>;
                                })}
                              </div>
                              <div className="ctc">
                                <span>
                                  CTC:{" "}
                                  {ele.ctc.map((item, index) => {
                                    return (
                                      <p
                                        style={{ display: "inline" }}
                                        key={index}
                                      >
                                        {item}
                                      </p>
                                    );
                                  })}
                                </span>
                              </div>
                            </div>
                          </div>
                          <Modal
                            open={showModal2}
                            onCancel={handleCloseModal2}
                            footer={null}
                            width={"72vw"}
                          >
                            <Table data={ele} />
                          </Modal>
                        </SwiperSlide>
                      );
                    })
                  ) : (
                    <div className={styles.blankbox}>
                      Nothing Copanies are there to show
                    </div>
                  )}
                </Swiper>
              </div>
            </div>
            <div className={styles.company1box}>
              <div className={styles.carobox}>
                <div className={styles.Carouselh1Box}>
                  <h1 className={styles.h1}>Up-Coming Company</h1>
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
                  {upcoming.length != 0 ? (
                    upcoming.map((ele, index) => {
                      console.log(ele, "params");
                      return (
                        <SwiperSlide key={index}>
                          <div className={styles.card1box}>
                            <div className={styles.box}>
                              <h1>{ele.nameCompany}</h1>
                              <p className={styles.p}>
                                {new Date(ele.dates.start).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  }
                                )}{" "}
                                To{" "}
                                {new Date(ele.dates.end).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  }
                                )}
                              </p>
                              <div className={styles.rolesHead}>
                                <p className={styles.rolp}> Roles:</p>
                              </div>
                              <div className={styles.roles}>
                                {ele.roles.map((item, i) => {
                                  return <span key={i}>{item}</span>;
                                })}
                              </div>
                              <div className="ctc">
                                <span>
                                  CTC:{" "}
                                  {ele.ctc.map((item, index) => {
                                    return (
                                      <p
                                        style={{ display: "inline" }}
                                        key={index}
                                      >
                                        {item}
                                      </p>
                                    );
                                  })}
                                </span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })
                  ) : (
                    <div className={styles.blankbox}>
                      Nothing Copanies are there to show
                    </div>
                  )}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Company;
