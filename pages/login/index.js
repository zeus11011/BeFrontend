import React, { useEffect, useState } from "react";
import styles from "../../styles/Login.module.scss";
import Image from "next/image";
import { Checkbox } from "@mui/material";
import Link from "next/link";
import axios from "axios";
import { URL } from "../../creds";
import { useRouter } from "next/router";
import Loader from "../../Components/Loader";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const router = useRouter();
  const login = () => {
    setIsLoading(true);
    axios
      .post(URL + "/auth/admin/login", { email, password })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  useEffect(() => {
    if (localStorage.getItem("token") != undefined) {
      router.push("/");
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.main}>
          <div className={styles.con1}>
            <Image src={"/gec.svg"} alt="" height={250} width={250} />
          </div>
          <div className={styles.con2}>
            <div className={styles.card}>
              <div className={styles.maincont}>
                <div className={styles.h1container}>
                  <h1 className={styles.h1}>ADMIN</h1>
                  <h2 className={styles.h2C}>LOGIN </h2>
                </div>

                <div className={styles.box}>
                  <div className={styles.box2}>
                    <h2 className={styles.h2}>Username</h2>
                    <div className={styles.userBox}>
                      {" "}
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className={styles.textfiled}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      ></input>
                    </div>
                  </div>
                </div>

                <div className={styles.box}>
                  <div className={styles.box2}>
                    <h2 className={styles.h2}>Password</h2>
                    <div className={styles.passBox}>
                      <input
                        type={passwordShown ? "text" : "password"}
                        name="email"
                        placeholder="Password"
                        className={styles.textfiled}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      >
                        {/* <button onClick={togglePassword}>Show Password</button> */}
                      </input>
                      {/* <i className="fa fa-user icon"></i> */}
                      <button
                        onClick={togglePassword}
                        className={styles.hidePassButton}
                      >
                        <Icon icon="ion:eye" height={25}></Icon>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.box5}>
                  <Checkbox
                    label="checkbox"
                    value={remember}
                    onChange={(event) => setRemember(event.target.value)}
                    className={styles.checkbox}
                    style={{
                      color: "white",
                      // backgroundColor: "black",
                    }}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 20 } }}
                  ></Checkbox>
                  Remember Password?
                </div>
                <div className={styles.box4}>
                  <div className={styles.buttbox}>
                    <button className={styles.button} onClick={login}>
                      Log In
                    </button>
                  </div>

                  <div className={styles.box3}>
                    {"Forgot "}
                    <div
                      className={styles.link}
                      onClick={() => {
                        toast.info("Contact College admin!!");
                      }}
                    >
                      <a>{"Username / Password ?"}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        // <div className={styles.main}>
        //   {/* <ToastContainer /> */}
        //   <div className={styles.con1}>
        //     <Image src={"/gec.svg"} alt="" height={250} width={250} />
        //   </div>
        //   <div className={styles.con2}>
        //     <div className={styles.card}>
        //       <div className={styles.maincont}>
        //         <div className={styles.h1container}>
        //           <h1 className={styles.h1}> LOGIN</h1>
        //           <h2 className={styles.h2C}>STAFF | FACULTY</h2>
        //         </div>

        //         <div className={styles.box}>
        //           <div className={styles.box2}>
        //             <h2 className={styles.h2}>Username</h2>
        //             <input
        //               type="email"
        //               name="email"
        //               placeholder="Email"
        //               className={styles.textfiled}
        //               value={email}
        //               onChange={(event) => setEmail(event.target.value)}
        //             ></input>
        //           </div>
        //         </div>

        //         <div className={styles.box}>
        //           <div className={styles.box2}>
        //             <h2 className={styles.h2}>Password</h2>
        //             <input
        //               type="password"
        //               name="email"
        //               placeholder="Password"
        //               className={styles.textfiled}
        //               value={password}
        //               onChange={(event) => setPassword(event.target.value)}
        //             ></input>
        //           </div>
        //         </div>
        //         <div className={styles.box5}>
        //           <Checkbox
        //             label="checkbox"
        //             value={remember}
        //             onChange={(event) => setRemember(event.target.value)}
        //             className={styles.checkbox}
        //             style={{ color: "white" }}
        //             sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
        //           ></Checkbox>
        //           Remember Password?
        //         </div>
        //         <div className={styles.box4}>
        //           <div className={styles.buttbox}>
        //             <button className={styles.button} onClick={login}>
        //               Log In
        //             </button>
        //           </div>

        //           <div className={styles.box3}>
        //             {"Forgot "}
        //             <div className={styles.link}>
        //               <Link href="/"> {"Username / Password?"}</Link>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
      )}
    </>
  );
}

export default Index;

Index.getLayout = function PageLayout(page) {
  return <> {page}</>;
};
