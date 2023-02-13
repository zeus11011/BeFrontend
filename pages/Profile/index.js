import React from "react";
import Image from "next/image";
import styles from "../../styles/Profile.module.scss";

const index = () => {
  const options = ["2000", "2001", "2002", "2003", "2004"];
  const onOptionChangeHandler = (event) => {
    console.log("User Selected Value - ", event.target.value);
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.container2}>
          <div className={styles.image}>
            <Image
              alt=""
              src={"/dp.jpg"}
              height={160}
              width={160}
              style={{ borderRadius: "50%" }}
            ></Image>
          </div>
          <div className={styles.div}>
            <h1 className={styles.h1x}>Don Joe</h1>
            <h2 className={styles.h2x}>Update your photo and other details</h2>

          </div>
        </div>
        <div className={styles.container3}>
          <div className={[styles.div2, styles.border].join(" ")}>
            <h1 className={styles.h1}>Personal</h1>
            <div className={styles.personal1}>
              <div className={styles.name}>
                <div>
                  <h2 className={styles.h2}>First Name</h2>
                </div>
                <div>
                  <input
                    type="text"
                    name="fname"
                    placeholder="Name"
                    className={styles.textfield_1}
                  ></input>
                </div>
              </div>
              <div className={styles.name2}>
                <div>
                  <h2 className={styles.h2}>Last Name</h2>
                </div>
                <div>
                  <input
                    type="name"
                    name="lname"
                    placeholder="Surname"
                    className={styles.textfield_1}
                  ></input>
                </div>
              </div>
            </div>
            <div className={styles.personal2}>
              <div className={styles.detail}>
                <div>
                  <h2 className={styles.h2}>Email</h2>
                </div>
                <div>
                  <input
                    type="fname"
                    name="fname"
                    placeholder="Email"
                    className={styles.textfield_2}
                  ></input>
                </div>
              </div>
              <div className={styles.detail}>
                <div>
                  {" "}
                  <h2 className={styles.h2}>Password</h2>
                </div>
                <div>
                  {" "}
                  <input
                    type="lname"
                    name="lname"
                    placeholder="Password"
                    className={styles.textfield_2}
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container4}>
            <div className={styles.div3}>
              <h1 className={styles.h1}>Academic</h1>
              <div className={styles.academic1}>
                <div className={styles.yearS}>
                  <div>
                    <h2 className={styles.h2}>Year</h2>
                  </div>
                  <div className={styles.dropdown1}>
                    {/* <input
                      type="number"
                      name="yearS"
                      placeholder="Start"
                      className={styles.textfield_3}
                    ></input> */}
                    <select
                      onChange={onOptionChangeHandler}
                      className={styles.dropdown}
                    >
                      <option>Start</option>
                      {options.map((option, index) => {
                        return <option key={index}>{option}</option>;
                      })}
                    </select>
                  </div>
                </div>
                <div className={styles.yearE}>
                  <div className={styles.dropdown2}>
                    {/* <input
                      type="number"
                      name="yearE"
                      placeholder="End"
                      className={styles.textfield_4}
                    ></input> */}
                    <select
                      onChange={onOptionChangeHandler}
                      className={styles.dropdown}
                    >
                      <option>End</option>
                      {options.map((option, index) => {
                        return <option key={index}>{option}</option>;
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className={styles.academic2}>
                <div className={styles.desig}>
                  <div>
                    <h2 className={styles.h2}>Designation</h2>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="fname"
                      placeholder="Designation"
                      className={styles.textfield_5}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <button name="save" onClick="" className={styles.button}>
          SAVE
        </button>
      </div>
    </div>
  );
};

export default index;
