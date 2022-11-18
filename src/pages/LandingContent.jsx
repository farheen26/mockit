import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { height } from "@mui/system";
import rocket from "./../assets/pngfind.com-rocketship-png-2134284.png";

const LandingContent = () => {
  return (
    <Grid container spacing={2} alignItems="center"
    justifyContent="center">
      <Grid item sx={6}>
        <Paper
          elevation={4}
          sx={{
            marginTop: "70px",
            padding: "30px",
            height: "250px",
            width: "500px",
          }}
        >
          <Typography
            sx={{ fontSize: "35px", color: "#006666", fontFamily: "system-ui" }}
          >
            Let's get started
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              marginTop: "25px",
              marginBottom: "65px",
              fontFamily: "system-ui",
            }}
          >
            Don't wait for the backend to be ready, generate custom API response
            with Mockit and start working on your application straightaway.
          </Typography>
          <Link
            to="/manage-mock"
            sx={{
              fontSize: "30px",
              marginTop: "20px",
              fontFamily: "system-ui",
              color: "#0b0b45",
            }}
          >
            <b>Start designing your mocks >></b>
          </Link>
        </Paper>
      </Grid>
      <Grid item sx={6}>
        <img
          src={rocket}
          alt="rocket image"
          style={{ height: "450px", marginLeft: "0px", marginTop: "70px" }}
        />
      </Grid>
    </Grid>
  );
};

export default LandingContent;
