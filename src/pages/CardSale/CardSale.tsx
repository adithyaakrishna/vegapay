import { Button, Container, Grid, InputAdornment, MenuItem, TextField, Typography } from '@mui/material'
import BadgeIcon from '@mui/icons-material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { KitTable } from '../../layout/KitTable/KitTable';
import { SaleTable } from '../../layout/SaleTable/SaleTable';
import { ReissueTable } from '../../layout/ReissueTable/ReissueTable';

export const CardSale = () => {
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
  const [kit, setKit] = useState(true);
  const [sale, setSale] = useState(false);
  const [reissue, setReissue] = useState(false);
  const handleKitChange = () => {
    setKit(true);
    setSale(false);
    setReissue(false)
  }
  const handleSaleChange = () => {
    setKit(false);
    setSale(true);
    setReissue(false)
  }
  const handleReissueChange = () => {
    setKit(false);
    setSale(false);
    setReissue(true)
  }
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
              <Typography sx={{marginBottom: '10px', marginTop: '-10px'}}>
                Issue New Card
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={4}>
                  <Button fullWidth variant="outlined" startIcon={<BadgeIcon />} size='large' onClick={handleKitChange}>
                    Kit 
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button fullWidth variant="outlined" startIcon={<BadgeIcon />} size='large' onClick={handleSaleChange}>
                    Personalised Sale 
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button fullWidth variant="outlined" startIcon={<BadgeIcon />} size='large' onClick={handleReissueChange}>
                    Reissue 
                  </Button>
                </Grid>
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
      {kit && (
        <div className='table-container'>
          <KitTable />
        </div>
      )}
      {sale && (
        <div className='table-container'>
          <SaleTable />
        </div>
      )}
      {reissue && (
        <div className='table-container'>
          <ReissueTable />
        </div>
      )}
    </>
  )
}
