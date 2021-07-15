import React from 'react';
import { Flex } from '@chakra-ui/react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DataTable from '../components/DataTable';

const mapStateToProps = ({ jobApplications }) => ({
  jobList: jobApplications.jobApplications,
});

function Dashboard({ jobList }) {
  return (
    <Flex direction="column" width="100%">
      <DataTable jobData={jobList} />
    </Flex>
  );
}

Dashboard.propTypes = {
  jobList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Dashboard);
