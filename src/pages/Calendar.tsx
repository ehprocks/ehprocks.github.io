import React, { useEffect, useState } from "react";
import Dot from "../Dot";
import "../App.scss";
import logo from "../ehp_test3.png";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from '@fullcalendar/list';
import { Button, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from "../Navigation";
import "../calendar.css";
import { 
  HStack,
  Heading,
  Grid, 
  GridItem, 
  Container, 
  Image 
} from "@chakra-ui/react";
import * as bootstrap from "bootstrap";

// EVENTS
const events = [
  { title: 'Surveillance', start: '2024-04-01T19:00:00'}, 
  { title: 'Headless', start: '2024-04-11T19:00:00'},
  { title: 'Peraton Speaker Event ', start: '2024-04-12T19:00:00'},
  { title: 'Elections', start: '2024-04-15T19:00:00'},
]

const cancelled = [
  { title: 'Meeting Cancelled', start: '2024-04-04T19:00:00'},
  { title: 'Meeting Cancelled', start: '2024-04-08T19:00:00'}
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
              <Navigation/>
            </GridItem>

            <GridItem
              rowSpan={12}
              colSpan={12}
              borderColor="gray.200"
            >
              <div>
                <FullCalendar
                  plugins={[dayGridPlugin, listPlugin]}
                  initialView='dayGridMonth'
                  events={events}
                  weekends={false}
                  defaultAllDayEventDuration={"19:00:00"}
                  height={"100vh"}
                  headerToolbar={{
                    start: "prev,next today",
                    center: "title",
                    end: "dayGridMonth,dayGridWeek,listMonth"
                  }}
                />
              </div>
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