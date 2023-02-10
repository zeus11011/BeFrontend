import { style } from "@mui/system";
import Image from "next/image";
import React from "react";
import styles from "../../../styles/Form.module.scss";
import { Inter } from "@next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

const index = () => {
  return (
    <div className={[styles.container, inter.className].join(" ")}>
      <div className={styles.main}>
        <div className={styles.cont1}>
          <div className={styles.companyprof}>
            <h1 className={styles.h1}>Company Name</h1>
            <p className={styles.p}>EMail</p>
            <p className={styles.p}>1234567891</p>
            <p className={styles.p}>Company website</p>
          </div>
          <div className={styles.img}>
            <Image
              src={"/pp.svg"}
              width={250}
              height={250}
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
        <div className={styles.contAddjobs}>
          <p className={[styles.p, inter.className].join(" ")}>JOB</p>
          <div className={styles.input}>
            <input />
            <button>+ Add more</button>
          </div>
        </div>
        <div className={styles.contAddjobs}>
          <p className={[styles.p, inter.className].join(" ")}>Internship</p>
          <div className={styles.input}>
            <input />
            <button>+ Add more</button>
          </div>
        </div>
        <div className={styles.contAddjobs}>
          <p className={[styles.p, inter.className].join(" ")}>Position/Role</p>
          <div className={styles.input}>
            <input />
            <button>+ Add more</button>
          </div>
        </div>
        <div className={styles.contAddjobs}>
          <p className={[styles.p, inter.className].join(" ")}>SKILLS/ROLES</p>
          <div className={styles.input}>
            <input />
            <button>+ Add more</button>
          </div>
        </div>
        <div className={styles.contAddjobs}>
          <p className={[styles.p, inter.className].join(" ")}>ADD CTC</p>
          <div className={styles.input}>
            <input />
            <button>+ Add more</button>
          </div>
        </div>
        <div className={styles.contAddjobs}>
          <p className={[styles.p, inter.className].join(" ")}>
            Date of Interview
          </p>
          <div className={styles.input}>
            <input type={"date"} />
          </div>
        </div>
        <div className={styles.contAddjobs}>
          <p className={[styles.p, inter.className].join(" ")}>BRANCH</p>
          <div className={styles.input}>
            <input />
            <button>+ Add more</button>
          </div>
        </div>

        <div className={styles.contAddjobs}>
          <p className={[styles.p, inter.className].join(" ")}>CRITERIA</p>
          <div className={styles.input}>
            <input />
            <button>+ Add more</button>
          </div>
        </div>
        <div className={styles.contAddjobs}>
          <p className={[styles.p, inter.className].join(" ")}>MODE OF JOB</p>
          <div className={styles.input}>
            <input />
            <button>+ Add more</button>
          </div>
        </div>
        <div className={styles.contAddjobs}>
          <p className={[styles.p, inter.className].join(" ")}>LOCATION</p>
          <div className={styles.input}>
            <input />
            <button>+ Add more</button>
          </div>
        </div>
        <div className={styles.contAddjobs}>
          <p className={[styles.p, inter.className].join(" ")}>PERKS</p>
          <div className={styles.input}>
            <input />
            <button>+ Add more</button>
          </div>
        </div>
        <div className={styles.contAddjobs}>
          <p className={[styles.p, inter.className].join(" ")}>OPENINGS</p>
          <div className={styles.input}>
            <input />
            <button>+ Add more</button>
          </div>
        </div>
        <div className={styles.contAddjobs}>
          <p className={[styles.p, inter.className].join(" ")}>COMMENT</p>
          <div className={styles.input}>
            <textarea rows={3} style={{ width: "100%" }}></textarea>
          </div>
        </div>
        <div className={styles.contAddjobs}>
          <p className={[styles.p, inter.className].join(" ")}>IMPORT FILE</p>
          <div className={styles.input}>
            <input />
            <button>+ Add more</button>
          </div>
        </div>
        <div className={styles.buttons}>
          <button>REVIEW</button>
          <button>SAVE</button>
        </div>
      </div>
    </div>
  );
};

export default index;

index.getLayout = function PageLayout(page) {
  return <div> {page}</div>;
};
