import React, { useEffect, useState } from "react";
import Dot from "../Dot";
import "../App.scss";
import logo from "../ehp_test3.png";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Button, ChakraProvider } from "@chakra-ui/react";
import { 
    Grid, 
    GridItem, 
    Heading, 
    Container, 
    Image 
  } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from "../Navigation";

// EVENTS
const events = [
  { title: 'Meeting', date: '2024-03-05' }
]


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
                <Image width="320px" height="80px" className="logo" src={logo} alt="Logo" />
              </Link>
            </GridItem>

            <GridItem
              rowSpan={12}
              colStart={9}
              colSpan={[2, 1, 1, 1]}
              border="0px dashed"
              borderColor="gray.200"
            >
              <Navigation/>
            </GridItem>
            
            <GridItem
              rowSpan={[1, 22, 22, 22]}
              colSpan={[0, 10, 10, 10]}
              borderColor="gray.200"
            >
       
                  <Container padding={"20px"}>
                    <FullCalendar
                      plugins={[dayGridPlugin]}
                      initialView='dayGridMonth'
                      weekends={false}
                      events={events}
                      headerToolbar={{
                        start: "prev,next today",
                        center: "title",
                        end: ""
                      }}
                    />
                  </Container>

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