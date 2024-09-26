import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Container, Text } from "@chakra-ui/react";

const BASE_URL = "https://hackthebox.com";

const LeaderboardTable = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <Text>No data available</Text>;
  }
  
  return (
    <Table
      variant="simple"
      size={{ base: "sm", md: "md", lg: "lg" }}
      fontSize={{ base: "14px", sm: "14px", md: "16px", lg: "20px" }}
    >
      <Thead>
        <Tr>
          <Th color={"yellowgreen"}></Th>
          <Th color={"yellowgreen"}>Name</Th>
          <Th color={"yellowgreen"}>Root Owns</Th>
          <Th color={"yellowgreen"}>
            <Container display={{ base: "none", sm: "flex" }}>Rank</Container>
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((user) => (
          <Tr key={user.id}>
            <Td>
              <Container display={{ base: "none", sm: "flex" }}>
                <img
                  src={BASE_URL + user.avatar}
                  alt={user.name}
                  className="avatar"
                />
              </Container>
            </Td>
            <Td>{user.name}</Td>
            <Td>{user.root_owns}</Td>
            <Td>
              <Container display={{ base: "none", sm: "flex" }}>
                {user.rank_text}
              </Container>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default LeaderboardTable;
