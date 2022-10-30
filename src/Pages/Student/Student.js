import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'BirthDate',
    headerName: 'Birth Date',
    type: 'number',
    width: 100,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field:"Stander",
    headerName:"Stander",
    description:"Stander ",
    width:100
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', BirthDate: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', BirthDate: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', BirthDate: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', BirthDate: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', BirthDate: null },
  { id: 6, lastName: 'Melisandre', firstName: null, BirthDate: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', BirthDate: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', BirthDate: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', BirthDate: 65 },
];

export default function Student() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );

}