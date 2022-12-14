import * as React from "react";
import Box from "@mui/material/Box";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ background: "bebebe", height: "150px", marginTop: "10px",display: "flex", alignItems: "center",
    justifyContent: "center" }}>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          paddingLeft: "25px",
          paddingTop: "25px",
          color: "black",
        }}
      >
        <CopyrightIcon sx={{ paddingRight: "2px" }} />
        2022 Mockit.All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
