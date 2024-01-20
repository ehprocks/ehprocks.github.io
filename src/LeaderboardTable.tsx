import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Container,
  IconButton,
} from "@chakra-ui/react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

const BASE_URL = "https://hackthebox.com";

const LeaderboardTable = ({ data }) => {
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const sortedData = data.slice().sort((a, b) => {
    if (sortBy === "root_owns") {
      return sortOrder === "asc"
        ? a.root_owns - b.root_owns
        : b.root_owns - a.root_owns;
    } else if (sortBy === "points") {
      return sortOrder === "asc" ? a.points - b.points : b.points - a.points;
    } else {
      // Default sorting by username
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return sortOrder === "asc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    }
  });

  return (
    <Table
      variant="simple"
      size={{ base: "sm", md: "md", lg: "lg" }}
      fontSize={{ base: "14px", sm: "14px", md: "16px", lg: "20px" }}
    >
      <Thead>
        <Tr>
          <Th color={"yellowgreen"}>Avatar</Th>
          <Th color={"yellowgreen"} onClick={() => handleSort("name")}>
            Username{" "}
            {sortBy === "name" && (
              <IconButton
                size="xs"
                aria-label="Sort Order"
                icon={sortOrder === "asc" ? <FaSortUp /> : <FaSortDown />}
              />
            )}
          </Th>
          <Th color={"yellowgreen"} onClick={() => handleSort("root_owns")}>
            Root Owns{" "}
            {sortBy === "root_owns" && (
              <IconButton
                size="xs"
                aria-label="Sort Order"
                icon={sortOrder === "asc" ? <FaSortUp /> : <FaSortDown />}
              />
            )}
          </Th>
          <Th color={"yellowgreen"} onClick={() => handleSort("rank_text")}>
            Rank{" "}
            {sortBy === "rank_text" && (
              <IconButton
                size="xs"
                aria-label="Sort Order"
                icon={sortOrder === "asc" ? <FaSortUp /> : <FaSortDown />}
              />
            )}
          </Th>
          <Th color={"yellowgreen"} onClick={() => handleSort("points")}>
            Points{" "}
            {sortBy === "points" && (
              <IconButton
                size="xs"
                aria-label="Sort Order"
                icon={sortOrder === "asc" ? <FaSortUp /> : <FaSortDown />}
              />
            )}
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
