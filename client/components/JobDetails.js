import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

export default function JobDetails() {
  return (
    <div>
      <Box bg="grey" w="100%" p={4} color="black">
        <Text>Job Title</Text>
      </Box>
      <Box bg="grey" w="100%" p={4} color="black">
        Company Name
      </Box>
      <Flex direction="row" justify="flex-start">
        <Box bg="grey" w="100%" p={4} color="black">
          Salary
        </Box>
        <Box bg="grey" w="100%" p={4} color="black">
          Status
        </Box>
        <Box bg="grey" w="100%" p={4} color="black">
          Post Source
        </Box>
      </Flex>
      <Flex>
        <Box bg="grey" w="100%" p={4} color="black">
          Created
        </Box>
        <Box bg="grey" w="100%" p={4} color="black">
          Thursday July 15, 2021
        </Box>
      </Flex>
    </div>
  );
}
