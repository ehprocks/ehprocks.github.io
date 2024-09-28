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
  { title: 'Callout', start: '2024-08-26T19:00:00'},
  { title: 'Kali VM setup', start: '2024-08-29T19:00:00'},
  { title: 'LoL Event', start: '2024-09-04T19:30:00'},
  { title: 'Career night', start: '2024-09-05T19:00:00'},
  { title: 'Kali Crash Course', start: '2024-09-09T19:00:00'},
  { title: 'TurtleCTF Showcase', start: '2024-09-12T19:00:00'},
  { title: 'Reconnaissance', start: '2024-09-16T19:00:00'},
  { title: 'Crowdstrike Recap', start: '2024-09-19T19:00:00'},
  { title: 'Uplink Walkthrough', start: '2024-09-23T19:00:00'},
  { title: 'Password Crackin\'', start: '2024-09-26T19:00:00'},
  { title: 'First Box: BoardLight', start: '2024-09-30T19:00:00'},
  { title: 'Tools of the Trade', start: '2024-10-03T19:00:00'},
  { title: 'SQLi Bootcamp', start: '2024-10-10T19:00:00'},
  { title: 'PrivEsc Basics', start: '2024-10-14T19:00:00'},
  { title: 'UHP', start: '2024-10-21T19:00:00'},
  { title: 'NCL prep', start: '2024-10-24T19:00:00'},
  { title: 'NCL recap', start: '2024-10-28T19:00:00'},
  { title: 'Common Web Vulnerabilities', start: '2024-11-04T19:00:00'},
  { title: 'Juice Shop', start: '2024-11-07T19:00:00'},
  { title: 'Juice Shop II', start: '2024-11-11T19:00:00'},
  { title: 'Wireless Pentesting', start: '2024-11-18T19:00:00'},
  { title: 'Hardware Hacking an IoT Device', start: '2024-11-21T19:00:00'},
  { title: 'EOY social', start: '2024-11-25T19:00:00'}
]


const cancelled = [

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
              rowSpan={[1, 22, 22, 22]}
              colSpan={[0, 10, 10, 10]}
              borderColor="gray.200"
            >
              <div>
                <FullCalendar
                  plugins={[dayGridPlugin, listPlugin]}
                  initialView='dayGridMonth'
                  events={events}
                  weekends={false}
                  height={"90vh"}
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
      <Footer></Footer>
    </ChakraProvider>
  );
}

export default Calendar;