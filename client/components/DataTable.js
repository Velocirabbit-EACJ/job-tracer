import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Link,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { FaHeart, FaRegHeart, FaEllipsisV, FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

function DataTable({ jobData }) {
  return (
    <Box p={16}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Company Name</Th>
            <Th>Status</Th>
            <Th>Favorite</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {jobData.map((job, i) => (
            <Tr key={`row-${i + 1}`}>
              <Link as={RouterLink} to={`/jobApplications/${job.id}`}>
                <Td>{job.company_name}</Td>
              </Link>
              <Td>{job.status_name}</Td>
              <Td>{job.favorite ? <FaHeart /> : <FaRegHeart />}</Td>
              <Td>
                <Flex>
                  <IconButton
                    variant="outline"
                    colorScheme="teal"
                    aria-label="Call Sage"
                    size="sm"
                    icon={<FaEllipsisV />}
                  />
                  <IconButton
                    ml={4}
                    variant="outline"
                    colorScheme="red"
                    aria-label="Call Sage"
                    size="sm"
                    icon={<FaTimes />}
                  />
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

DataTable.propTypes = {
  jobData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DataTable;
