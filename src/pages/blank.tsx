import React, { useEffect, useState } from "react";
import Dot from "../Dot";
import "../App.scss";
import logo from "../ehp_test3.png";
import { Button, ChakraProvider } from "@chakra-ui/react";
import { 
    Grid, 
    GridItem, 
    Heading, 
    Container, 
    Image } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from "../Navigation";

function Calendar() {
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
                <Image width="300px" height="50px" className="logo" src={logo} alt="Logo" />
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
            
            <GridItem>
              Hello
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

export default Calendar;
