import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import BuildIcon from "@mui/icons-material/Build";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import createMock from "./../assets/createMock.png";
import rocket from "./../assets/rocket-png-40797.png";
import MockForm from "./MockForm";

const CreateMock = () => {
  const navigate = useNavigate();

  const handleManageMock = () => {
    navigate("/manage-mock");
  };

  const handleBeta = () => {
    navigate("/beta");
  };

  return (
    <Box
      sx={{
        marginLeft: 1,
        marginRight: 1,
        //width: 1263,
        height: "auto",
        backgroundColor: "#f0f8ff",
      }}
    >
      <Header />

      <Box
        sx={{
          marginTop: 2,
          backgroundColor: "white",
          paddingTop: "30px",
          paddingBottom: "0px",
          height: "150px",
          borderRadius: "12px",
        }}
      >
        <Grid container direction="row">
          <Grid item>
            <img
              src={rocket}
              alt="manage"
              style={{
                width: "120px",
                height: "120px",
                marginLeft: "20px",
              }}
            />
          </Grid>
          <Grid item sx={{ display: "flex", justifyContent: "center" }}>
            {/* <img
          src={backdrop}
          alt="manage"
          style={{ height: "150px", width: "1200px" }} 
        />*/}
            <Typography
              sx={{
                fontFamily: "system-ui",
                fontSize: "30px",
                paddingLeft: "490px",
                display: "flex",
                justifyContent: "center",
                marginTop: "36px",
              }}
            >
              Design your mocks
            </Typography>
          </Grid>
          <Grid item sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              onClick={() => {
                handleManageMock();
              }}
              variant="outlined"
              sx={{
                marginLeft: "200px", //300px if beta button is removed,
                marginTop: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              {" "}
              <ManageAccountsIcon
                sx={{
                  color: "inherit",
                  marginRight: "3px",
                  width: "30px",
                  height: "30px",
                }}
              />
              MANAGE MY MOCKS
            </Button>
            <Button
              variant="contained"
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginLeft: "10px",
                height: "40px",
                marginTop: "40px",
              }}
            >
              <FiberNewIcon
                sx={{ marginRight: "3px", width: "30px", height: "30px" }}
              />{" "}
              MOCKS
            </Button>
            <Button
              variant="contained"
              onClick={handleBeta}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginLeft: "10px",
                height: "40px",
                marginTop: "40px",
                backgroundColor: "#702963",
              }}
            >
              <BuildIcon
                sx={{ marginRight: "3px", width: "30px", height: "23px" }}
              />{" "}
              BETA
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <MockForm />
      </Box>
      <Footer />
    </Box>
  );
};

export default CreateMock;
