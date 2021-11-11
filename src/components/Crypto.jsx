import React from "react";
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
  let array = [1, 2, 3, 4, 5];

  const { isSimplified } = props;
  console.log(props);
  const count = isSimplified ? 10 : 100;
  const { data, isFetching } = useGetCryptosQuery(count);
  console.log(data);
  const globalStats = data?.data;
  //console.log(globalStats.coins);

  if (isFetching) return "Loading...";

  return (
    <>
      {" "}
      <div>
        <Grid container spacing={3} className={classes.gcontainer}>
          {globalStats?.coins.map((x) => {
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
