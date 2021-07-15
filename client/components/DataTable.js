import { Table, Thead, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';

import React from 'react';

function DataTable({ jobData }) {
  return (
    <Box p={16}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Company Name</Th>
            <Th>Status</Th>
            <Th>Favorite</Th>
          </Tr>
        </Thead>
        <Tbody>
          {jobData.map((job, i) => (
            <Tr key={`row-${i + 1}`}>
              <Td>{job.company_name}</Td>
              <Td>{job.status_name}</Td>
              <Td textAlign="center">
                {job.favorite ? <FaHeart /> : <FaRegHeart />}
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
