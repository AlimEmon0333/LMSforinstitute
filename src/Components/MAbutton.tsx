import { Button } from "@mui/material";
import { type } from "os";
import PersonIcon from '@mui/icons-material/Person';
type MAbutton = {
    value: string,
    Onclick?: any,
    Classname: string,
    endIcon?: any
}
export default function MAbutton(props: MAbutton) {
    return (
        <>
            <Button className={props.Classname} endIcon={props.endIcon} variant="contained" onClick={props.Onclick}>{props.value}</Button>
        </>
    )
}