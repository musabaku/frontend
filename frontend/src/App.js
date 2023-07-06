import React from "react";
import "./App.css";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Header from "./component/layout/header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import WebFont from "webfontloader";
import Home from "./component/Home/Home.js"
import ProductDetails from "./component/Product/ProductDetails.js"
import Products from "./component/Product/Products.js"
import Search from "./component/Product/Search.js"
import LoginSignup from "./component/User/LoginSignup";
import store from "./store.js"
import UserOptions from "./component/layout/header/UserOptions.js"
import { useSelector } from "react-redux";
import {userLoad} from "./component/actions/userAction"
import Account from "./component/User/Account.js"
import UpdateProfile from "./component/User/UpdateProfile.js"
import UpdatePassword from "./component/User/UpdatePassword.js"
function App() {
  React.useEffect(() => {
    WebFont.load({
      google: { families: ["Roboto", "Droid Sans"] },
    });

    store.dispatch(userLoad())
  }, []);

  const {user, isAuthenticated} = useSelector((state)=>state.user)
  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/me/update" element={<UpdateProfile />} />
        <Route path="/password/update" element={<UpdatePassword />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
