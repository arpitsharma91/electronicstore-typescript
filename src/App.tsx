import { Routes, Route } from "react-router";
import React, { Suspense } from "react";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import Electronics from "./Components/Electronics/Electronics";
import Airconditioners from "./Components/ElectronicsAcList/ElectronicsAcList";
import Television from "./Components/ElectronicsTvList/ElectronicsTvList";
import Washingmachine from "./Components/ElectronicsMachineList/ElectronicsMachineList";
import Allitems from "./Components/Allitems/Allitems";
import Productdetail from "./Containers/ProductDetail/ProductDetail";
import Login from "./Containers/Auth/Login/Login";
import Signup from "./Containers/Auth/Signup/Signup";
import Footer from "./Components/Footer/Footer";
import Wrongpage from "./Components/Wrongpage";
import { Shoppingcontext } from "./shared/Context/UserContext";
import UserProfile from "./Containers/UserDashboard/UserProfile";
import UserOrderDetails from "./Containers/UserDashboard/UserOrderDetails";
//import UserDashboard from "./Containers/UserDashboard/UserDashboard";
//import Cart from "./Containers/UserDashboard/Cart";

const UserDashboard = React.lazy(
  () => import("./Containers/UserDashboard/UserDashboard")
);
const Cart = React.lazy(() => import("./Containers/UserDashboard/Cart"));

function App() {
  const user = Shoppingcontext();
  return (
    <React.Fragment>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/electronics" Component={Electronics} />
          <Route path="airconditioners" Component={Airconditioners} />
          <Route path="/televisions" Component={Television} />
          <Route path="washingmachines" Component={Washingmachine} />
          <Route path="/allitems" Component={Allitems} />
          <Route path="products/:productId" Component={Productdetail} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
          <Route path="*" Component={Wrongpage} />
          {user.authData.token ? (
            <React.Fragment>
              <Route path="/userdashboard" element={<UserDashboard />} />
              <Route path="/userdashboard/cart" element={<Cart />} />
              <Route path="/profile" Component={UserProfile} />
              <Route path="/orders" Component={UserOrderDetails} />
            </React.Fragment>
          ) : (
            <Route path="/" Component={Home} />
          )}
        </Routes>
        <Footer />
      </Suspense>
    </React.Fragment>
  );
}

export default App;
