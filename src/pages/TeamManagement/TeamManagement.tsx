import { Button, Container, Grid, InputAdornment, MenuItem, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { UserRolesTable } from '../../components/UserRolesTable/UserRolesTable';
import './TeamManagement.css';

export const TeamManagement = () => {

  const users = [
    {
      value: 'Corporate User',
      label: 'Corporate User',
    },
    {
      value: 'Corporate Admin',
      label: 'Corporate Admin',
    },
    {
      value: 'Normal User',
      label: 'Normal User',
    },
    {
      value: 'End User',
      label: 'End User',
    },
  ];
  const branch = [
    {
      value: 'Latest',
      label: 'Latest',
    },
    {
      value: 'OTC Branch',
      label: 'OTC Branch',
    },
    {
      value: 'Main Branch',
      label: 'Main Branch',
    }
  ];
  const idOptions = [
    {
      value: 'Pan',
      label: 'Pan'
    },
    {
      value: 'Aadhar',
      label: 'Aadhar'
    },
    {
      value: 'License',
      label: 'License'
    },
  ]
  const statuses = [
    {
      value: 'Approve',
      label: 'Approve'
    },
    {
      value: 'Reject',
      label: 'Reject'
    },
  ]
  return (
    <>
      <Container sx={{backgroundColor: 'white', borderRadius: 3, paddingBottom: '25px'}} maxWidth="xl">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12}>
            <Typography sx={{marginTop: '-10px'}} paragraph>
              Personal Information
            </Typography>
            <Grid container>
              <Grid item xs={4}>
                <TextField size='medium' id="outlined-basic" label="Enter Name" variant="outlined" sx={{marginRight: '25px', width: '80%'}} />
              </Grid>
              <Grid item xs={4}>
                <TextField id="outlined-basic" label="Enter Mobile No." variant="outlined" sx={{marginRight: '25px', width: '80%'}} />
              </Grid>
              <Grid item xs={4}>
                <TextField id="outlined-basic" label="Enter Email" variant="outlined" sx={{marginRight: '25px', width: '80%'}} />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <TextField id="outlined-basic" label="Enter Address" variant="outlined" sx={{marginTop: '25px', width: '93%'}} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Branch Users"
                  defaultValue="Corporate Admin"
                  sx={{width: '93%'}}
                >
                  {users.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Branch Name"
                  defaultValue="Corporate Admin"
                  sx={{width: '93%'}}
                >
                  {branch.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography paragraph>
              Government ID Proof
            </Typography>
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Select ID"
                  defaultValue="Pan"
                  sx={{width: '93%'}}
                >
                  {idOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField id="outlined-basic" label="Enter Address" variant="outlined" sx={{width: '93%'}} />
              </Grid>
            </Grid>
            <Grid container sx={{marginTop: '20px'}}>
              <Button variant="outlined" color='error' sx={{marginRight: '20px'}}>Clear</Button>
              <Button variant="contained" color='primary'>Add User</Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{backgroundColor: 'white', borderRadius: 3, paddingBottom: '25px', marginTop:'60px'}} maxWidth="xl">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={6}>
                <TextField InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }} 
                  size='medium' id="outlined-basic" placeholder="Search by Mobile or Customer ID" variant="outlined" sx={{marginRight: '25px', width: '80%'}}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Select Status"
                  defaultValue="Pan"
                  sx={{width: '93%'}}
                >
                  {statuses.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div className='table-container'>
        <UserRolesTable />
      </div>
    </>
  )
}
