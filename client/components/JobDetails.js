import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { BiDollarCircle } from 'react-icons/bi';
import {
  BsCheckAll,
  BsWatch,
  BsFileEarmarkSpreadsheet,
  BsCaretRightFill,
} from 'react-icons/bs';

export default function JobDetails({ singleJob }) {
  return (
    singleJob && (
      <div>
        <Flex w="100%" p={2} color="white" fontWeight="bold">
          <Text fontSize="4xl">{singleJob.job_title}</Text>
          {singleJob.favorite ? <FaHeart color="red" /> : <FaRegHeart />}
        </Flex>

        <Flex w="100%" p={4} color="white" fontWeight="bold">
          <Text fontSize="2xl"> Company: {singleJob.company_name}</Text>
        </Flex>
        <Flex direction="row" justify="flex-start">
          <Flex
            w="100%"
            p={4}
            color="white"
            align="center"
            borderTop="4px solid white"
          >
            <BiDollarCircle size={40} />
            <Text fontSize="l" ml={3}>
              {singleJob.salary}
            </Text>
          </Flex>
          <Flex
            w="100%"
            p={4}
            color="white"
            align="center"
            justify="center"
            borderTop="4px solid white"
          >
            <BsCheckAll size={40} />
            <Text as="i" fontsize="l">
              {singleJob.status_name}
            </Text>
          </Flex>
          <Flex
            borderBottom="1px solid grey"
            borderTop="4px solid white"
            w="100%"
            p={4}
            color="white"
            align="center"
            justify="center"
          >
            <BsCaretRightFill size={40} />
            <Text> Post Source {singleJob.post_source}</Text>
          </Flex>
        </Flex>
        <Flex>
          <Flex
            borderBottom="4px solid white"
            borderTop="4px solid white"
            w="100%"
            p={4}
            color="white"
          >
            <BsWatch size={40} />
            <Text ml={3}>{singleJob.status_date}</Text>
          </Flex>
          <Flex
            borderBottom="4px solid white"
            borderTop="4px solid white"
            w="100%"
            p={4}
            color="white"
            fontsize="l"
            align="center"
            justify="center"
          >
            <BsFileEarmarkSpreadsheet size={40} />
            <Text fontsize="xl"> Thursday July 15, 2021</Text>
          </Flex>
        </Flex>
      </div>
    )
  );
}
