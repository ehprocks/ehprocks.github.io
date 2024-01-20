import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Container } from "@chakra-ui/react";
import { FaSortUp, FaSortDown } from "react-icons/fa"; // Import arrow icons

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

  const renderSortIndicator = (key) => {
    if (sortKey === key) {
      return sortOrder === "asc" ? <FaSortUp /> : <FaSortDown />;
    }
    return null;
  };

  //table return statement
  return (
    <Table
      variant="simple"
      size={{ base: "sm", md: "md", lg: "lg" }}
      fontSize={{ base: "14px", sm: "14px", md: "16px", lg: "20px" }}
    >
      <Thead>
        <Tr>
          <Th color={"yellowgreen"}>
            <Container onClick={() => handleSort("avatar")} display="flex" alignItems="center">
              Avatar {renderSortIndicator("avatar")}
            </Container>
          </Th>
          <Th color={"yellowgreen"}>
            <Container onClick={() => handleSort("name")} display="flex" alignItems="center">
              Username {renderSortIndicator("name")}
            </Container>
          </Th>
          <Th color={"yellowgreen"}>
            <Container onClick={() => handleSort("root_owns")} display="flex" alignItems="center">
              Root Owns {renderSortIndicator("root_owns")}
            </Container>
          </Th>
          <Th color={"yellowgreen"}>
            <Container onClick={() => handleSort("rank_text")} display="flex" alignItems="center">
              Rank {renderSortIndicator("rank_text")}
            </Container>
          </Th>
          <Th color={"yellowgreen"}>
            <Container onClick={() => handleSort("points")} display="flex" alignItems="center">
              Points {renderSortIndicator("points")}
            </Container>
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
