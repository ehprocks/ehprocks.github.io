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
  Table,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from "../Navigation";

function Resources() {
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
              <Image width="300px" height="50px" className="logo" src={logo} alt="Logo" />
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
                  Resources
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
                  <div className="glitch-container">
                    <div className="glitch" data-text="Resources">
                      Resources
                    </div>
                  </div>
                </Heading>
              </HStack>
            </GridItem>
            <GridItem
              rowSpan={8}
              colSpan={10}
              border="0px"
              borderColor="gray.200"
            >
              <Heading
                size={{ base: "sm", md: "md", lg: "lg" }}
                className="header"
              >
                Wikipedias, Cheatsheets, and Notes:
              </Heading>
              <Table
                variant="simple"
                fontSize={{ base: "12px", md: "18px" }}
                size={{ base: "sm", md: "md" }}
              >
                <Tbody>
                  <Tr>
                    <Td>
                      <a
                        className="resource-link"
                        href="https://book.hacktricks.xyz/welcome/readme"
                      >
                        <u>HackTricks</u>
                      </a>
                    </Td>
                    <Td>
                      <Container
                        maxW={"100%"}
                        display={{ base: "none", sm: "flex" }}
                      >
                        Pentesting Wikipedia containing dozens of articles on
                        methodology, attacks, and vulnerabilities, with tons of
                        examples and payloads.
                      </Container>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <a
                        className="resource-link"
                        href="https://github.com/swisskyrepo/PayloadsAllTheThings"
                      >
                        <u>PayloadsAllTheThings</u>
                      </a>
                    </Td>
                    <Td>
                      <Container
                        maxW={"100%"}
                        display={{ base: "none", sm: "flex" }}
                      >
                        A list of useful payloads and bypasses for Web
                        Application Security.
                      </Container>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <a
                        className="resource-link"
                        href="https://www.ired.team/"
                      >
                        <u>iRedTeam</u>
                      </a>
                    </Td>
                    <Td>
                      <Container
                        maxW={"100%"}
                        display={{ base: "none", sm: "flex" }}
                      >
                        Collection of red teaming notes and cheatsheets
                        (especially useful for Windows)
                      </Container>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <a
                        className="resource-link"
                        href="https://notes.vulndev.io/wiki/"
                      >
                        <u>VulnDev</u>
                      </a>
                    </Td>
                    <Td>
                      <Container
                        maxW={"100%"}
                        display={{ base: "none", sm: "flex" }}
                      >
                        Notes from pentests, security reviews, and trainings
                        from xct.
                      </Container>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td w={{ base: "100%", sm: "30%" }}>
                      <a
                        className="resource-link"
                        href="https://ppn.snovvcrash.rocks/"
                      >
                        <u>Pentester's Promiscuous Notebook</u>
                      </a>
                    </Td>
                    <Td>
                      <Container
                        maxW={"100%"}
                        display={{ base: "none", sm: "flex" }}
                      >
                        Snovvcrash's personal GitBook for ethical penetration
                        testing, red teaming, and offensive tooling development.
                      </Container>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </GridItem>
            <GridItem rowSpan={8} colSpan={10}>
              <Heading
                size={{ base: "sm", md: "md", lg: "lg" }}
                className="header"
              >
                Tools:
              </Heading>
              <Table
                variant="simple"
                fontSize={{ base: "12px", md: "18px" }}
                size={{ base: "sm", md: "md" }}
              >
                <Tbody>
                  <Tr>
                    <Td w={{ base: "100%", sm: "30%" }}>
                      <a
                        className="resource-link"
                        href="https://github.com/carlospolop/PEASS-ng/tree/master/linPEAS"
                      >
                        <u>LinPEAS</u>
                      </a>
                    </Td>
                    <Td>
                      <Container
                        maxW={"100%"}
                        display={{ base: "none", sm: "flex" }}
                      >
                        A Linux privilege escalation script to help you find
                        vulnerabilities on Linux operating systems.
                      </Container>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td w={{ base: "100%", sm: "30%" }}>
                      <a
                        className="resource-link"
                        href="https://github.com/jpillora/chisel"
                      >
                        <u>Chisel</u>
                      </a>
                    </Td>
                    <Td>
                      <Container
                        maxW={"100%"}
                        display={{ base: "none", sm: "flex" }}
                      >
                        Quickly forward ports to access internal applications
                        from your local machine.
                      </Container>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td w={{ base: "100%", sm: "30%" }}>
                      <a
                        className="resource-link"
                        href="https://www.revshells.com/"
                      >
                        <u>Reverse Shells</u>
                      </a>
                    </Td>
                    <Td>
                      <Container
                        maxW={"100%"}
                        display={{ base: "none", sm: "flex" }}
                      >
                        Generate a variety of reverse shells using different
                        programming languages.
                      </Container>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td w={{ base: "100%", sm: "30%" }}>
                      <a
                        className="resource-link"
                        href="https://github.com/fortra/impacket"
                      >
                        <u>Impacket</u>
                      </a>
                    </Td>
                    <Td>
                      <Container
                        maxW={"100%"}
                        display={{ base: "none", sm: "flex" }}
                      >
                        A collection of Python classes for working with network
                        protocols, especially Windows-based protocols such as
                        Kerberos and SMB.
                      </Container>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </GridItem>
            <GridItem
              rowSpan={8}
              colSpan={10}
              border="0px"
              borderColor="gray.200"
            >
              <Heading
                size={{ base: "sm", md: "md", lg: "lg" }}
                className="header"
              >
                Videos and Guides:
              </Heading>
              <Table
                variant="simple"
                fontSize={{ base: "12px", md: "18px" }}
                size={{ base: "sm", md: "md" }}
              >
                <Tbody>
                  <Tr>
                    <Td w={{ base: "100%", sm: "30%" }}>
                      <a
                        className="resource-link"
                        href="https://0xdf.gitlab.io/"
                      >
                        <u>0xdf Hacks Stuff</u>
                      </a>
                    </Td>
                    <Td>
                      <Container
                        maxW={"100%"}
                        display={{ base: "none", sm: "flex" }}
                      >
                        Retired HackTheBox walkthroughs.
                      </Container>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td w={{ base: "100%", sm: "30%" }}>
                      <a
                        className="resource-link"
                        href="https://ippsec.rocks/#"
                      >
                        <u>Ippsec</u>
                      </a>
                    </Td>
                    <Td>
                      <Container
                        maxW={"100%"}
                        display={{ base: "none", sm: "flex" }}
                      >
                        Search through Ippsec's HTB walkthroughs using keywords.
                      </Container>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
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

export default Resources;
