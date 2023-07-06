import React, { Fragment, useState } from 'react'
import "./Header.css"
import {SpeedDial, SpeedDialAction} from  "@material-ui/lab"
import  {logout}  from "../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import zIndex from '@material-ui/core/styles/zIndex';

const UserOptions = ({ user }) => {
    const [open,setOpen] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isAuthenticated} = useSelector((state)=>state.user)
    const options = [
        { icon: <ListAltIcon />, name: "Orders", func: orders },
        { icon: <PersonIcon />, name: "Profile", func: account },
        // {
        //   icon: (
        //     <ShoppingCartIcon
        //       style={{ color: cartItems.length > 0 ? "tomato" : "unset" }}
        //     />
        //   ),
        //   name: `Cart(${cartItems.length})`,
        //   func: cart,
        // },
        { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
      ];
    

    if (user.role === "admin") {
        options.unshift({
          icon: <DashboardIcon />,
          name: "Dashboard",
          func: dashboard,
        });
      }
    
      function dashboard() {
        navigate("/admin/dashboard");
      }
    
      function orders() {
        navigate("/orders");
      }
      function account() {
        navigate("/account");
      }
      function cart() {
        navigate("/cart");
      }
      function logoutUser() {
        dispatch(logout());
        toast.success("Logout Successfully");
      }
    

  return (
    <Fragment>
<SpeedDial
ariaLabel="SpeedDial tooltip example"
onClose={() => setOpen (false) }
onOpen={() => setOpen (true)}
open={open}
style={{zIndex:"11"}}
direction='down'
className='speedDial'
icon={<img
className="speedDialIcon"
src={"https://i.ibb.co/cQ2ZmP1/pic-44-x-44.jpg"}
alt="Profile"
/>}
>

{options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={window.innerWidth <= 600 ? true : false}
          />
        ))}
      </SpeedDial>
    </Fragment>
  )
}

export default UserOptions




