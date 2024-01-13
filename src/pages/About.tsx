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
import { FaLaptopCode } from "react-icons/fa";
import { SiHackthebox } from "react-icons/si";
import { Icon } from "@chakra-ui/react";
import { IoMdPeople } from "react-icons/io";
import Navigation from "../Navigation";

function About() {
  const [dots, setDots] = useState<Array<typeof Dot>>([]);

  useEffect(() => {
    setDots(Array.from({ length: 40 }, () => Dot));
  }, []);
  return (
    <ChakraProvider>
      <div className="App">
        <Container
          maxW={{ base: "95%", md: "95%", lg: "90%", xl: "80%" }}
          className="content"
        >
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
              <Image width="320px" height="80px" className="logo" src={logo} alt="Logo" />
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
                  About
                </Heading>
                <Heading
                  size={{ base: "xl", md: "2xl", lg: "4xl" }}
                  className="header"
                  color={"yellowgreen"}
                >
                  Us
                </Heading>
              </HStack>

              {/* LAPTOP FORMATTING */}
              <HStack
                display={{ base: "none", md: "none", lg: "flex" }}
                spacing={"30px"}
              >
                <Heading
                  size={{ base: "xl", md: "xl", lg: "4xl" }}
                  className="header"
                >
                  About
                </Heading>
                <Heading
                  size={{ base: "xl", md: "xl", lg: "4xl" }}
                  className="header"
                >
                  <div className="glitch-container">
                    <div className="glitch" data-text="Us">
                      Us
                    </div>
                  </div>
                </Heading>
              </HStack>
            </GridItem>
            <GridItem
              rowSpan={[1, 22, 22, 22]}
              colSpan={[0, 10, 10, 10]}
              borderColor="gray.200"
            >
              <Container centerContent display={{ base: "none", sm: "flex" }}>
                <Container
                  className="box"
                  height={{
                    base: "325px",
                    sm: "200px",
                    md: "280px",
                    lg: "280px",
                    xl: "280px",
                  }}
                  width={{
                    base: "260px",
                    sm: "300px",
                    md: "600px",
                    lg: "600px",
                  }}
                  fontSize={{ base: "11px", md: "16px", lg: "16px" }}
                >
                  <Container padding={"20px"}>
                    <Typewriter
                      options={{
                        autoStart: true,
                        loop: false,
                        delay: 0.5,
                        deleteSpeed: 30,
                      }}
                      onInit={(typewriter) => {
                        typewriter
                          .typeString(
                            "EHP started as a group of CIT seniors who met weekly to work on HackTheBox machines. Through word of mouth, more students started coming to the meetings, and our unofficial club grew quickly."
                          )
                          .start()
                          .pauseFor(1000)
                          .typeString(
                            "<br /><br /> After months of regular meetings, we decided to become an official club to grow our community, and eventually pass the torch onto the next generation of ethical hackers of Purdue."
                          );
                      }}
                    />
                  </Container>
                </Container>
              </Container>
            </GridItem>

            <GridItem
              rowSpan={30}
              colSpan={10}
              border="0px"
              borderColor="gray.200"
            >
              <Grid
                templateColumns="repeat(9, 1fr)"
                border="0px"
                borderColor="green"
                gap={4}
                className="main"
              >
                <GridItem
                  rowSpan={1}
                  colSpan={[9, 9, 9, 3]}
                  border="0px"
                  borderColor="gray.200"
                >
                  <Container centerContent>
                    <Icon
                      as={FaLaptopCode}
                      boxSize={12}
                      color={"yellowgreen"}
                      padding={"5px"}
                    />
                    <Container paddingTop={"20px"}>
                      <p>
                        We are dedicated to exploring the world of cybersecurity
                        and ethical hacking. EHP is open to anyone who is
                        interested in learning more about this field, regardless
                        of major or skill level.
                      </p>
                    </Container>
                  </Container>
                </GridItem>
                <GridItem
                  rowSpan={1}
                  colSpan={[9, 9, 9, 3]}
                  border="0px"
                  borderColor="gray.200"
                >
                  <Container centerContent>
                    <Icon
                      as={SiHackthebox}
                      boxSize={12}
                      color={"yellowgreen"}
                      borderRadius={"50%"}
                      padding={"5px"}
                    />
                    <Container paddingTop={"20px"}>
                      <p style={{ textAlign: "left" }}>
                        EHP utilizes pentesting training platforms like
                        HackTheBox and TryHackMe to improve our technical skills
                        in ethical hacking and cybersecurity. These platforms
                        provide realistic virtual environments where we can test
                        our skills by solving challenges from basic to advanced
                        levels.
                      </p>
                    </Container>
                  </Container>
                </GridItem>
                <GridItem
                  rowSpan={1}
                  colSpan={[9, 9, 9, 3]}
                  border="0px"
                  borderColor="gray.200"
                >
                  <Container centerContent>
                    <Icon
                      as={IoMdPeople}
                      boxSize={12}
                      color={"yellowgreen"}
                      borderRadius={"50%"}
                      padding={"5px"}
                    />
                    <Container paddingTop={"20px"}>
                      <p>
                        EHP is a community-driven and collaborative club that
                        fosters a supportive and inclusive environment for all
                        members. We encourage members to work together, share
                        their knowledge, and collaborate on challenges.
                      </p>
                    </Container>
                  </Container>
                </GridItem>
              </Grid>
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

export default About;
