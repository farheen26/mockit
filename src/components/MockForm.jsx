import * as React from "react";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Snackbar from "./Snackbar";

const MockForm = () => {
  const [value, setValue] = React.useState("");
  const [httpStatus, sethttpStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [contentType, setContentType] = React.useState("");
  const [charset, setCharset] = React.useState("");
  const [httpHeader, setHttpHeader] = React.useState("");
  const [httpResponseBody, setHttpResponseBody] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);

  console.log("name", name);
  console.log("httpResponseBody123456", httpResponseBody);
  const url =
    "https://77fxp09s04.execute-api.us-east-1.amazonaws.com/api/collections";
  const headers = {
    "Content-Type": "application/json",
  };

  const handleGenerateResponse = async () => {
    console.log("generate HTTP response");
    // event.preventDefault();
    const body = {
      name: name,
      method: "get",
      contentType: contentType,
      charset: charset,
      httpHeader: httpHeader,
      httpStatus: httpStatus,
      response: httpResponseBody,
    };
    console.log("body in mock form", body);

    const response = await axios.post(
      `${url}`,
      { body },

      {
        headers: headers,
      }
    );

    // const data = response.data;
    console.log("response data in mock form", response);
    // setLoading(false);
    // setData(response.data);
    // setPostAPI(data);
    return response;
  };

  const handleChangeInput = (event) => {
    console.log("event", event.target.value);
    setName(event.target.value);
  };

  const handleChangeHttpStatus = (event) => {
    console.log("httpStatus");
    sethttpStatus(event.target.value);
  };

  const handleChangeCharset = (event) => {
    setCharset(event.target.value);
  };

  const handleChangeContentType = (event) => {
    setContentType(event.target.value);
    console.log("ContentType");
  };

  const handleChangeHttpHeader = (event) => {
    setHttpHeader(event.target.value);
    console.log("HttpHeader");
  };

  const handleChangeHttpResponseBody = (event) => {
    setHttpResponseBody(event.target.value);
    console.log("HttpResponseBody");
  };

  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#b3e0d3",
          marginTop: "20px",
          paddingBottom: "20px",
          paddingLeft: "100px",
          paddingRight: "80px",
        }}
      >
        <Grid container direction="column" sx={{ paddingTop: "40px" }}>
          <Grid container direction="row">
            <Grid item>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                {/* <InputLabel htmlFor="grouped-native-select">
                  200 - OK
                </InputLabel> */}
                <Typography>HTTP Status</Typography>
                <Select
                  native
                  // defaultValue=""
                  value={httpStatus}
                  id="grouped-native-select"
                  label="httpStatus"
                  onChange={handleChangeHttpStatus}
                  sx={{
                    backgroundColor: "#ffffff",
                    width: "350px",
                    marginTop: "5px",
                  }}
                >
                  <option aria-label="None" value="" />
                  <optgroup label="1XX Informational Response">
                    <option value={100}>100 - Continue</option>
                    <option value={101}>101 - Switching Response</option>
                  </optgroup>
                  <optgroup label="2XX Success">
                    <option value={200}>200 - OK</option>
                    <option value={201}>201 - Created</option>
                  </optgroup>
                  <optgroup label="3XX Redirection">
                    <option value={300}>300 - Multiple Choices</option>
                    <option value={301}>301 - Moved Permanently</option>
                  </optgroup>
                  <optgroup label="4xx Client Errors">
                    <option value={400}>400 - Bad Request</option>
                    <option value={401}>401 - Unauthorized</option>
                    <option value={403}>403 - Forbidden</option>
                    <option value={404}>404 - Not Found</option>
                  </optgroup>
                  <optgroup label="5xx Server Errors">
                    <option value={500}>500 - Internal Server Error</option>
                    <option value={503}>503 - Service Unavailable</option>
                  </optgroup>
                </Select>
                <FormHelperText>
                  The HTTP Code of the HTTP response you'll receive.
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item>
              <Typography sx={{ paddingLeft: "30px", marginTop: "3px" }}>
                Mock Identifier
              </Typography>
              <TextField
                sx={{
                  marginTop: "9px",
                  marginLeft: "30px",
                  backgroundColor: "#ffffff",
                  width: "350px",
                }}
                onChange={handleChangeInput}
                id="outlined-basic"
                label="Name"
                value={name}
                variant="outlined"
              />
              <FormHelperText sx={{ paddingLeft: "30px" }}>
                Just a name to identify this mock in your management console
                later.
              </FormHelperText>
            </Grid>
          </Grid>

          <Grid container direction="row">
            <Grid item>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Typography>Response content Type</Typography>
                <Select
                  sx={{ backgroundColor: "#ffffff", width: "350px" }}
                  value={contentType}
                  onChange={handleChangeContentType}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="application/json">
                    <em>application/json</em>
                  </MenuItem>
                  <MenuItem value={"application/x-www-form-urlencoded"}>
                    application/x-www-form-urlencoded
                  </MenuItem>
                  <MenuItem value={"application/xhtml+xml"}>
                    application/xhtml+xml
                  </MenuItem>
                  <MenuItem value={"text/html"}>text/html</MenuItem>
                  <MenuItem value={"text/json"}>text/json</MenuItem>
                </Select>
                <FormHelperText>
                  The Content-Type header that will be sent with the response.
                </FormHelperText>
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Typography>Charset</Typography>
                <Select
                  sx={{ backgroundColor: "#ffffff", width: "350px" }}
                  value={charset}
                  onChange={handleChangeCharset}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="UTF-8">
                    <em>UTF-8</em>
                  </MenuItem>
                  <MenuItem value={"ISO-8859-1"}>ISO-8859-1</MenuItem>
                  <MenuItem value={"UTF-16"}>UTF-16</MenuItem>
                </Select>
                <FormHelperText>
                  The Charset used to encode/decode your payload.
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item>
            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  marginBottm: 1,
                  marginLeft: 1,
                  marginTop: 1,
                  width: "740px",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <Typography>HTTP Headers</Typography>
              <TextField
                id="outlined-basic"
                label="JSON Format"
                multiline
                rows={4}
                value={httpHeader}
                onChange={handleChangeHttpHeader}
                sx={{
                  background: "#ECECEC",
                  height: "123px",
                  // border: "1px solid #D3D3D3"
                }}
              />
            </Box>
          </Grid>
          <Grid item>
            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  marginBottm: "10x",
                  marginLeft: 1,
                  marginTop: 1,
                  width: "740px",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <Typography>HTTP Response Body</Typography>
              <TextField
                id="outlined-basic"
                label="JSON Format"
                multiline
                rows={7}
                valu={httpResponseBody}
                onChange={handleChangeHttpResponseBody}
                sx={{
                  background: "#ECECEC",
                  height: "192px",
                  // border: "1px solid #D3D3D3"
                }}
              />
            </Box>
          </Grid>

          <Button
            onClick={() => {
              handleGenerateResponse();
            }}
            sx={{
              marginTop: "20px",
              height: "50px",
              width: "300px",
              marginLeft: "220px",
              display: "flex",
              justifyContent: "center",
            }}
            variant="contained"
          >
            GENERATE MY HTTP RESPONSE
          </Button>
        </Grid>
      </Box>
    </div>
  );
};

export default MockForm;
