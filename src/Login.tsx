import { useState } from "react";
import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      setResponseMessage(data.message);
    } else {
      setResponseMessage("Incorrect password!");
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4}>
        <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input type="text" value={username} onChange={handleUsernameChange} />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </FormControl>
        <Stack spacing={10}>
          <Button
            type="submit"
            bg={"yellowgreen"}
            color={"white"}
            _hover={{
              bg: "yellowgreen",
            }}
          >
            Sign in
          </Button>
          {responseMessage && <Text>{responseMessage}</Text>}
        </Stack>
      </Stack>
    </form>
  );
}

export default LoginForm;
