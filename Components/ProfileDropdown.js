import React from "react";
import { useRouter } from "next/router";
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/Reducers/userSlice";
import { Icon } from "@iconify/react";
import PageIcon from "@rsuite/icons/Page";
import PhoneIcon from "@rsuite/icons/Phone";
import MemberIcon from "@rsuite/icons/Member";
import SearchPeopleIcon from "@rsuite/icons/SearchPeople";
import ExitIcon from "@rsuite/icons/Exit";
import "../styles/ProfileDropdown.less";
const ProfileDropdown = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user.value);
  const logoutuser = () => {
    dispatch(logout());
    router.push("/login");
  };
  return (
    <div>
      {" "}
      <Dropdown title={user ? user.name : ""}>
        <Dropdown.Item
          onClick={() => {
            router.push("Profile");
          }}
          icon={<MemberIcon />}
        >
          My Profile
        </Dropdown.Item>
        <Dropdown.Item icon={<SearchPeopleIcon />}>About Us</Dropdown.Item>
        <Dropdown.Item icon={<PhoneIcon />}>Contact Us</Dropdown.Item>
        <Dropdown.Item icon={<ExitIcon />} onClick={logoutuser}>
          LogOut
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default ProfileDropdown;
