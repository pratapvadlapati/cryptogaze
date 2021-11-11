import { Avatar, Typography } from "@mui/material";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import HomeIcon from "@mui/icons-material/Home";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import millify from "millify";

//import { withStyles } from "@material-ui/styles";
//import { makeStyles } from "@mui/styles";

import { withStyles } from "@mui/styles";

import styles from "../styles";

import logo from "../images/bitcoin-2.png";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { classes } = props;

  return (
    <div>
      <div className={classes.logoContainer}>
        <div className={classes.logo}>
          <Avatar src={logo} alt="logo" size="large" />
        </div>

        <div>
          <Typography variant="h4" className={classes.logotext}>
            CryptoGaze
          </Typography>
        </div>
      </div>
      <MenuList>
        <MenuItem>
          <HomeIcon />
          <Link to="/" className={classes.mtext}>
            Home{" "}
          </Link>
        </MenuItem>
        <MenuItem>
          {" "}
          <MonetizationOnIcon />{" "}
          <Link to="/cryptocurrencies" className={classes.mtext}>
            Cryptocurrencies
          </Link>{" "}
        </MenuItem>
        <MenuItem>
          {" "}
          <ApartmentIcon />{" "}
          <Link to="/exchanges" className={classes.mtext}>
            Exchanges
          </Link>
        </MenuItem>
        <MenuItem>
          {" "}
          <AnnouncementIcon />{" "}
          <Link to="/news" className={classes.mtext}>
            News
          </Link>
        </MenuItem>
      </MenuList>
    </div>
  );
};

export default withStyles(styles)(Navbar);
