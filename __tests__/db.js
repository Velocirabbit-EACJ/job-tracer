/* eslint-disable no-unused-vars */
const request = require('supertest');

const server = 'http://localhost:3000';

const TestObj = {
  companyName: 'facebook',
  jobTitle: 'engineer',
  salary: 12000,
  description: 'jklj',
  postSource: 'ljlaksdjfljdasf',
  statusName: 'lkjasdf,.madsm.fma.sdf',
  statusDate: '1994-12-12',
  notes: 'asdf',
  favorite: true,
};

xdescribe('Route integration', () => {
  describe('GET /api', () => {
    // Note that we return the evaluation of `request` here! It evaluates to
    // a promise, so Jest knows not to say this test passes until that
    // promise resolves. See https://jestjs.io/docs/en/asynchronous
    it('responds with 200 status and application/JSON content type', () => {
      return request(server)
        .get('/api')
        .expect('Content-Type', /application\/json/)
        .expect(200);
    });
  });

  xdescribe('/jobApplication/:id', () => {
    xdescribe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/api/jobApplication/:id')
          .send([TestObj])
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });
    });
  });

  xdescribe('/api/jobApplication', () => {
    describe('POST', () => {
      it('responds with 200 status and application/json content type', () => {
        return request(server)
          .post('/api/jobApplication')
          .send([TestObj])
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });

      // For this test, you'll need to inspect the body of the response and
      // ensure it contains the markets list. Check the markets.dev.json file
      // in the dev database to get an idea of what shape you're expecting.
      xit('markets from "DB" json are in body of response', () => {});
    });

    xdescribe('POST', () => {
      xit('responds with 200 status and application/json content type', () => {});

      xit('responds with the updated market list', () => {});

      xit('responds to invalid request with 400 status and error message in body', () => {});
    });
  });
});
