import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import theme from './theme';
import Layout from './components/Layout';
import Dashboard from './containers/Dashboard';
import JobApplication from './containers/JobApplication';
import store from './store';
import { loadJobApplications } from './actions/actions';

function App() {
  useEffect(() => {
    store.dispatch(loadJobApplications());
  }, []);

  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Layout>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route
              path="/jobApplication/:id"
              exact
              component={JobApplication}
            />
          </Switch>
        </Layout>
      </ChakraProvider>
    </Router>
  );
}
export default App;
