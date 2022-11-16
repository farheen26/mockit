import * as React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    //backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    backgroundColor: "#3F3F3F",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const rows1 = [
  {
    apiName: "api1",
    desc: "200",
    content: "application/json",
    date: "2022-10-22",
    action: "del",
    method: "GET",
    charset: "UTF-8",
  },
  {
    apiName: "api2",
    desc: "200",
    date: "2022-10-22",
    action: "del",
    method: "GET",
    content: "application/json",
    charset: "UTF-8",
  },
  {
    apiName: "api3",
    desc: "200",
    date: "2022-10-22",
    action: "del",
    method: "GET",
    content: "application/json",
    charset: "UTF-8",
  },
];

const TableDisplay = () => {
  const url =
    "https://77fxp09s04.execute-api.us-east-1.amazonaws.com/api/collections";
  const headers = {
    "Content-Type": "application/json",
  };

  const [getAPI, setGetAPI] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("getAPI", getAPI);

  useEffect(() => {
    getAllAPIS();
  }, []);

  const getAllAPIS = async () => {
    const response = await axios.get(
      `${url}`,

      {
        headers: headers,
      }
    );
    //console.log("response in ui app", response.data);
    const data = response.data;
    setGetAPI(data);
    setLoading(true);
    return data;
  };

  return (
    <TableContainer component={Paper} sx={{ marginTop: 2, marginLeft: "0px" }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" sx={{ fontFamily: "system-ui" }}>
              Name
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ fontFamily: "system-ui" }}>
              Method
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ fontFamily: "system-ui" }}>
              Description
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ fontFamily: "system-ui" }}>
              Date
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ fontFamily: "system-ui" }}>
              Actions
            </StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {getAPI.GET &&
            getAPI.GET.map((row) => (
              <StyledTableRow key={row.apiName}>
                <StyledTableCell align="center" component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.method}</StyledTableCell>
                <StyledTableCell align="center">
                  <Grid container direction="column">
                    <Grid item direction="row">
                      {" "}
                      <Button
                        variant="contained"
                        sx={{ height: "20px", background: "black" }}
                      >
                        <Typography>{row.httpStatus}</Typography>
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          background: "#05998C",
                          marginLeft: "2px",
                          height: "20px",
                        }}
                      >
                        {row.charset}
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          background: "#E88504",
                          marginLeft: "2px",
                          height: "20px",
                        }}
                      >
                        {row.contentType}
                        {row.httpResponseBody}
                      </Button>
                    </Grid>
                    <Grid item>
                      <TextField
                        multiline
                        rows={4}
                        sx={{ marginTop: "15px", width: "400px" }}
                        value={row.httpResponseBody}
                      >
                        {row.httpResponseBody}
                      </TextField>
                    </Grid>
                  </Grid>
                </StyledTableCell>
                <StyledTableCell align="center">
                  Created on {row.date}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton
                    onClick={() =>
                      window.open(
                        "https://77fxp09s04.execute-api.us-east-1.amazonaws.com/api/public/111/apiv?token=admin2022",
                        "_blank"
                      )
                    }
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                    <OpenInNewIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          {getAPI.POST &&
            getAPI.POST.map((row) => (
              <StyledTableRow key={row.apiName}>
                <StyledTableCell align="center" component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.method}</StyledTableCell>
                <StyledTableCell align="center">
                  <Grid container direction="column">
                    <Grid item direction="row">
                      {" "}
                      <Button
                        variant="contained"
                        sx={{ height: "20px", background: "black" }}
                      >
                        <Typography>{row.httpStatus}</Typography>
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          background: "#05998C",
                          marginLeft: "2px",
                          height: "20px",
                        }}
                      >
                        {row.charset}
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          background: "#E88504",
                          marginLeft: "2px",
                          height: "20px",
                        }}
                      >
                        {row.contentType}
                      </Button>
                    </Grid>
                    <Grid item>
                      <TextField
                        multiline
                        rows={4}
                        sx={{ marginTop: "15px", width: "400px" }}
                      >
                        placeholder
                      </TextField>
                    </Grid>
                  </Grid>
                </StyledTableCell>
                <StyledTableCell align="center">
                  Created on {row.date}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton
                    onClick={() =>
                      window.open(
                        "https://77fxp09s04.execute-api.us-east-1.amazonaws.com/api/public/111/apiv?token=admin2022",
                        "_blank"
                      )
                    }
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                    <OpenInNewIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableDisplay;
