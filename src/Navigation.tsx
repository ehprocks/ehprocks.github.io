import { useState } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  IconButton,
  HStack,
  Link,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [menuItems] = useState([
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Resources",
      path: "/resources",
    },
    {
      label: "Discord",
      path: "/discord",
    },
    {
      label: "Schedule",
      path: "/schedule",
    },

  ]);

  return (
    <>
      <HStack
        spacing={{ base: "20px", md: "40px", lg: "40px", xl: "70px" }}
        display={{ base: "none", md: "flex" }}
      >
        {menuItems.map((menuItem) => (
          <Link
            as={RouterLink}
            to={menuItem.path}
            key={menuItem.path}
            style={{ textDecoration: "none" }}
          >
            <Button
              className="butt"
              width={{ base: "80px", md: "100px", lg: "128px" }}
              fontSize={{ base: "10px", md: "14px", lg: "17px" }}
            >
              {menuItem.label}
            </Button>
          </Link>
        ))}
      </HStack>
      <IconButton
        aria-label="Open navigation menu"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        display={{ base: "flex", md: "none" }}
        color={"black"}
        backgroundColor={"greenyellow"}
        marginLeft={"auto"}
      />

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton color={"white"} />
            <DrawerHeader backgroundColor={"black"} color={"white"}>
              Navigation
            </DrawerHeader>

            <DrawerBody backgroundColor={"black"}>
              {menuItems.map((menuItem) => (
                <Link
                  as={RouterLink}
                  to={menuItem.path}
                  key={menuItem.path}
                  onClick={onClose}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    className="butt"
                    width="100%"
                    mb="10px"
                    fontSize={{ base: "10px", md: "14px", lg: "17px" }}
                  >
                    {menuItem.label}
                  </Button>
                </Link>
              ))}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

export default Navigation;
