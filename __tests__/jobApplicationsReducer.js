import subject from '../client/reducers/jobApplicationsReducer';

// describe the test
describe('JobApplications reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      jobApplications: [],
    };
  });

  // check for default state
  describe('default state', () => {
    it('should return a default state when given an undefined input', () => {
      expect(subject(undefined, { type: undefined })).toEqual(state);
    });
  });

  // unrecognized action types
  describe('unrecognized action types', () => {
    it('should return the original without any duplication', () => {
      const action = { type: 'aajsbicawlbejckr' };
      expect(subject(state, action)).toBe(state);
    });
  });

  // add job applications
  describe('ADD_JOB_APPLICATION', () => {
    const action = {
      type: 'ADD_JOB_APPLICATION',
      payload: {
        company_name: 'Redux Test',
        description: 'Test',
        favorite: false,
        id: 10,
        job_title: 'Redux Test',
        notes: 'Test',
        post_source: 'friend',
        salary: 9000,
        status_date: '2021-07-15T07:00:00.000Z',
        status_name: 'applied',
      },
    };

    it('adds a jobApplication', () => {
      const { jobApplications } = subject(state, action);
      expect(jobApplications[0]).toEqual({
        company_name: 'Redux Test',
        description: 'Test',
        favorite: false,
        id: 10,
        job_title: 'Redux Test',
        notes: 'Test',
        post_source: 'friend',
        salary: 9000,
        status_date: '2021-07-15T07:00:00.000Z',
        status_name: 'applied',
      });
    });

    it('returns a state object not strictly equal to the original', () => {
      expect(subject(state, action)).not.toBe(state);
    });

    it('includes a jobApplication not strictly equal to the original', () => {
      const oldJobApplicationsList = state.marketList;
      const { jobApplications } = subject(state, action);
      expect(jobApplications).not.toBe(oldJobApplicationsList);
    });
  });

  // Delete job Applications
  // describe('DELETE_JOB_APPLICATION', () => {
  //   let action;

  //   beforeEach(() => {
  //     state = {
  //       jobApplications: [
  //         {
  //           company_name: 'Redux Test To Delete',
  //           description: 'Test Delete',
  //           favorite: false,
  //           id: 10,
  //           job_title: 'Redux Test',
  //           notes: 'Test',
  //           post_source: 'friend',
  //           salary: 9000,
  //           status_date: '2021-07-15T07:00:00.000Z',
  //           status_name: 'applied',
  //         },
  //         {
  //           company_name: 'Redux Test',
  //           description: 'Test',
  //           favorite: false,
  //           id: 3,
  //           job_title: 'Redux Test',
  //           notes: 'Test',
  //           post_source: 'friend',
  //           salary: 9000,
  //           status_date: '2021-07-15T07:00:00.000Z',
  //           status_name: 'applied',
  //         },
  //       ],
  //     };

  //     action = {
  //       type: 'DELETE_JOB_APPLICATION',
  //       payload: 10,
  //     };
  //   });

  //   // it('decreases length of the job applications array', () => {
  //   //   const expectedJobListLength = state.jobApplication.length;
  //   //   const { jobApplications } = subject(state, action);
  //   //   expect(marketList[1]).toEqual(expectedMarket);
  //   // });

  //   // it('includes a marketList not strictly equal to the original', () => {
  //   //   const { marketList } = subject(state, action);
  //   //   expect(marketList).not.toBe(state.marketList);
  //   // });

  //   // it('does not mutate or duplicate other markets in marketList', () => {
  //   //   const { marketList } = subject(state, action);
  //   //   expect(marketList[0]).toBe(state.marketList[0]);
  //   // });
  // });
});
