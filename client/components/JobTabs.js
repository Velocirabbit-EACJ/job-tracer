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
      <Tabs borderBottom="4px solid white">
        <TabList borderBottom="4px solid white">
          <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Notes</Tab>
          <Tab _selected={{ color: 'white', bg: 'green.400' }}>History</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>
              <Textarea
                placeholder="TYPE HERE"
                color="white"
                w="100%"
                bg="blue.500"
              />
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <Textarea
                placeholder="TYPE HERE"
                color="white"
                w="100%"
                bg="green.400"
              />
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
