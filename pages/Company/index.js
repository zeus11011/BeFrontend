import React, { useEffect, useState } from "react";
import styles from "../../styles/Company.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Modal } from "antd";
import { Tabs } from "antd";
import { URL } from "../../creds";

import { Navigation, Pagination } from "swiper";
import axios from "axios";
import { useSelector } from "react-redux";
import Loader from "../../Components/Loader";
import ConfirmationModel from "../../Components/ConfirmationModel";
import TabelModal from "../../Components/TabelModal";

const Company = () => {
  const [pending, setPending] = useState([]);
  const [ongoin, setOngoin] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ele, setEle] = useState({});
  const [tablele, setTablele] = useState({});

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleBoxClick1 = (ele) => {
    setEle(ele);
    setShowModal1(true);
  };

  const handleBoxClick2 = (id) => {
    alert(id);
    setTablele(ongoin[id]);
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

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.main}>
          <div className={styles.mainContainer}>
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
                        return (
                          <SwiperSlide key={index}>
                            <div
                              className={styles.card1box}
                              onClick={() => {
                                console.log("clicked");
                                handleBoxClick1(ele);
                              }}
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
                                  {new Date(
                                    ele.dates[0]?.end
                                  ).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  })}
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
                                    <p
                                      style={{ display: "inline" }}
                                      key={index}
                                    >
                                      {ele.ctc}
                                    </p>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })
                    ) : (
                      <div className={styles.blankbox}>
                        No companies to show
                      </div>
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
                        return (
                          <SwiperSlide key={index}>
                            <div
                              className={styles.card1box}
                              onClick={() => {
                                handleBoxClick2(index);
                              }}
                            >
                              <div className={styles.box}>
                                <h1 className="onGh1">{ele.nameCompany}</h1>
                                <p className={styles.p}>
                                  {new Date(
                                    ele.dates[0].start
                                  ).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  })}{" "}
                                  To{" "}
                                  {new Date(
                                    ele.dates[0].end
                                  ).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  })}
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
                                  <span>CTC: </span>

                                  <p
                                    style={{
                                      display: "inline",
                                      marginRight: 10,
                                      // border: "1px solid black",
                                      // borderRadius: "15px",
                                      // padding: 5,
                                    }}
                                    key={index}
                                  >
                                    {ele.ctc} LPA
                                  </p>
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
              {/* <div className={styles.company1box}>
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
              </div> */}
            </div>
          </div>
        </div>
      )}
      {showModal1 ? (
        <Modal
          width={"72vw"}
          open={showModal1}
          onCancel={handleCloseModal1}
          footer={null}
        >
          <ConfirmationModel data={ele} close={setShowModal1} />
        </Modal>
      ) : (
        <></>
      )}
      {showModal2 ? (
        <Modal
          open={showModal2}
          onCancel={handleCloseModal2}
          footer={null}
          width={"80vw"}
        >
          <TabelModal data={tablele} />
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Company;
