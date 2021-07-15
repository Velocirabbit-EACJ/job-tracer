import React from 'react';
import { NavLink } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

import {
  Heading,
  Flex,
  Button,
  Link,
  useColorMode,
  Stack,
} from '@chakra-ui/react';

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      p={6}
      mb={10}
      shadow="sm"
      borderBottom="1px solid #C8C8C8"
    >
      {/* app name */}
      <Link as={NavLink} to="/">
        <Heading as="h1" size="lg" mt={[3, 0, 0, 0]} mr={[0, 3, 3, 3]}>
          Job Tracer
        </Heading>
      </Link>

      <Stack direction="row" spacing={4}>
        {/* dark mode toggler */}
        <Button rounded="50%" onClick={() => toggleColorMode()}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Stack>
    </Flex>
  );
}

export default NavBar;
