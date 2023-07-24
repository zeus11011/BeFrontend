import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from "../../styles/Profile.module.scss";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";

const Index = () => {
  // const user = useSelector((state) => state.user);
  const options = ["2000", "2001", "2002", "2003", "2004"];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const imageInputref = useRef();

  // const onOptionChangeHandler = (event) => {
  //   console.log("User Selected Value - ", event.target.value);
  // };

  const uploadData = () => {
    let regex = new RegExp(/\S+@\S+\.\S+/);
    if (password != confirmPassword && password.length == 0) {
      toast.error("Please Check Password");
    } else if (name.length == 0) {
      toast.error("Name is Empty");
    } else if (email.length === 0 || !regex.test(email)) {
      toast.error("Please put proper Email");
    } else {
      toast.success("chenging Profile data");
    }
  };
  const user = useSelector((state) => state.user.value);

  if (user == null) return <></>;
  return (
    <div className={styles.main}>
      <div className={styles.mainbox}>
        <div className={styles.container}>
          <div className={styles.container2}>
            <div className={styles.image}>
              <Image
                alt=""
                src={user.profilepic}
                height={120}
                width={120}
                style={{ borderRadius: "50%" }}
              ></Image>
            </div>
            <div className={styles.div}>
              <h1 className={styles.h1x}>{user.name}</h1>
              <h2 className={styles.h2x}>
                Update your photo and other details
              </h2>
            </div>
          </div>
          <div className={styles.MainCon}>
            <div className={styles.container3}>
              <div className={styles.container4}>
                <div className={[styles.div2, styles.border].join(" ")}>
                  <h1 className={styles.h1}>Personal</h1>
                  <div className={styles.personal1}>
                    <div className={styles.name}>
                      <div>
                        <h2 className={styles.h2}>Name</h2>
                      </div>
                      <div>
                        <input
                          type="text"
                          name="fname"
                          placeholder="Name"
                          className={styles.textfield_1}
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                        ></input>
                      </div>
                    </div>
                    <div className={styles.name2}>
                      <div>
                        <h2 className={styles.h2}>Email</h2>
                      </div>
                      <div>
                        <input
                          type="email"
                          name="lname"
                          placeholder="Email"
                          className={styles.textfield_1}
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className={styles.personal2}>
                    <div className={styles.detail}>
                      <div>
                        <h2 className={styles.h2}>Password</h2>
                      </div>
                      <div>
                        <input
                          type="text"
                          name="fname"
                          placeholder="Password"
                          className={styles.textfield_2}
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                        ></input>
                      </div>
                    </div>
                    <div className={styles.detail}>
                      <div>
                        {" "}
                        <h2 className={styles.h2}>Confirm Password</h2>
                      </div>
                      <div>
                        {" "}
                        <input
                          type="password"
                          name="lname"
                          placeholder="Confirm Password"
                          className={styles.textfield_2}
                          value={confirmPassword}
                          onChange={(event) =>
                            setConfirmPassword(event.target.value)
                          }
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className={styles.container5}>
                <div className={[styles.div2, styles.border2].join(" ")}>
                  <h1 className={styles.h1}>Academic</h1>
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
                          type="text"
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
                        <h2 className={styles.h2}>Designation</h2>
                      </div>
                      <div>
                        <input
                          type="text"
                          name="fname"
                          placeholder="Designation"
                          className={styles.textfield_2}
                        ></input>
                      </div>
                    </div>
                    <div className={styles.detail}></div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <button name="save" onClick={uploadData} className={styles.button}>
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
