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
    searchKey: string | undefined;
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

export const KitTable = (props: IProps) => {
    return (
    <TableContainer component={Table}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Customer Name</StyledTableCell>
            <StyledTableCell align="right">Card No.</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Mobile No.</StyledTableCell>
            <StyledTableCell align="right">Card Network</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.userData.map((users: any) => (
            <StyledTableRow key={users.cardNo}>
              <StyledTableCell component="th" scope="row">
                {users.name}
              </StyledTableCell>
              <StyledTableCell align="right">{users.cardNo}</StyledTableCell>
              <StyledTableCell align="right">{users.email}</StyledTableCell>
              <StyledTableCell align="right">{users.mobileNo}</StyledTableCell>
              <StyledTableCell align="right"><CustomChip label={users.cardNetwork} color='default' /></StyledTableCell>
              <StyledTableCell align="right">{users.action}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}