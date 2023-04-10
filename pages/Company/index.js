import React, { useEffect, useState, useRef } from "react";
import styles from "../../styles/Company.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Navigation, Pagination } from "swiper";

const Company = () => {
  return (
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
              <SwiperSlide>
                <div className={styles.card1box}>
                  <div className={styles.box}>
                    <h1>Infosys</h1>
                    <p className={styles.p}>
                      Nov 5, 2022 at 9.30 <br /> CGPA-8 <br />
                      8-9Lk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card1box}>
                  <div className={styles.box}>
                    <h1>Infosys</h1>
                    <p className={styles.p}>
                      Nov 5, 2022 at 9.30 <br /> CGPA-8 <br />
                      8-9Lk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card1box}>
                  <div className={styles.box}>
                    <h1>Infosys</h1>
                    <p className={styles.p}>
                      Nov 5, 2022 at 9.30 <br /> CGPA-8 <br />
                      8-9Lk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card1box}>
                  <div className={styles.box}>
                    <h1>Infosys</h1>
                    <p className={styles.p}>
                      Nov 5, 2022 at 9.30 <br /> CGPA-8 <br />
                      8-9Lk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card1box}>
                  <div className={styles.box}>
                    <h1>Infosys</h1>
                    <p className={styles.p}>
                      Nov 5, 2022 at 9.30 <br /> CGPA-8 <br />
                      8-9Lk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className={styles.company2box}>
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
              <SwiperSlide>
                <div className={styles.card1box}>
                  <div className={styles.box}>
                    <h1>Infosys</h1>
                    <p className={styles.p}>
                      Nov 5, 2022 at 9.30 <br /> CGPA-8 <br />
                      8-9Lk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card1box}>
                  <div className={styles.box}>
                    <h1>Infosys</h1>
                    <p className={styles.p}>
                      Nov 5, 2022 at 9.30 <br /> CGPA-8 <br />
                      8-9Lk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card1box}>
                  <div className={styles.box}>
                    <h1>Infosys</h1>
                    <p className={styles.p}>
                      Nov 5, 2022 at 9.30 <br /> CGPA-8 <br />
                      8-9Lk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card1box}>
                  <div className={styles.box}>
                    <h1>Infosys</h1>
                    <p className={styles.p}>
                      Nov 5, 2022 at 9.30 <br /> CGPA-8 <br />
                      8-9Lk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card1box}>
                  <div className={styles.box}>
                    <h1>Infosys</h1>
                    <p className={styles.p}>
                      Nov 5, 2022 at 9.30 <br /> CGPA-8 <br />
                      8-9Lk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className={styles.company3box}>
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
              <SwiperSlide>
                <div className={styles.card1box}>
                  <div className={styles.box}>
                    <h1>Infosys</h1>
                    <p className={styles.p}>
                      Nov 5, 2022 at 9.30 <br /> CGPA-8 <br />
                      8-9Lk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card1box}>
                  <div className={styles.box}>
                    <h1>Infosys</h1>
                    <p className={styles.p}>
                      Nov 5, 2022 at 9.30 <br /> CGPA-8 <br />
                      8-9Lk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card1box}>
                  <div className={styles.box}>
                    <h1>Infosys</h1>
                    <p className={styles.p}>
                      Nov 5, 2022 at 9.30 <br /> CGPA-8 <br />
                      8-9Lk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card1box}>
                  <div className={styles.box}>
                    <h1>Infosys</h1>
                    <p className={styles.p}>
                      Nov 5, 2022 at 9.30 <br /> CGPA-8 <br />
                      8-9Lk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card1box}>
                  <div className={styles.box}>
                    <h1>Infosys</h1>
                    <p className={styles.p}>
                      Nov 5, 2022 at 9.30 <br /> CGPA-8 <br />
                      8-9Lk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
