import React from "react";
import Appbar from "../Appbar/Appbar/Appbar";
import BookingContent from "./BookingContent/BookingContent";
import blueEmail from "../../assets/icons/blue-emailIcon.svg";
import blueBell from "../../assets/icons/blueBellIcon.svg";
import blueMenu from "../../assets/icons/menu-barCloseIcon.svg";

export default function Booking() {
  return (
    <div>
      <Appbar
        bgcolor="white"
        color="black"
        shadow="5px 0px white"
        emailIcon={blueEmail}
        bellIcon={blueBell}
        menuIcon={blueMenu}
        page={<BookingContent />}
      />
    </div>
  );
}
