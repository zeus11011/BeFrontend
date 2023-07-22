import React, { useState } from "react";
import { useRouter } from "next/router";
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/Reducers/userSlice";
import { Icon } from "@iconify/react";
import PageIcon from "@rsuite/icons/Page";
import PhoneIcon from "@rsuite/icons/Phone";
import MemberIcon from "@rsuite/icons/Member";
import SearchPeopleIcon from "@rsuite/icons/SearchPeople";
import FileUploadIcon from "@rsuite/icons/FileUpload";
import ExitIcon from "@rsuite/icons/Exit";
import "../styles/ProfileDropdown.less";
import ResultUpload from "./ResultUpload";

const ProfileDropdown = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user.value);

  const handleOpenResult = () => {
    setShowModal(true);
  };
  const handleCloseResult = () => {
    setShowModal(false);
  };
  const logoutuser = () => {
    dispatch(logout());
    router.push("/login");
  };
  // console.log(user.name);
  return (
    <>
      <>
        {" "}
        {showModal ? (
          <Modal
            width={"72vw"}
            open={showModal}
            onCancel={handleCloseResult}
            footer={null}
          >
            <ResultUpload />
          </Modal>
        ) : (
          <></>
        )}
      </>

      <div>
        {" "}
        <Dropdown
          title={user ? user.name : ""}
          placement="bottomEnd"

          // trigger="hover"
        >
          <Dropdown.Item
            onClick={() => {
              router.push("Profile");
            }}
            icon={<MemberIcon />}
            style={{ color: "black" }}
          >
            My Profile
          </Dropdown.Item>
          <Dropdown.Item
            style={{ color: "black" }}
            icon={<FileUploadIcon />}
            onClick={handleOpenResult}
          >
            Post Result
          </Dropdown.Item>

          <Dropdown.Item
            style={{ color: "black" }}
            icon={<ExitIcon />}
            onClick={logoutuser}
          >
            LogOut
          </Dropdown.Item>
        </Dropdown>
      </div>
    </>
  );
};

export default ProfileDropdown;
