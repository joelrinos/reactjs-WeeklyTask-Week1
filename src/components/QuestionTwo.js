import React, { useState } from "react";
import { Box, Typography } from "@mui/material/";

const QuestionTwo = () => {
  const LABEL = "Question Two - Update 2nd Array Object";

  const [Obj, setObj] = useState([
    {
      firstname: "Leanne",
      lastname: "Graham",
    },
    {
      firstname: "Clementina",
      lastname: "DuBuque",
    },
  ]);

  const NewData = () => {
    const updateArray = [...Obj];
    updateArray[1].firstname = "Joel";
    updateArray[1].lastname = "Rinos";
    setObj(updateArray);

    return Obj.map((data, x) => {
      return (
        <Box mt={2} key={x}>
          <p>
            Full Name: {data.firstname} {data.lastname}
          </p>
        </Box>
      );
    });
  };

  return (
    <Box mt={2}>
      <Typography variant="h4" component="h4">
        {LABEL}
      </Typography>

      <Typography variant="h5" component="h5" mt={2}>
        Old Data
      </Typography>
      <Box mt={2}>
        <p>Full Name: Leanne Graham</p>
        <p>Full Name: Clementina DuBuque</p>
      </Box>
      <NewData />
    </Box>
  );
};

export default QuestionTwo;
