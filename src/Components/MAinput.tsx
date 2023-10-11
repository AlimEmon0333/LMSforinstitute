import { TextField } from "@mui/material";
import { type } from "os";
type MAinput = {
    onchange?: any,
    label: string,
    className?: string,
    type: string
}
export default function MAinput(props: MAinput) {
    return (
        <>
            <TextField className={props.className} type={props.type} id="filled-basic" label={props.label} variant="standard" onChange={props.onchange} />
        </>
    )
}