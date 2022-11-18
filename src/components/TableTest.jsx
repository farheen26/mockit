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
import { Typography } from "@mui/material";
import Spinner from "./Spinner";

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

const TableTest = () => {
  const url =
    "https://77fxp09s04.execute-api.us-east-1.amazonaws.com/api/collections";
  const headers = {
    "Content-Type": "application/json",
  };

  const [getAPI, setGetAPI] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("loading", loading);

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
    console.log("response in ui app", response.data);
    const data = response.data;
    setGetAPI(data);
    setLoading(true);
    return data;
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <TableContainer
          component={Paper}
          sx={{ marginTop: 2, width: "1100px", marginLeft: "80px" }}
        >
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell
                  align="center"
                  sx={{ fontFamily: "system-ui" }}
                >
                  Name
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  sx={{ fontFamily: "system-ui" }}
                >
                  Path
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  sx={{ fontFamily: "system-ui" }}
                >
                  Description
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  sx={{ fontFamily: "system-ui" }}
                >
                  Date
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  sx={{ fontFamily: "system-ui" }}
                >
                  Actions
                </StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {getAPI.GET &&
                getAPI.GET.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell align="center" component="th" scope="row">
                      {row.name}
                    </StyledTableCell>

                    <StyledTableCell align="center">{row.path}</StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      ,
    </>
  );
};

export default TableTest;
