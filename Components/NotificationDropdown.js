import React from "react";
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { useSelector } from "react-redux";
import PhoneIcon from "@rsuite/icons/Phone";
import SearchPeopleIcon from "@rsuite/icons/SearchPeople";
import "../styles/ProfileDropdown.less";
import { Icon } from "@iconify/react";

const NotificationDropdown = ({icon}) => {

  return (
      <div>
      <Dropdown title={<Icon icon={icon} height={"4rem"} />}>    
        <Dropdown.Item icon={<SearchPeopleIcon />}>test 1</Dropdown.Item>
        <Dropdown.Item icon={<PhoneIcon />}>test 2</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default NotificationDropdown;
