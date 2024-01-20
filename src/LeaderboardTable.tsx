import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Container } from "@chakra-ui/react";

const BASE_URL = "https://hackthebox.com";

const LeaderboardTable = ({ data }) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortKey, setSortKey] = useState(null);

  const handleSort = (key) => {
    const order = sortKey === key && sortOrder === "asc" ? "desc" : "asc";
    const sorted = [...sortedData].sort((a, b) => {
      if (a[key] < b[key]) return order === "asc" ? -1 : 1;
      if (a[key] > b[key]) return order === "asc" ? 1 : -1;
      return 0;
    });

    setSortedData(sorted);
    setSortOrder(order);
    setSortKey(key);
  };

  return (
    <Table
      variant="simple"
      size={{ base: "sm", md: "md", lg: "lg" }}
      fontSize={{ base: "14px", sm: "14px", md: "16px", lg: "20px" }}
    >
      <Thead>
        <Tr>
          <Th color={"yellowgreen"} onClick={() => handleSort("avatar")}>
            Avatar
          </Th>
          <Th color={"yellowgreen"} onClick={() => handleSort("name")}>
            Username
          </Th>
          <Th color={"yellowgreen"} onClick={() => handleSort("root_owns")}>
            Root Owns
          </Th>
          <Th color={"yellowgreen"} onClick={() => handleSort("rank_text")}>
            Rank
          </Th>
          <Th color={"yellowgreen"} onClick={() => handleSort("points")}>
            Points
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {sortedData.map((user) => (
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
          <Td>{user.points}</Td>
        </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default LeaderboardTable;
