import React from 'react';
import { Button, Flex, Box } from '@chakra-ui/react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import JobList from '../components/JobList';
import * as actions from '../actions/actions';

const mapStateToProps = ({ jobApplications }) => ({
  jobList: jobApplications.jobApplications,
});

const mapDispatchToProps = (dispatch) => ({
  deleteJob: (id) => dispatch(actions.deleteJobApplication(id)),
});

function Dashboard({ jobList, deleteJob }) {
  return (
    <Flex direction="column" width="100%">
      {/* Top Section */}
      <Box my={20}>
        <Flex justify="flex-end">
          <Button colorScheme="teal" size="md">
            Create New
          </Button>
        </Flex>
      </Box>
      {/* Job List */}
      <JobList jobData={jobList} deleteJob={deleteJob} />
    </Flex>
  );
}

Dashboard.propTypes = {
  jobList: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteJob: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
