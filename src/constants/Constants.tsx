import { Button } from "@mui/material"

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

const userData =[
  {
    name: 'Kris',
    cardNo: '123421asdsad',
    email: 'kris@adi.com',
    mobileNo: '0987654321',
    cardNetwork: 'Visa',
    action: <Button variant="contained">Create Account</Button>
  },
  {
    name: 'Adi',
    cardNo: '1331121asdsad',
    email: 'adi@adi.com',
    mobileNo: '1234567890',
    cardNetwork: 'RuPay',
    action: <Button variant="outlined">View</Button>
  }
]

const reIssueData = [
  {
    kitNo: '1212121',
    name: 'Adi',
    programName: 'Ebix Cash',
    customerID: '321',
    cardNo: '12341234123412343',
    expiryDate: '21/09/2022',
    activationDate: '21/09/2022',
    status: 'Approved',
    details: <Button variant="contained">View</Button>
  },
  {
    kitNo: '12312312',
    name: 'Kris',
    programName: 'Ebix Cash',
    customerID: '123',
    cardNo: '12341245123412343',
    expiryDate: '21/09/2022',
    activationDate: '21/09/2022',
    status: 'Rejected',
    details: <Button variant="contained">View</Button>
  },
  {
    kitNo: '2423452',
    name: 'Kris',
    programName: 'Ebix Cash',
    customerID: '123',
    cardNo: '12341245123412343',
    expiryDate: '21/09/2022',
    activationDate: '21/09/2022',
    status: 'Pending',
    details: <Button variant="contained">View</Button>
  }
]

const salesData = [
  {
    name: 'Adi',
    programName: 'Ebix Cash',
    customerID: '321',
    cardNo: '12341234123412343',
    expiryDate: '21/09/2022',
    activationDate: '21/09/2022',
    status: 'Approved',
    details: <Button variant="contained">View</Button>
  },
  {
    name: 'Kris',
    programName: 'Ebix Cash',
    customerID: '123',
    cardNo: '12341245123412343',
    expiryDate: '21/09/2022',
    activationDate: '21/09/2022',
    status: 'Rejected',
    details: <Button variant="contained">View</Button>
  },
  {
    name: 'Kris',
    programName: 'Ebix Cash',
    customerID: '321',
    cardNo: '12341245123412343',
    expiryDate: '21/09/2022',
    activationDate: '21/09/2022',
    status: 'Pending',
    details: <Button variant="contained">View</Button>
  }
]

export {statuses, userData, reIssueData, salesData};