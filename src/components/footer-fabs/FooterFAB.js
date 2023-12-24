import {Card, Fab, Paper, Stack} from "@mui/material";
import {ReactComponent as TelegramIcon} from "../../img/telegram.svg";
import {ReactComponent as InstagramIcon} from "../../img/instagram.svg";
import {ReactComponent as EmailIcon} from "../../img/email.svg";
import FAB from "../FAB/FAB";
import "./FooterFAB.css"

function FooterFAB() {
    return (
        <Paper elevation={1} className="primary-colored padded">
            <Stack direction="row" spacing={2}>
                <FAB icon={<TelegramIcon/>}/>
                <FAB icon={<InstagramIcon/>}/>
                <FAB icon={<EmailIcon/>}/>
            </Stack>
        </Paper>
    )
}

export default FooterFAB