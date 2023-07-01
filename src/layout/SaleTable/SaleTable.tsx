/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CustomChip } from '../../components/CustomChip/CustomChip';

interface IProps {
    userData: any;
}

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

export const SaleTable = (props: IProps) => {
  return (
    <TableContainer component={Table}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Program Name</StyledTableCell>
            <StyledTableCell align="right">Customer ID</StyledTableCell>
            <StyledTableCell align="right">Card No.</StyledTableCell>
            <StyledTableCell align="right">Expiry Date</StyledTableCell>
            <StyledTableCell align="right">Activation Date</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Details</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.userData.map((users: any) => (
            <StyledTableRow key={users.customerID}>
              <StyledTableCell component="th" scope="row">
                {users.name}
              </StyledTableCell>
              <StyledTableCell align="right">{users.programName}</StyledTableCell>
              <StyledTableCell align="right">{users.customerID}</StyledTableCell>
              <StyledTableCell align="right">{users.cardNo}</StyledTableCell>
              <StyledTableCell align="right">{users.expiryDate}</StyledTableCell>
              <StyledTableCell align="right">{users.activationDate}</StyledTableCell>
              <StyledTableCell align="right"><CustomChip label={users.status} color={users.status === 'Approved' ? 'success' : users.status === 'Pending' ? 'warning' : 'error'}/></StyledTableCell>
              <StyledTableCell align="right">{users.details}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}