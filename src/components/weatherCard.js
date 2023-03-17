import * as React from "react";
import { Card, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const WhetherCard = (props) => {
  return (
    <Card
      sx={{
        mx: 50,
        my: 10,
        alignContent: "center",
        height: 250,
        boxShadow: 10,
        backgroundColor: "lightBlue",
      }}
    >
      {Object.keys(props.data).length > 2 ? (
        <CardContent>
          <Typography
            sx={{ fontSize: 20, textAlign: "center" }}
            color="text.secondary"
            gutterBottom
          >
            <LocationOnIcon />
            {props.data.name ?? ""}
          </Typography>
          <Grid container spacing={3} sx={{ my: 2 }}>
            <Grid item sx={{ ml: 10 }}>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <DeviceThermostatIcon />
                Real Temp{">"} {props.data.main.temp ?? ""}℃
              </Typography>
            </Grid>
            <Grid item>
              <Typography color="text.secondary">
                <DeviceThermostatIcon />
                Feel{">"} {props.data.main.feels_like ?? ""}℃
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ ml: 6 }}>
                Condition:- {props.data.weather[0].main ?? ""}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      ) : (
        <CardContent>
          <Typography
            sx={{ fontSize: 20, textAlign: "center" }}
            color="text.secondary"
            gutterBottom
          >
            <LocationOnIcon />
            {props.data.message ?? "Please enter any location"}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default WhetherCard;
