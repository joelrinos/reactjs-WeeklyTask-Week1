import React, { useState } from "react";
import { Box, Typography, TextField } from "@mui/material/";

const validEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
const minStringLength = new RegExp("^[a-zA-Z0-9 .]{3,}$");

const QuestionThree = () => {
  const LABEL = "Question Three - Forms";
  const [fusername, setUsername] = useState("");
  const [femail, setEmail] = useState("");
  const [fnamebool, setNameBool] = useState(true);
  const [femailbool, setEmailBool] = useState(true);

  const FormValidation = (e) => {
    // (e) => setUsername(e.target.value)
    const { id, value } = e.target;

    switch (id) {
      case "username":
        setUsername(e.target.value);
        validateString(value);
        break;
      case "enail":
        setEmail(e.target.value);
        validateEmail(value);
        break;
    }
  };

  const validateString = (nput) => {
    setNameBool(minStringLength.test(nput.trim()));
  };

  const validateEmail = (nput) => {
    setEmailBool(validEmail.test(nput.trim()));
  };

  return (
    <>
      <Box mt={5}>
        <Typography variant="h4" component="h4">
          {LABEL}
        </Typography>
      </Box>
      <Box mt={2}>
        <form>
          <Box mt={2}>
            <TextField
              id="username"
              label="Username (required)"
              variant="standard"
              value={fusername}
              onChange={(e) => FormValidation(e)}
              error={fnamebool === false}
              helperText={fnamebool === false ? "Invalid input, name." : " "}
            />
          </Box>
          <Box mt={2}>
            <TextField
              id="enail"
              label="Email (required)"
              variant="standard"
              value={femail}
              onChange={(e) => FormValidation(e)}
              error={femailbool === false}
              helperText={
                femailbool === false ? "Invalid input, email address." : " "
              }
            />
          </Box>
        </form>
      </Box>
    </>
  );
};

export default QuestionThree;
