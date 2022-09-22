import { Theme } from '@mui/material/styles';
import { To } from 'react-router-dom';
export interface MyItemProperty {
    path: To,
    text: String,
    icon: JSX.Element,
    open: boolean,
    handleClose: any,
}

export interface MySingleItemProperty {
    open: boolean,
    handleClose: any,
}