import React, { useEffect, useState, useRef } from "react";
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
import Footer from "../footer";
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
  { title: 'Callout', start: '2025-01-23T19:30:00'},
];

function Calendar() {
  const [dots, setDots] = useState<typeof Dot[]>([]);
  const calendarRef = useRef<FullCalendar>(null);
  
  useEffect(() => {
    setDots(Array.from({ length: 40 }, () => Dot));
    
    const handleResize = () => {
      if (calendarRef.current) {
        const calendarApi = calendarRef.current.getApi();
        if (window.innerWidth < 768) {
          calendarApi.changeView('listMonth');
        } else {
          calendarApi.changeView('dayGridMonth');
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    
    return () => window.removeEventListener('resize', handleResize);
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
              rowSpan={[1, 22, 22, 22]}
              colSpan={[0, 10, 10, 10]}
              borderColor="gray.200"
            >
              <div>
                <FullCalendar
                  ref={calendarRef}
                  plugins={[dayGridPlugin, listPlugin]}
                  initialView='dayGridMonth'
                  events={events}
                  weekends={false}
                  height={"90vh"}
                  headerToolbar={{
                    start: "prev,next",
                    center: "title",
                    end: "dayGridMonth,listMonth"
                  }}
                />
              </div>
            </GridItem>
          </Grid>
        </Container>
        <div
          id="dot-wrapper"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: -1,
          }}
        >
          {dots.map((DotComponent, index) => (
            <DotComponent key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </ChakraProvider>
  );
}

export default Calendar;
