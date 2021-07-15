import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Flex, Box } from '@chakra-ui/react';
import JobDetails from '../components/JobDetails';
import JobTabs from '../components/JobTabs';
import * as actions from '../actions/actions';

const mapDispatchToProps = (dispatch) => ({
  getSingleJob: (id) => dispatch(actions.getSingleJobApplication(id)),
});

const mapStateToProps = (state) => ({
  singleJobApplication: state.jobApplications.singleJobApplication,
});
function JobApplication({ getSingleJob, singleJobApplication }) {
  const { id } = useParams();

  console.log(singleJobApplication);

  useEffect(() => {
    getSingleJob(id);
  }, [id]);

  return (
    <Box border="1px solid grey" w="100%">
      <Flex direction="column">
        <JobDetails />
        <JobTabs />
      </Flex>
    </Box>
  );
}

JobApplication.propTypes = {
  singleJobApplication: PropTypes.shape({
    company_name: PropTypes.string.isRequired,
    description: PropTypes.string,
    favorite: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    job_title: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    post_source: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
    status_date: PropTypes.string.isRequired,
    status_name: PropTypes.string.isRequired,
  }),
  getSingleJob: PropTypes.func.isRequired,
};

JobApplication.defaultProps = {
  singleJobApplication: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(JobApplication);
