import React, {FC} from "react"
import {Snackbar} from "@mui/material";
import MuiAlert, {AlertProps} from "@mui/material/Alert";
import {AlertMessage} from "types/common";

type Props = {
    data: AlertMessage
    isOpened: boolean
    setIsOpened: (value:boolean)=>void
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MessageAlert: FC<Props> = ({data, isOpened, setIsOpened}) => {
    const handleAlertClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsOpened(false);
    };

    const textParts = data.text.split("\n");

    return (
        <Snackbar open={isOpened} autoHideDuration={data.hideAfter ? data.hideAfter * 1000 : 3000} onClose={handleAlertClose} anchorOrigin={{vertical: 'top', horizontal: 'right' }}>
            <Alert onClose={handleAlertClose} severity={data.type ?? "info"} sx={{ width: '100%', color: "#ffffff" }}>
                { textParts.length > 1 ? textParts.map((el, key) => <div key={key}>{el}</div>) : textParts[0] }
            </Alert>
        </Snackbar>
    )
}

export default MessageAlert
