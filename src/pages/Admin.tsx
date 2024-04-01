import React, { useEffect, useState } from "react";
import Dot from "../Dot";
import "../App.scss";
import logo from "../ehp_test3.png";
import { Button, ChakraProvider } from "@chakra-ui/react";
import {
  Stack,
  HStack,
  Grid,
  GridItem,
  Heading,
  Container,
  Image,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "../Login";
import Navigation from "../Navigation";

function Admin() {
  const [dots, setDots] = useState<Array<typeof Dot>>([]);

  useEffect(() => {
    setDots(Array.from({ length: 20 }, () => Dot));
  }, []);
  return (
    <ChakraProvider>
      <div className="App">
        <Container maxW="80%" className="content">
          <Grid
            templateColumns="repeat(10, 1fr)"
            border="0px"
            borderColor="green"
            gap={4}
            className="main"
          >
            <GridItem
              rowSpan={[8, 8, 12, 12]}
              colSpan={[8, 7, 9, 9]}
              border="0px dashed"
              borderColor="gray.200"
            >
              <Link to={"/"}>
              <Image width="300px" height="75px" className="logo" src={logo} alt="Logo" />
              </Link>
            </GridItem>
            <GridItem
              rowSpan={[8, 8, 12, 12]}
              colStart={9}
              colSpan={[2, 1, 1, 1]}
              border="0px dashed"
              borderColor="gray.200"
            >
              <Navigation />
            </GridItem>
            <GridItem
              rowSpan={[5, 5, 6, 8]}
              colSpan={10}
              border="0px"
              borderColor="gray.200"
              className="heading"
            >
              {/* MOBILE FORMATTING */}
              <HStack
                display={{ base: "flex", md: "flex", lg: "none" }}
                spacing={"20px"}
              >
                <Heading
                  size={{ base: "xl", md: "2xl", lg: "4xl" }}
                  className="header"
                >
                  Admin
                </Heading>
                <Heading
                  size={{ base: "xl", md: "2xl", lg: "4xl" }}
                  className="header"
                >
                  Login
                </Heading>
              </HStack>

              {/* LAPTOP FORMATTING */}
              <HStack
                display={{ base: "none", md: "none", lg: "flex" }}
                spacing={"30px"}
              >
                <Heading
                  size={{ base: "xl", md: "2xl", lg: "4xl" }}
                  className="header"
                >
                  Admin
                </Heading>
                <Heading
                  size={{ base: "xl", md: "xl", lg: "4xl" }}
                  className="header"
                >
                  <div className="glitch-container">
                    <div className="glitch" data-text="Login">
                      Login
                    </div>
                  </div>
                </Heading>
              </HStack>
            </GridItem>
            <GridItem
              rowSpan={22}
              colSpan={10}
              border="0px"
              borderColor="gray.200"
            >
              <Stack direction={["column", "row"]}>
                <Container display={{ base: "none", md: "flex" }}>
                  <Heading size={{ base: "lg" }}>
                    Welcome to the EHP mini-CTF. Your goal is to bypass the
                    login page. Please do not use automated tools or brute-force
                    techniques.
                  </Heading>
                </Container>
                <Container>
                  <Login />
                </Container>
              </Stack>
            </GridItem>
          </Grid>
        </Container>

        <div
          id="dot-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "black",
          }}
        >
          {dots.map((DotComponent, index) => (
            <DotComponent key={index} />
          ))}
        </div>
      </div>
    </ChakraProvider>
  );
}

export default Admin;
