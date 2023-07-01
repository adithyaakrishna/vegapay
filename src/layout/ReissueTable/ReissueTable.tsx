import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import { CustomChip } from '../../components/CustomChip/CustomChip';

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#F8F9F8',
    color: 'black',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const userData = [
  {
    name: 'Adi',
    userID: '1331121asdsad',
    email: 'adi@adi.com',
    roles: 'Admin',
    status: 'Approved',
    action: <Button variant="contained">Send to Checker</Button>
  }
]

export const ReissueTable = () => {
  return (
    <TableContainer component={Table}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">User ID</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Alloted Roles</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((users) => (
            <StyledTableRow key={users.userID}>
              <StyledTableCell component="th" scope="row">
                {users.name}
              </StyledTableCell>
              <StyledTableCell align="right">{users.userID}</StyledTableCell>
              <StyledTableCell align="right">{users.email}</StyledTableCell>
              <StyledTableCell align="right"><CustomChip label={users.roles} color='info'/></StyledTableCell>
              <StyledTableCell align="right"><CustomChip label={users.status} color={users.status === 'Approved' ? 'success' : 'error'}/></StyledTableCell>
              <StyledTableCell align="right">{users.action}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}