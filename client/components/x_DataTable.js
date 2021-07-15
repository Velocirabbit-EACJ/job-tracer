/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { useTable, useSortBy } from 'react-table';
import React from 'react';

/*
company_name: "Apple"
description: "slkfjslkfj"
favorite: true
id: 7
job_title: "Senior Software Engineer"
notes: "asfksjafhsf"
post_source: "internet"
salary: 150000
status_date: "2021-07-14T07:00:00.000Z"
status_name: "applied"
*/

function DataTable({ jobData }) {
  const data = React.useMemo(
    () =>
      jobData.map((job) => ({
        companyName: job.company_name,
        statusName: job.status_name,
        favorite: job.favorite ? 'yup' : 'nope',
      })),
    [jobData]
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Company Name',
        accessor: 'companyName',
      },
      {
        Header: 'Status',
        accessor: 'statusName',
      },
      {
        Header: 'Favorite',
        accessor: 'favorite',
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup, i) => (
          <Tr key={`t-row-${i + 1}`} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Th
                key={`t-head-${i + 1}`}
                {...column.getHeaderProps(column.getSortByToggleProps())}
                isNumeric={column.isNumeric}
              >
                {column.render('Header')}
                <chakra.span pl="4">
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <TriangleDownIcon aria-label="sorted descending" />
                    ) : (
                      <TriangleUpIcon aria-label="sorted ascending" />
                    )
                  ) : null}
                </chakra.span>
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <Tr key={`tr-body-${i + 1}`} {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <Td
                  key={`td-body-${i + 1}`}
                  {...cell.getCellProps()}
                  isNumeric={cell.column.isNumeric}
                >
                  {cell.render('Cell')}
                </Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}

export default DataTable;
