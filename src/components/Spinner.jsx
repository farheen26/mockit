import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Spinner() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "30px" }}>
      <CircularProgress sx={{ color: "#002E5C" }} />
    </Box>
  );
}

export function SpinnerDemandBuilder() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", paddingTop: "215px" }}
    >
      <CircularProgress sx={{ color: "#002E5C" }} />
    </Box>
  );
}
