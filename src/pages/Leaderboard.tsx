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
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LeaderboardTable from "../LeaderboardTable";
import Navigation from "../Navigation";
import Footer from "../footer";


const Statistics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://us-east1-temporal-field-383822.cloudfunctions.net/ethical-hackers/statistics"
        );
        const json = await response.json();
        console.log(json);
        setData(json.data || []); // Access the 'data' property of the response
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]);
      }
    };
    fetchData();
  }, []);

  return <LeaderboardTable data={data} />;
};


function About() {
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
                  size={{ base: "2xl", md: "2xl", lg: "4xl" }}
                  className="header"
                >
                  Leaderboard
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
                    <div className="glitch" data-text="Leaderboard">
                      Leaderboard
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
              <Statistics />
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
      <Footer></Footer>
    </ChakraProvider>
  );
}

export default About;
