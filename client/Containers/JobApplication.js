import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import JobDetails from '../components/JobDetails';

import JobTabs from '../components/JobTabs';

export default function JobApplication() {
  return (
    <Box border="1px solid grey" w="100%">
      <Flex direction="column">
        <JobDetails />
        <JobTabs />
      </Flex>
    </Box>
  );
}
