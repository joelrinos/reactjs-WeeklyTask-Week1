import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Box, Toolbar, Typography, TextField } from "@mui/material/";
import HOCBOXComp from "./HOCBOXComp";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [skeyword, setSearchKeyword] = useState("");
  const usersAPI = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios
      .get(usersAPI)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const Search = () => {
    let FindUsersByName = () => {
      return (
        <>
          {users
            .filter(({ name }) => {
              return name.indexOf(skeyword) >= 0;
            })
            .map((user) => {
              let { name, username, email, phone, website } = user;
              let { city } = user.address;
              return (
                <Box mt={2} key={user.id}>
                  {name} | {username} | {email} | {phone} | {website} | {city}
                </Box>
              );
            })}
        </>
      );
    };

    /*    let ViewAll = () => {
      return (
        <>
          {users.map((user) => {
            let { name, username, email, phone, website } = user;
            let { city } = user.address;
            return (
              <Box mt={2} key={user.id}>
                <p>
                  {name} | {username} | {email} | {phone} | {website} | {city}
                </p>
              </Box>
            );
          })}
        </>
      );
    };*/

    return <FindUsersByName />;
  };

  return (
    <Box mt={2}>
      <Typography variant="h4" component="h4" mt={5}>
        User List!
      </Typography>
      <TextField
        label="Search by name"
        variant="standard"
        fullWidth
        value={skeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <Typography variant="body" component="p">
        <Search />
      </Typography>
    </Box>
  );
};

const QuestionOne = () => {
  return (
    <Box mt={2}>
      <Typography variant="h4" component="p">
        Question One - HOC Random Background
      </Typography>
      <HOCBOXComp />
      <HOCBOXComp />
    </Box>
  );
};

const PHome = () => {
  return (
    <Container>
      <Toolbar />
      <QuestionOne />
      <QuestionTwo />
      <QuestionThree />
      <UsersList />
    </Container>
  );
};

export default PHome;
