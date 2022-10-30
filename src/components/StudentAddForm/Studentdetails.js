
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Studentdetails() {
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '50ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <Box component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '38ch' },
          display: "flex",
          justifyContent: "space-around"
        }}
        noValidate
        autoComplete="off">
        <TextField
          required
          id="outlined-required"
          label="First Name"

        />
        <TextField
          required
          id="outlined-disabled"
          label="Middle Name"
        />
        <TextField
          required
          id="outlined-password-input"
          label="Last Name"
          type="text"
        />
      </Box>
      <Box component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '58ch' },
          display: "flex",
          justifyContent: "space-around"
        }}
        noValidate
        autoComplete="off">
        <TextField
          required
          id="outlined-read-only-input"
          label="Father Name"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          required
          id="outlined-number"
          label="Mother Name"
          type="text"
        />
      </Box>
      <Box component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '58ch' },
          display: "flex",
          justifyContent: "space-around"
        }}
        noValidate
        autoComplete="off">
        <TextField
          required
          id="outlined-read-only-input"
          label="Student Id"
        />
        <TextField
          required
          id="Date of birth"
          label="Date of birth"
          type="text"
        />
      </Box>
      <Box component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '119ch' },
          display: "flex",
          justifyContent: "space-around"
        }}
        noValidate
        autoComplete="off">
        <TextField
          required
          multiline
          id="Address"
          label="Address"
          type="text"
          rows={2}
        />
      </Box>
      <Box component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '38ch' },
          display: "flex",
          justifyContent: "space-around"
        }}
        noValidate
        autoComplete="off">

        <TextField
          required
          id="outlined-disabled"
          label="District"
        />
        <TextField
          required
          id="outlined-password-input"
          label="State"
          type="text"
        />
        <TextField
          required
          id="outlined-required"
          label="Pin code"
          type="number"
        />
      </Box>

    </div>

  </Box>
  )
}

export default Studentdetails