import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Avatar } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Typography from "@mui/material/Typography";

import { withStyles } from "@mui/styles";
import styles from "../styles";
import Homeicon from "@mui/icons-material/Home";

import { useGetCryptosQuery } from "../services/cryptoApis";
import { maxWidth } from "@mui/system";
import { Link } from "react-router-dom";

import Crypto from "./Crypto";
import millify from "millify";

const Home = (props) => {
  const { classes } = props;
  let array = [1, 2, 3, 4, 5];
  const { isSimplified } = props;
  const count = !isSimplified ? 10 : 100;
  const { data, isFetching } = useGetCryptosQuery(count);
  console.log(data);
  const globalStats = data?.data;
  //console.log(globalStats.coins);
  if (isFetching) return "Loading...";
  return (
    <>
      {" "}
      <div>
        <div>
          <Typography variant="h5" style={{ paddingLeft: "15px" }}>
            Global Crypto Stats
          </Typography>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="left">Total Crypto Currencies: </TableCell>
                <TableCell align="left">
                  {millify(globalStats.stats.total)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Total Exchanges:</TableCell>
                <TableCell align="left">
                  {millify(globalStats.stats.totalExchanges)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Total MarketCap:</TableCell>
                <TableCell align="left">
                  {millify(globalStats.stats.totalMarketCap)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Total 24h Volume:</TableCell>
                <TableCell align="left">
                  {millify(globalStats.stats.total24hVolume)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Total Markets:</TableCell>
                <TableCell align="left">
                  {globalStats.stats.totalMarkets}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>{" "}
        <Typography
          variant="h6"
          style={{ paddingLeft: "15px", paddingTop: "10px" }}
        >
          Top 10 Cryptocurrencies in the world{" "}
          <Link to="/cryptocurrencies">Show more...</Link>
        </Typography>
      </div>
      <div>
        <Crypto isSimplified />
      </div>
      <div>
        <Typography
          variant="h6"
          style={{ paddingLeft: "15px", paddingTop: "10px" }}
        >
          Top Crypto News in the world <Link to="/news">Show more...</Link>
        </Typography>
      </div>
    </>
  );
};

export default withStyles(styles)(Home);
