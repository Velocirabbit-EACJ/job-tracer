import React from 'react';
import { Tag } from '@chakra-ui/react';

export default function StatusTag({ status }) {
  let color;
  switch (status) {
    case 'applied':
      color = 'green';
      break;
    case 'offer received':
      color = 'green';
      break;
    default:
      color = 'teal';
      break;
  }
  return (
    <Tag size="md" variant="solid" colorScheme={color}>
      {status}
    </Tag>
  );
}
