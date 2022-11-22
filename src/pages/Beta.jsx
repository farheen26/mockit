import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Grid, Typography, TextField, Button } from "@mui/material";

var data = {
  accountHolderName: "Farheen",
  address: "Bangalore",
  email: "farheen.fathima@gmail.com",
  accountType: "Saving",
};

const Beta = () => {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = React.useState(false);
  console.log("showMessage", showMessage);

  const handleOnClick = () => {
    setShowMessage(!showMessage);
  };

  return (
    <Box sx={{ marginLeft: "30px", marginTop: "30px" }}>
      <IconButton
        onClick={() => {
          navigate("/manage-mock");
        }}
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <ArrowBackIcon />
      </IconButton>
      <Typography sx={{ fontSize: "25px" }}>Playground</Typography>
      <Grid container direction="column">
        <Grid item>
          <TextField
            sx={{ width: "600px", marginTop: "20px" }}
            id="outlined-multiline-static"
            label="//Generate JSON object for creating new bank account"
            multiline
            rows={8}
            //defaultValue="Default111 Value"
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={handleOnClick}
            sx={{
              backgroundColor: "green",
              color: "white",
              marginTop: "20px",
            }}
          >
            Submit
          </Button>

          {showMessage && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Beta;
