import { Chip } from '@mui/material'
import './CustomChip.css'

interface IProps {
    label: string;
    color: "primary" | "default" | "secondary" | "error" | "info" | "success" | "warning" | undefined;

}

export const CustomChip = (props: IProps) => {
  return (
    <Chip label={props.label} color={props.color} variant='outlined' className='mui-chip' />
  )
}
