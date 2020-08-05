import React from "react";
import Content from "./DashboardContent/DashboardContent";
import Appbar from "../Appbar/Appbar/Appbar";
import whiteEmail from "../../assets/icons/emailIcon.svg";
import whiteBell from "../../assets/icons/whiteBellIcon.svg";
import whiteMenu from "../../assets/icons/whiteMenu-barCloseIcon.svg";

export default function Dashboard(props) {
  console.log(props);
  return (
    <div
    // style={{ backgroundColor: "red" }}
    >
      <Appbar
        bgcolor="#00BBDC"
        shadow="5px 0px #00BBDC"
        emailIcon={whiteEmail}
        bellIcon={whiteBell}
        menuIcon={whiteMenu}
        profileTextColor="white"
        page={<Content />}
      />
    </div>
  );
}
