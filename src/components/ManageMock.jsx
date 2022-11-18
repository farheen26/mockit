import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import TableDisplay from "./../components/Table";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import createMock from "./../assets/createMock.png";
import { useNavigate } from "react-router-dom";

const ManageMock = () => {
  const navigate = useNavigate();
  const handleNewMocks = () => {
    navigate("/create-mock");
  };

  return (
    <Box
      sx={{
        marginLeft: 1,
        marginRight: 1,
        //width: 1363,
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
                paddingLeft: "470px",
              }}
            >
              Manage your mocks
            </Typography>
          </Grid>
          <Grid item sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="outlined"
              sx={{ marginLeft: "266px", height: "40px" }}
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
              sx={{ marginLeft: "10px", height: "40px" }}
              onClick={() => {
                handleNewMocks();
              }}
            >
              {" "}
              <FiberNewIcon
                sx={{ marginRight: "3px", width: "30px", height: "30px" }}
              />
              NEW MOCKS
            </Button>
          </Grid>
        </Grid>
      </Box>

      <TableDisplay />
      <Footer />
    </Box>
  );
};

export default ManageMock;
