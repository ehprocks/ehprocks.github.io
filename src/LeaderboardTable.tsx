import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Container, IconButton } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const BASE_URL = "https://hackthebox.com";

const LeaderboardTable = ({ data }) => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const sortedData = sortBy
    ? data.slice().sort((a, b) => {
        const aValue = a[sortBy];
        const bValue = b[sortBy];
        if (sortOrder === "asc") {
          return aValue < bValue ? -1 : 1;
        } else {
          return aValue > bValue ? -1 : 1;
        }
      })
    : data;

  return (
    <Table variant="simple" size={{ base: "sm", md: "md", lg: "lg" }}>
      <Thead>
        <Tr>
          <Th color={"yellowgreen"}></Th>
          <Th color={"yellowgreen"} onClick={() => handleSort("name")}>
            Name
            {sortBy === "name" && (sortOrder === "asc" ? <ChevronDownIcon /> : <ChevronUpIcon />)}
          </Th>
          <Th color={"yellowgreen"} onClick={() => handleSort("root_owns")}>
            Root Owns
            {sortBy === "root_owns" && (sortOrder === "asc" ? <ChevronDownIcon /> : <ChevronUpIcon />)}
          </Th>
          <Th color={"yellowgreen"} onClick={() => handleSort("rank_text")}>
            Rank
            {sortBy === "rank_text" && (sortOrder === "asc" ? <ChevronDownIcon /> : <ChevronUpIcon />)}
          </Th>
          <Th color={"yellowgreen"} onClick={() => handleSort("points")}>
            Points
            {sortBy === "points" && (sortOrder === "asc" ? <ChevronDownIcon /> : <ChevronUpIcon />)}
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {sortedData.map((user) => (
          <Tr key={user.id}>
            <Td>
              <Container display={{ base: "none", sm: "flex" }}>
                <img src={BASE_URL + user.avatar} alt={user.name} className="avatar" />
              </Container>
            </Td>
            <Td>{user.name}</Td>
            <Td>{user.root_owns}</Td>
            <Td>{user.rank_text}</Td>
            <Td>{user.points}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default LeaderboardTable;