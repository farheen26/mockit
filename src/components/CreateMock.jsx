import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import FiberNewIcon from "@mui/icons-material/FiberNew";

import Header from "./../components/Header";
import Footer from "./../components/Footer";
import createMock from "./../assets/createMock.png";
import MockForm from "./MockForm";

const CreateMock = () => {
  const navigate = useNavigate();

  const handleManageMock = () => {
    navigate("/manage-mock");
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
          paddingTop: "40px",
          paddingBottom: "0px",
          height: "80px",
          borderRadius: "12px",
        }}
      >
        <Grid container direction="row">
          <Grid item>
            <img
              src={createMock}
              alt="manage"
              style={{
                width: "140px",
                height: "80px",
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
                paddingLeft: "450px",
                display: "flex",
                justifyContent: "center",
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
                marginLeft: "350px",
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
              }}
            >
              <FiberNewIcon
                sx={{ marginRight: "3px", width: "30px", height: "30px" }}
              />{" "}
              MOCKS
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
