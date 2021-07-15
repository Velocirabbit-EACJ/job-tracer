import React from 'react';
import {
  Textarea,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';

export default function JobTabs() {
  return (
    <div>
      <Tabs variant="unstyled">
        <TabList>
          <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Notes</Tab>
          <Tab _selected={{ color: 'white', bg: 'green.400' }}>History</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>
              <Textarea placeholder="..." />
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <Textarea placeholder="..." />
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
