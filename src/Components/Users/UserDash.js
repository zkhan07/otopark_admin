import React from "react";
import Appbar from "../Appbar/Appbar/Appbar";
import UserContent from "./UserContent/UserContent";
import blueEmail from "../../assets/icons/blue-emailIcon.svg";
import blueBell from "../../assets/icons/blueBellIcon.svg";
import blueMenu from "../../assets/icons/menu-barCloseIcon.svg";

export default function UserDash() {
  return (
    <div>
      <Appbar
        bgcolor="white"
        color="black"
        shadow="5px 0px white"
        emailIcon={blueEmail}
        bellIcon={blueBell}
        menuIcon={blueMenu}
        page={<UserContent />}
      />
    </div>
  );
}
