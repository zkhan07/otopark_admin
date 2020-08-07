import React, { Suspense, lazy } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
// import Dashboard from "../Components/Dashboard/Dashboard";
import Loader from "../util/Loader/Loader";
// import UserDash from "../Components/Users/UserDash";
// import Parking from "../Components/Parking/Parking";
// import Login from "../Components/LoginPage/LoginPage";
// import SignIn from "../Components/LoginPage/LoginPage";
// import Content from "../Components/Users/Content";

const LoginPage = lazy(() => import("../Components/LoginPage/LoginPage"));
const Dashboard = lazy(() => import("../Components/Dashboard/Dashboard"));
const UserDash = lazy(() => import("../Components/Users/UserDash"));
const Parking = lazy(() => import("../Components/Parking/Parking"));
const Booking = lazy(() => import("../Components/Booking/Booking"));
const Payment = lazy(() => import("../Components/Payment/Payment"));
const Hardware = lazy(() => import("../Components/Hardware/Hardware"));
const Support = lazy(() => import("../Components/Support/Support"));
const Notification = lazy(() =>
  import("../Components/Notification/Notification")
);

const HardwareGetIn = lazy(() =>
  import("../Components/Hardware/HardwareGetIn/HardwareGetIn")
);

export const Routes = () => {
  return (
    <HashRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/otopark/login" component={LoginPage} />

          <Route exact path="/" component={Dashboard} />
          <Route exact path="/otopark/users" component={UserDash} />
          <Route exact path="/otopark/parking" component={Parking} />
          <Route exact path="/otopark/booking" component={Booking} />
          <Route exact path="/otopark/payment" component={Payment} />
          <Route exact path="/otopark/hardware" component={Hardware} />
          <Route exact path="/otopark/support" component={Support} />
          <Route exact path="/otopark/notification" component={Notification} />

          <Route exact path="/otopark/getin" component={HardwareGetIn} />

          {/* <Route exact path="/users" component={Content} /> */}

          {/* <Route exact path="*" component={NotFound} /> */}
        </Switch>
      </Suspense>
    </HashRouter>
  );
};
