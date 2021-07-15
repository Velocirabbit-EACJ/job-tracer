import { Center, Flex } from '@chakra-ui/react';
import React from 'react';
import NavBar from './Navbar';

export default function Layout({ children }) {
  return (
    <Flex direction="column" minHeight="100vh" mx="auto" my={0} p={24}>
      <NavBar />
      <Center width="100%">{children}</Center>
    </Flex>
  );
}
