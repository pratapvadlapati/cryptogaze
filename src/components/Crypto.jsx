import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Avatar } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import millify from "millify";

import Typography from "@mui/material/Typography";

import { withStyles } from "@mui/styles";
import styles from "../styles";
import Homeicon from "@mui/icons-material/Home";

import { useGetCryptosQuery } from "../services/cryptoApis";
import { maxWidth } from "@mui/system";
import { Link } from "react-router-dom";

const Crypto = (props) => {
  const { classes } = props;

  const { isSimplified } = props;

  const count = isSimplified ? 10 : 100;
  const { data, isFetching } = useGetCryptosQuery(count);

  const [cryptos, setCryptos] = useState([]);

  const [search, setSearch] = useState("");
  //const globalStats = data?.data;

  useEffect(() => {
    setCryptos(data?.data?.coins);
    const filteredData = data?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptos, search]);

  if (isFetching) return "Loading...";

  return (
    <>
      {" "}
      {!isSimplified ? (
        <div className={classes.search}>
          <input
            className={classes.cryptosearch}
            type="search"
            placeholder="Search Coins"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      ) : null}
      <div>
        <Grid container spacing={3} className={classes.gcontainer}>
          {cryptos?.map((x) => {
            return (
              <Grid
                item
                xs={2}
                sm={4}
                md={4}
                className={classes.gitem}
                key={x.i}
              >
                <Card sx={{ minWidth: 275 }}>
                  <Paper style={{ height: "50px" }}>
                    <Typography
                      sx={{ mb: 1.5 }}
                      color="text.secondary"
                      gutterBottom
                      style={{ padding: "4px" }}
                    >
                      {" "}
                      {x.rank}
                      {". "}
                      <Link to={`/coins/${x.id}`}>{x.name}</Link>
                      <Avatar
                        style={{ float: "right", margin: "2px" }}
                        src={x.iconUrl}
                      />
                    </Typography>
                  </Paper>
                  <CardContent>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {millify(x.price)}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Market Cap: {millify(x.marketCap)}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Daily Change: {millify(x.change)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default withStyles(styles)(Crypto);
