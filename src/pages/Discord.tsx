import React, { useEffect, useState } from "react";
import Dot from "../Dot";
import "../App.scss";
import logo from "../ehp_test3.png";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Stack,
  HStack,
  Grid,
  GridItem,
  Heading,
  Container,
  Image,
} from "@chakra-ui/react";
import Footer from "../footer/Footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from "../Navigation";

function Discord() {
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
              rowSpan={[1, 10, 10, 10]}
              colSpan={[1, 10, 10, 10]}
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
                  size={{ base: "2xl", md: "2xl", lg: "4xl" }}
                  className="header"
                >
                  Discord
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
                    <div className="glitch" data-text="Discord">
                      Discord
                    </div>
                  </div>
                </Heading>
              </HStack>
            </GridItem>
            <GridItem
              rowSpan={8}
              colSpan={10}
              border="0px dashed"
              borderColor="gray.200"
            >
              <Stack direction={["column", "row"]}>
                <Container>
                  <Heading>
                    Join our Discord for updates, meeting notifications, and
                    cybersecurity discussion!
                  </Heading>
                </Container>
                <Container>
                  <iframe
                    src="https://discord.com/widget?id=1050095873834614814&theme=dark"
                    width={"100%"}
                    height={"500px"}
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                  ></iframe>
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
            zIndex: "0",
          }}
        >
          {dots.map((DotComponent, index) => (
            <DotComponent key={index} />
          ))}
        </div>
      </div>
      <Footer/>
    </ChakraProvider>
  );
}

export default Discord;
