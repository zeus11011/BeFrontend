import React, { useEffect, useState } from "react";
import styles from "../../styles/Calendar.module.scss";
import Image from "next/image";
import Calendar from "../../Components/Calendar";

import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
import axios from "axios";
import { URL } from "../../creds";
import { useSelector } from "react-redux";

const CalendarView = () => {
  const [selected, setSelected] = useState(null);

  const [data, setData] = useState(null);
  const deleteevent = () => {
    axios
      .get(URL + "/events/delete", {
        params: { id: selected },
      })
      .then((res) => {
        console.log(res);
        toast.success("Deleted The event !", {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: "dark",
        });
        fetchdata();
      })
      .catch((err) => {
        toast.error("Error Deleting event !", {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: "dark",
        });
        console.log(err, "err");
      });
  };

  useEffect(() => {
    console.log(selected, "imselected asasasas");
    if (selected != null) {
      axios
        .get(URL + "/events/details", { params: { id: selected.id } })
        .then((res) => {
          setData(res.data);
          console.log(res.data, "Data");
          if (res.data === null) {
            setData({ ...selected, isnative: true });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [selected]);

  const user = useSelector((state) => state.user.value);
  if (user == null) return <></>;
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.calendar}>
          <div className={styles.main1}>
            <Calendar hook={setSelected} />
          </div>
        </div>
        {/* <div className={styles.updates}>
          <div className={styles.main2}>
            {data != null ? (
              <>
                <h1 className={styles.h1}>
                  {data.isnative === true ? "College Event" : "Placement Drive"}
                </h1>
                <div className={styles.profile}>
                  <div className={styles.dp}>
                    <Image
                      alt=""
                      src={"/Infosys_logo.svg.png"}
                      width={150}
                      height={150}
                      className={styles.img}
                      style={{
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                </div>

                <h1 className={styles.h1}>{data.nameCompany}</h1>

                <div className={styles.card}>
                  <p className={styles.p1}>
                    {data.isnative === true ? "Event Name" : " Drive"}
                  </p>
                  <p className={styles.p2}>
                    {data.isnative ? data.title : data.nameCompany}
                  </p>
                </div>
                <div className={styles.card}>
                  <p className={styles.p1}>From</p>
                  <p className={styles.p2}>
                    {data.isnative
                      ? new Date(data.start).toLocaleDateString("en-US")
                      : new Date(data.dates.start).toLocaleDateString("en-US")}
                  </p>
                </div>
                <div className={styles.card}>
                  <p className={styles.p1}>To</p>
                  <p className={styles.p2}>
                    {data.isnative
                      ? new Date(data.end).toLocaleDateString("en-US")
                      : new Date(data.dates.end).toLocaleDateString("en-US")}
                  </p>
                </div>
                
                <div className={styles.buttons}>
                  <div className={styles.buttonBox2}>
                    <button name="save" className={styles.button}>
                      <Icon
                        style={{ color: "black", height: "30", width: "30" }}
                        icon="mdi:edit"
                        width={"4rem"}
                      ></Icon>
                    </button>
                  </div>
                  <div className={styles.buttonBox}>
                    <button
                      name="save"
                      className={styles.button}
                      onClick={deleteevent}
                    >
                      <Icon
                        style={{ color: "black", height: "30", width: "30" }}
                        icon="mdi:delete"
                        width={"4rem"}
                      ></Icon>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className={styles.empty}>
                <p>No data to Show</p>
              </div>
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CalendarView;
