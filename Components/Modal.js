import React, { useState } from "react";
import styles from "../styles/Card.module.scss";
import Dropdown from "react-dropdown";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { Button, message, Steps, theme, ConfigProvider, Modal } from "antd";

const EditModal = ({ toggleModal }) => {
  const dropdownoptions = [
    { value: "MECH", label: "Mechanical" },
    { value: "CIVIL", label: "Civil" },
    { value: "ENE", label: "Electronics and Electrical" },
    { value: "ETC", label: "Electronics and Telecommunication" },
    { value: "IT", label: "Informartion Technology" },
    { value: "COMP", label: "Computers" },
  ];

  const [dept, setDept] = useState(dropdownoptions[0].value);

  const Content = (title) => {
    if (title == "Personal") {
      return (
        <div className={styles.personalCon}>
          <div className={styles.details}>
            <div className={styles.detailBox}>
              <h1 className={styles.h1x}>Don Joe</h1>
              <h2 className={styles.h2x}>
                Update your photo and other details
              </h2>
            </div>
            <div className={styles.image}>
              <Image
                alt=""
                src={"/dp.jpg"}
                height={90}
                width={90}
                style={{ borderRadius: "50%" }}
              ></Image>
            </div>
          </div>
          <div className={styles.inputFields}>
            <div className={styles.row}>
              <div className={styles.column}>
                <div className={styles.box}>
                  <div className={styles.box2}>
                    <h2 className={styles.h2}>First Name</h2>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      className={styles.textfiled}
                    ></input>
                  </div>
                </div>
              </div>

              <div className={styles.column}>
                <div className={styles.box}>
                  <div className={styles.box2}>
                    <h2 className={styles.h2}>Last Name</h2>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      className={styles.textfiled}
                    ></input>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.column}>
                <div className={styles.box}>
                  <div className={styles.box2}>
                    <h2 className={styles.h2}>Email</h2>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className={styles.textfiled}
                    ></input>
                  </div>
                </div>
              </div>

              <div className={styles.column}>
                <div className={styles.box}>
                  <div className={styles.box2}>
                    <h2 className={styles.h2}>Phone Number</h2>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Phone No."
                      className={styles.textfiled}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (title == "Academic") {
      return (
        <div className={styles.personalCon}>
          <div className={styles.takeSpace}></div>
          <div className={styles.inputFields}>
            <div className={styles.row}>
              <div className={styles.column}>
                <div className={styles.box}>
                  <div className={styles.box2}>
                    <h2 className={styles.h2}>Roll No.</h2>
                    <input
                      type="number"
                      name="rollnumber"
                      placeholder="Roll number"
                      className={styles.textfiled}
                    ></input>
                  </div>
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.box}>
                  <div className={styles.box2}>
                    <h2 className={styles.h2}>Department</h2>
                    {/* <input
                      type="name"
                      name="lastName"
                      placeholder="LastName"
                      className={styles.textfiled}
                    ></input> */}
                    <Dropdown
                      className={styles.Dropdown}
                      options={dropdownoptions}
                      onChange={(value) => {
                        console.log(value, "value");
                        setDept(value.value);
                      }}
                      value={dept}
                      placeholder="Select an option"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.column}>
                <div className={styles.box}>
                  <div className={styles.box2}>
                    <h2 className={styles.h2}>CGPA</h2>
                    <input
                      type="email"
                      name="CGPA"
                      placeholder="CGPA"
                      className={styles.textfiled}
                    ></input>
                  </div>
                </div>
              </div>

              <div className={styles.column}>
                <div className={styles.box}>
                  <div className={styles.box2}>
                    <h2 className={styles.h2}>Passing Year</h2>
                    <input
                      type="number"
                      name="passingyear"
                      placeholder="Year"
                      className={styles.textfiled}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (title == "Company") {
      return (
        <div className={styles.personalCon}>
          <div className={styles.takeSpace}></div>

          <div className={styles.inputFields}>
            <div className={styles.row}>
              <div className={styles.column}>
                <div className={styles.box}>
                  <div className={styles.box2}>
                    <h2 className={styles.h2}>Company</h2>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company name"
                      className={styles.textfiled}
                    ></input>
                  </div>
                </div>
              </div>

              <div className={styles.column}>
                <div className={styles.box}>
                  <div className={styles.box2}>
                    <h2 className={styles.h2}>Level</h2>
                    <input
                      type="number"
                      name="level"
                      placeholder="Level No."
                      className={styles.textfiled}
                    ></input>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.column}>
                <div className={styles.box}>
                  <div className={styles.box2}>
                    <h2 className={styles.h2}>Package</h2>
                    <input
                      type="text"
                      name="package"
                      placeholder="CTC / LPA"
                      className={styles.textfiled}
                    ></input>
                  </div>
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.box}>
                  <div className={styles.box2}>
                    <h2 className={styles.h2}>Role</h2>
                    <input
                      type="text"
                      name="role"
                      placeholder="Role"
                      className={styles.textfiled}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  const steps = [
    {
      title: "Personal",
      content: Content("Personal"),
    },
    {
      title: "Academic",
      content: Content("Academic"),
    },
    {
      title: "Company",
      content: Content("Company"),
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const toggleEditModal = () => {
    setIsModalOpen(true);
  };

  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <>
      {isModalOpen ? (
        <Modal
          mousePosition={{
            x: 300,
            y: 300,
          }}
          className={styles.editModal}
          destroyOnClose
          open={toggleEditModal}
          onCancel={handleCancel}
          footer={[
            <Button key={"edit"} onClick={""}>
              Edit
            </Button>,
            <Button key={"cancel"} onClick={handleCancel}>
              Cancel
            </Button>,
          ]}
        >
          <h1>Edit record?</h1>
          <h3>edit foll persons all perosnal record</h3>
        </Modal>
      ) : (
        <></>
      )}
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.cancelIcon}>
            <Button className={styles.cancelIconButton} onClick={toggleModal}>
              {" "}
              <Icon
                style={{
                  color: "black",
                  height: "30",
                  width: "30",
                  // paddingBottom: "4rem",
                }}
                icon="iconoir:cancel"
                width={"2rem"}
              ></Icon>
            </Button>
          </div>
          <div className={styles.dataBox}>
            <>
              <ConfigProvider
                theme={{
                  components: {
                    Steps: {
                      colorPrimary: "black",
                    },
                  },
                }}
              >
                {" "}
                <Steps
                  className={styles.steps}
                  current={current}
                  items={items}
                  onChange={onChange}
                  direction="vertical"
                />
              </ConfigProvider>
              <div className={styles.contentStyle}>
                {steps[current].content}
              </div>
            </>
          </div>
          <div className={styles.buttonBox}>
            <div>
              <button onClick={toggleEditModal} className={styles.editButton}>
                Confirm Edit
              </button>
            </div>
            <div>
              <button onClick={toggleModal} className={styles.cancelButton}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditModal;
