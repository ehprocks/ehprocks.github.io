import React, { useEffect, useState } from "react";
import Dot from "../Dot";
import "../App.scss";
import logo from "../ehp_test3.png";
import { Button, ChakraProvider } from "@chakra-ui/react";
import {
  HStack,
  Grid,
  GridItem,
  Heading,
  Container,
  Image,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from "../Navigation";

function Home() {
  const [dots, setDots] = useState<Array<typeof Dot>>([]);

  useEffect(() => {
    setDots(Array.from({ length: 40 }, () => Dot));
  }, []);
  return (
    <ChakraProvider>
      <div className="App">
        <Container
          maxW={{ base: "100%", md: "95%", lg: "90%", xl: "80%" }}
          className="content"
        >
          <Grid
            templateColumns="repeat(10, 1fr)"
            border="0px dashed"
            borderColor="green"
            gap={4}
            className="main"
          >
            <GridItem
              rowSpan={12}
              colSpan={[8, 7, 9, 9]}
              border="0px dashed"
              borderColor="gray.200"
            >
              <Link to={"/"}>
                <Image width="300px" height="75px" className="logo" src={logo} alt="Logo" />
              </Link>
            </GridItem>
            <GridItem
              rowSpan={12}
              colStart={9}
              colSpan={[2, 1, 1, 1]}
              border="0px dashed"
              borderColor="gray.200"
            >
              <Navigation />
            </GridItem>
            <GridItem
              rowSpan={8}
              colSpan={10}
              border="0px"
              borderColor="gray.200"
              className="heading"
            >
              {/* MOBILE FORMATTING */}
              <HStack display={{ base: "flex", md: "flex", lg: "none" }}>
                <Heading
                  size={{ base: "xl", md: "2xl", lg: "4xl" }}
                  className="header"
                >
                  Ethical
                </Heading>
                <Heading
                  size={{ base: "xl", md: "2xl", lg: "4xl" }}
                  className="header"
                  color={"yellowgreen"}
                >
                  Hackers
                </Heading>
              </HStack>
              <HStack display={{ base: "flex", md: "flex", lg: "none" }}>
                <Heading
                  size={{ base: "xl", md: "2xl", lg: "4xl" }}
                  className="header"
                >
                  Of Purdue
                </Heading>
              </HStack>

              {/* LAPTOP FORMATTING */}
              <HStack display={{ base: "none", md: "none", lg: "flex" }}>
                <Heading
                  size={{ base: "xl", md: "xl", lg: "4xl" }}
                  className="header"
                >
                  Ethical
                </Heading>
                <Heading
                  size={{ base: "xl", md: "xl", lg: "4xl" }}
                  className="header"
                >
                  <div className="glitch-container">
                    <div className="glitch" data-text="Hackers">
                      Hackers
                    </div>
                  </div>
                </Heading>
              </HStack>
              <HStack display={{ base: "none", md: "none", lg: "flex" }}>
                <Heading
                  size={{ base: "xl", md: "xl", lg: "4xl" }}
                  className="header"
                >
                  Of Purdue
                </Heading>
              </HStack>
            </GridItem>
            <GridItem
              rowSpan={4}
              colSpan={10}
              border="0px"
              borderColor="gray.200"
            >
              <HStack
                className="shell"
                fontSize={{
                  base: "11px",
                  sm: "12px",
                  md: "17px",
                  lg: "20px",
                }}
              >
                <h1 className="shell">turtle@ehp:~$ Learn </h1>
                <Typewriter
                  options={{
                    strings: [
                      "ethical hacking",
                      "hack the box",
                      "SQL injection",
                      "penetration testing",
                      "cross site scripting",
                      "command injection",
                      "file inclusion",
                      "Kali Linux",
                      "privilege escalation",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 30,
                    deleteSpeed: 30,
                  }}
                />
              </HStack>
            </GridItem>
            <GridItem
              rowSpan={12}
              colSpan={4}
              border="0px"
              borderColor="gray.200"
            >
              <Link to={"/discord"}>
                <Button
                  className="button"
                  fontSize={{ base: "13px", md: "15px", lg: "25px" }}
                  height={{ base: "35px", md: "35px", lg: "70px" }}
                  width={{ base: "90px", md: "90px", lg: "180px" }}
                >
                  Join Us
                </Button>
                <Container hidden>
                  <Link to="/admin"></Link>
                </Container>
              </Link>
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
            zIndex: "0",
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

export default Home;
