import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Stack,
  Text,
  Link,
  Flex,
  IconButton,
  StackDivider,
  Heading,
} from '@chakra-ui/react';
import { FaHeart, FaRegHeart, FaEllipsisV, FaTimes } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import StatusTag from './StatusTag';

export default function JobList({ jobData, deleteJob }) {
  return (
    <Stack
      spacing={6}
      align="stretch"
      direction="column"
      divider={<StackDivider borderColor="gray.00" />}
    >
      {/* Heading */}
      <Stack direction="row" justify="space-between" align="center">
        <Box width="25%">
          <Heading as="h4" size="md">
            Company Name
          </Heading>
        </Box>
        <Box width="25%">
          <Text>Status</Text>
        </Box>

        <Box width="25%">
          <Text>Favorite</Text>
        </Box>
        <Box width="25%">
          <Text>Actions</Text>
        </Box>
      </Stack>

      {/* Jobs */}
      {jobData.map((job, i) => (
        <Stack
          direction="row"
          justify="space-between"
          align="center"
          key={`row-${i + 1}`}
        >
          <Box width="25%">
            <Link as={RouterLink} to={`/jobApplication/${job.id}`}>
              <Heading as="h4" size="md">
                {job.company_name}
              </Heading>
            </Link>
          </Box>
          <Box width="25%">
            <StatusTag status={job.status_name} />
          </Box>
          <Box width="25%">{job.favorite ? <FaHeart /> : <FaRegHeart />}</Box>
          <Box width="25%">
            <Flex justifyContent="center">
              <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="Edit"
                size="sm"
                icon={<FaEllipsisV />}
              />
              <IconButton
                ml={4}
                variant="outline"
                colorScheme="red"
                aria-label="Delete"
                size="sm"
                onClick={() => deleteJob(job.id)}
                icon={<FaTimes />}
              />
            </Flex>
          </Box>
        </Stack>
      ))}
    </Stack>
  );
}

JobList.propTypes = {
  jobData: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteJob: PropTypes.func.isRequired,
};
